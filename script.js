// LÓGICA DEL DOM
const projects = window.portfolioProjects || [];

// Normaliza strings para búsqueda (quita tildes y pasa a minúsculas)
function normalizeString(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

// Generador de códigos de barras únicos basados en el título
function generateBarcode(title) {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = ((hash << 5) - hash) + title.charCodeAt(i);
        hash |= 0;
    }
    let seed = Math.abs(hash);
    let result = "||";
    const blocks = ["|", "||", "|||", "| |"];
    for (let i = 0; i < 6; i++) {
        result += " " + blocks[seed % blocks.length];
        seed = Math.floor(seed / blocks.length);
    }
    return result + " ||";
}

const projectsGrid = document.getElementById("projectsGrid");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-tag");

// Elementos del Modal
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.querySelector(".lightbox-close");

function renderProjects(data) {
  projectsGrid.innerHTML = "";
  if (data.length === 0) {
    projectsGrid.innerHTML =
      '<p style="text-align:center; color:#94a3b8; grid-column:1/-1;">No se encontraron proyectos.</p>';
    return;
  }

  // Obtenemos el índice real del proyecto buscando en el array original
  // para que el número de "Issue" no cambie si se filtra.
  data.forEach((project) => {
    const originalIndex = window.portfolioProjects.indexOf(project) + 1;
    const issueNumber = originalIndex.toString().padStart(2, '0');

    const tagsHtml = project.tags
      .map((tag) => `<span class="tech-tag">${tag}</span>`)
      .join("");

    const card = document.createElement("div");
    card.className = "project-card comic-cover";
    card.style.cursor = "pointer";
    if (project.backCover) {
        card.style.backgroundImage = `url('${project.backCover}')`;
        card.style.backgroundSize = "cover";
        card.style.backgroundPosition = "center";
    }
    card.onclick = () => openModal(project);

    card.innerHTML = `
        <div class="comic-header">
            <span class="comic-brand">RY COMICS</span>
        </div>
        <div class="card-body">
            <div class="card-icons">
                <i class="far fa-folder"></i>
                <div class="links">
                    ${
                      project.github !== "#"
                        ? `<a href="${project.github}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>`
                        : ""
                    }
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">${tagsHtml}</div>
        </div>
        <div class="comic-footer">
            <div class="barcode">${generateBarcode(project.title)}</div>
        </div>
    `;
    projectsGrid.appendChild(card);
  });
}

// --- ESTADO DE PAGINACIÓN DEL MODAL ---
let pageFlipInstance = null;

async function openModal(project) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalBody");
  
  // 1. Calcular dimensiones exactas primero
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  const isMobile = vw < 768;
  
  let expectedWidth, expectedHeight;

  if (isMobile) {
      expectedWidth = vw * 0.92; 
      expectedHeight = expectedWidth * 1.4; 
      if (expectedHeight > vh * 0.8) {
          expectedHeight = vh * 0.8;
          expectedWidth = expectedHeight / 1.4;
      }
  } else {
      expectedHeight = vh * 0.65;
      expectedWidth = expectedHeight * 1.4; 
      if (expectedWidth > vw * 0.85) {
          expectedWidth = vw * 0.85;
          expectedHeight = expectedWidth / 1.4; 
      }
  }
  
  const pageWidth = isMobile ? Math.floor(expectedWidth) : Math.floor(expectedWidth / 2);
  const containerHeight = Math.floor(expectedHeight);
  const pageLimitHeight = containerHeight * 0.96;

  // 2. Precargar imágenes y esperar fuentes para una medición exacta
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = project.details;
  const imgs = tempContainer.querySelectorAll('img');
  const loadPromises = Array.from(imgs).map(img => {
      return new Promise(resolve => {
          if (img.complete) resolve();
          else {
              img.onload = resolve;
              img.onerror = resolve;
          }
      });
  });
  await Promise.all([...loadPromises, document.fonts.ready]);

  const measureDiv = document.createElement('div');
  measureDiv.className = 'page-content inner-page';
  measureDiv.style.width = `${pageWidth}px`;
  measureDiv.style.height = 'auto';
  measureDiv.style.position = 'fixed';
  measureDiv.style.top = '-9999px';
  measureDiv.style.visibility = 'hidden';
  measureDiv.style.display = 'flex'; 
  measureDiv.style.flexDirection = 'column';
  measureDiv.style.alignItems = 'start';
  measureDiv.style.boxSizing = 'border-box';
  measureDiv.style.padding = 'calc(var(--book-height) * 0.04)';
  measureDiv.style.setProperty('--book-height', `${containerHeight}px`);
  document.body.appendChild(measureDiv);

  const pages = [];
  let currentPageHtml = "";
  let pendingTitle = "";
  const projectBarcode = generateBarcode(project.title);

  function pushPage() {
      if (currentPageHtml.trim() !== "") {
          pages.push(`
            <div class="page">
                <div class="page-content inner-page">
                    ${currentPageHtml}
                </div>
            </div>`);
          currentPageHtml = "";
          measureDiv.innerHTML = "";
          pendingTitle = ""; 
      }
  }

  const panelColors = [
      'rgba(25, 35, 65, 0.95)', 
      'rgba(55, 25, 60, 0.95)', 
      'rgba(20, 55, 45, 0.95)', 
      'rgba(65, 25, 25, 0.95)', 
      'rgba(45, 45, 20, 0.95)'
  ];

  let panelIndex = 0;
  Array.from(tempContainer.children).forEach(child => {
      if (child.tagName === 'H3') {
          pendingTitle = `<h3 class="panel-narrator">${child.innerHTML}</h3>`;
          return;
      }

      if (child.tagName === 'HR' && child.classList.contains('page-break')) {
          pushPage();
          return;
      }

      if (child.tagName === 'UL') {
          const lis = Array.from(child.children);
          let currentListItems = "";
          
          lis.forEach(li => {
              const topMargin = (currentPageHtml.trim() !== "" && pendingTitle !== "") ? `margin-top: calc(var(--book-height) * 0.04);` : "";
              const testHtml = `<div class="panel-content w-6" style="${topMargin}">${pendingTitle}<ul>${currentListItems}${li.outerHTML}</ul></div>`;
              measureDiv.innerHTML = currentPageHtml + testHtml;

              if (measureDiv.scrollHeight > pageLimitHeight && currentListItems !== "") {
                  currentPageHtml += `<div class="panel-content w-6" style="${topMargin}">${pendingTitle}<ul>${currentListItems}</ul></div>`;
                  pushPage();
                  currentListItems = li.outerHTML;
              } else {
                  currentListItems += li.outerHTML;
              }
          });

          if (currentListItems !== "") {
              const topMargin = (currentPageHtml.trim() !== "" && pendingTitle !== "") ? `margin-top: calc(var(--book-height) * 0.04);` : "";
              currentPageHtml += `<div class="panel-content w-6" style="${topMargin}">${pendingTitle}<ul>${currentListItems}</ul></div>`;
              pendingTitle = "";
          }
      } else {
          // Selección de color determinista basada en el título y el índice del panel
          const hash = project.title.length + panelIndex;
          const randomColor = panelColors[hash % panelColors.length];
          panelIndex++;
          
          const topMargin = (currentPageHtml.trim() !== "" && pendingTitle !== "") ? `margin-top: calc(var(--book-height) * 0.04);` : "";
          
          let panelHtml = `<div class="panel-content" style="background-color: ${randomColor}; ${topMargin}">${pendingTitle}${child.outerHTML}</div>`;
          let rowHtml = `<div class="comic-row">${panelHtml}</div>`;
          
          measureDiv.innerHTML = currentPageHtml + rowHtml;

          if (measureDiv.scrollHeight > pageLimitHeight && currentPageHtml !== "") {
              pushPage();
              panelHtml = `<div class="panel-content" style="background-color: ${randomColor};">${pendingTitle}${child.outerHTML}</div>`;
              rowHtml = `<div class="comic-row">${panelHtml}</div>`;
              measureDiv.innerHTML = rowHtml;
          }
          
          currentPageHtml += rowHtml;
          pendingTitle = "";
      }
  });

  pushPage();
  document.body.removeChild(measureDiv);

  let html = `
    <div id="book-container">
        <div id="comic-book" style="opacity: 0; transition: opacity 0.4s ease;">
            <div class="page">
                <div class="page-content front-cover" style="background-image: url('${project.cover || ''}'); background-size: cover; background-position: center;">
                    <div class="cover-overlay"></div>
                    <div class="masthead">
                        <div class="brand-box">
                            <div class="brand-name">RY</div>
                            <div class="brand-sub">COMICS</div>
                        </div>
                    </div>
                    <h2 class="book-title">${project.title}</h2>
                </div>
            </div>
            
            <div class="page">
                <div class="page-content legal-page">
                    <div class="legal-header">
                        <h1 class="legal-title">${project.title}</h1>
                        <p class="legal-line"><strong>AUTOR:</strong> Roman Yakimovicz</p>
                        <p class="legal-line"><strong>FECHA:</strong> ${project.date || "2024 - 2025"}</p>
                        <p class="legal-line"><strong>EDICIÓN:</strong> RY Comics</p>
                    </div>

                    <div class="legal-footer">
                        <div class="legal-barcode">${projectBarcode}</div>
                    </div>
                </div>
            </div>
            ${pages.join("")}
            ${pages.length % 2 !== 0 ? `
            <div class="page">
                <div class="page-content inner-page"></div>
            </div>` : ""}
            <div class="page">
                <div class="page-content inner-page" style="display:flex; flex-direction:column; justify-content:center; align-items:center;">
                    <div class="panel-content" style="width: 80%; text-align: center; display: flex; flex-direction: column; gap: calc(var(--book-height) * 0.03); padding: calc(var(--book-height) * 0.08) calc(var(--book-height) * 0.04);">
                        <h3 class="panel-narrator">ENLACES OFICIALES</h3>
                        <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 10px;">
                            ${project.demo ? `<a href="${project.demo}" target="_blank" class="comic-btn btn-blue" style="text-decoration:none;"><i class="fas fa-external-link-alt"></i> ${project.demoLabel || "SITIO OFICIAL"}</a>` : ""}
                            ${project.itch ? `<a href="${project.itch}" target="_blank" class="comic-btn btn-red" style="text-decoration:none;"><i class="fab fa-itch-io"></i> PROBAR EDICIÓN BÁSICA</a>` : ""}
                            <a href="${project.github}" target="_blank" class="comic-btn btn-orange" style="text-decoration:none;"><i class="fab fa-github"></i> GITHUB</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page">
                <div class="page-content back-cover" style="background-image: url('${project.backCover || ''}'); background-size: cover; background-position: center; position: relative; padding: 0; display: flex; flex-direction: column;">
                    <div class="cover-overlay" style="background: rgba(15, 23, 42, 0.85); z-index: 1;"></div>
                    <div style="position: relative; z-index: 2; height: 100%; display: flex; flex-direction: column;">
                        <div class="comic-header" style="justify-content: flex-start;">
                            <span class="comic-brand">RY COMICS</span>
                        </div>
                        <div class="card-body" style="flex-grow: 1; text-align: center; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px;">
                            <h3 class="project-title" style="margin-bottom: 20px; font-size: calc(var(--book-height) * 0.08);">${project.title}</h3>
                            <p class="project-desc" style="max-width: 80%;">${project.description}</p>
                            <div class="project-tags" style="justify-content: center; margin-top: 25px;">
                                ${project.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join("")}
                            </div>
                        </div>
                        <div class="comic-footer" style="justify-content: flex-end;">
                            <div class="barcode">${projectBarcode}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

  modalBody.innerHTML = html;
  modal.style.display = "flex";
  modal.style.opacity = "1";
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";

  setTimeout(() => {
      const bookEl = document.getElementById('comic-book');
      const isMobile = window.innerWidth < 768;
      
      bookEl.style.width = `${isMobile ? pageWidth : pageWidth * 2}px`;
      bookEl.style.height = `${containerHeight}px`;
      
      document.documentElement.style.setProperty('--book-height', `${containerHeight}px`);

      pageFlipInstance = new St.PageFlip(bookEl, {
          width: pageWidth, 
          height: containerHeight, 
          size: "fixed",
          showCover: true,
          usePortrait: window.innerWidth < 768,
          showPageCorners: false,
          drawShadow: false 
      });
      pageFlipInstance.loadFromHTML(document.querySelectorAll('.page'));
      
      bookEl.style.opacity = "1";
      bookEl.setAttribute('data-state', 'read');
      bookEl.setAttribute('data-current-page', '0');

      pageFlipInstance.on('changeState', (e) => {
          bookEl.setAttribute('data-state', e.data);
      });
      
      pageFlipInstance.on('flip', (e) => {
          bookEl.setAttribute('data-current-page', e.data.toString());
      });
      
      modalBody.parentElement.classList.add('book-opening-anim');

      const preventFlip = (e) => {
          if (e.target.tagName === 'IMG' && e.target.closest('.panel-content')) {
              e.stopPropagation();
              if (e.type === 'click') {
                  openLightbox(e.target.src);
              }
          }
      };

      modalBody.addEventListener('click', preventFlip, true);
      modalBody.addEventListener('mousedown', preventFlip, true);
      modalBody.addEventListener('pointerdown', preventFlip, true);
      modalBody.addEventListener('touchstart', preventFlip, {passive: true, capture: true});
  }, 50);
}

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden"; // Mantener scroll bloqueado
}

function closeLightbox() {
    lightbox.classList.remove("active");
    // Solo restaurar scroll si el modal del proyecto NO está abierto
    if (document.getElementById("projectModal").style.display === "none") {
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
    }
}

lightboxClose.onclick = closeLightbox;
lightbox.onclick = (e) => {
    if (e.target !== lightboxImg) closeLightbox();
};

function closeModal() {
  modal.style.display = "none";
  modal.style.opacity = "0";
  modalBody.parentElement.classList.remove('book-opening-anim');
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";
  if (pageFlipInstance) {
      pageFlipInstance.destroy();
      pageFlipInstance = null;
  }
}

closeBtn.onclick = closeModal;

modal.addEventListener('mousedown', function (event) {
  // Cerramos si el click es en el fondo negro (modal),
  // en el contenedor externo (modal-content) o en el wrapper del libro (book-container)
  if (event.target === modal || 
      event.target.classList.contains('modal-content') || 
      event.target.id === 'book-container') {
    closeModal();
  }
});

function filterProjects() {
  const searchText = normalizeString(searchInput.value);
  const activeCategory = document
    .querySelector(".filter-tag.active")
    .getAttribute("data-filter");

  const filtered = projects.filter((p) => {
    const title = normalizeString(p.title);
    const desc = normalizeString(p.description);
    const details = p.details ? normalizeString(p.details) : "";
    
    const matchesSearch =
      title.includes(searchText) ||
      desc.includes(searchText) ||
      details.includes(searchText) ||
      p.tags.some((tag) => normalizeString(tag).includes(searchText));

    const matchesCategory =
      activeCategory === "all" ||
      p.tags.some((tag) => {
        const t = tag.toLowerCase();
        const cat = activeCategory.toLowerCase();
        return cat === "java" ? t === "java" : t.includes(cat);
      });
    return matchesSearch && matchesCategory;
  });
  renderProjects(filtered);
}

searchInput.addEventListener("input", filterProjects);
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filterProjects();
  });
});

/* ====================
   EFECTO TYPEWRITER
   ==================== */
const words = [
  "HTML, CSS y JS",
  "Python y FastAPI",
  "Java Spring Boot",
  "C# .NET Core",
  "SQL y Datos",
];
let i = 0;
let timer;

function typingEffect() {
  const word = words[i].split("");
  const loopTyping = function () {
    if (word.length > 0) {
      document.getElementById("typewriter").textContent += word.shift();
    } else {
      setTimeout(deletingEffect, 2000);
      return false;
    }
    timer = setTimeout(loopTyping, 100);
  };
  loopTyping();
}

function deletingEffect() {
  const word = document.getElementById("typewriter").textContent.split("");
  const loopDeleting = function () {
    if (word.length > 0) {
      word.pop();
      document.getElementById("typewriter").textContent = word.join("");
    } else {
      if (words.length > i + 1) {
        i++;
      } else {
        i = 0;
      }
      typingEffect();
      return false;
    }
    timer = setTimeout(deletingEffect, 50);
  };
  loopDeleting();
}

document.addEventListener("DOMContentLoaded", () => {
  typingEffect();
});

/* =========================================
   NAVBAR INTELEGENTE (OCULTAR AL SCROLLEAR)
   ========================================= */
let lastScrollTop = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth <= 768) {
    if (scrollTop > lastScrollTop && scrollTop > 80) {
      navbar.classList.add("nav-hidden");
    } else {
      navbar.classList.remove("nav-hidden");
    }
  } else {
    navbar.classList.remove("nav-hidden");
  }

  lastScrollTop = scrollTop;
});

/* =========================================
   SCROLL REVEAL (ANIMACIONES DE ENTRADA)
   ========================================= */
const revealElements = document.querySelectorAll(".reveal");

const revealCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach((el) => revealObserver.observe(el));

renderProjects(projects);
