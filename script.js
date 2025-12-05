// LISTA DE PROYECTOS CON DETALLES
const projects = [
    {
        title: "Personal Finance Analyzer",
        description: "Herramienta de Data Science que procesa CSVs de gastos, genera estadísticas y exporta reportes PDF.",
        tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
        github: "https://github.com/ryakimovicz/finance-analyzer",
        details: `
            <h3>📊 Descripción</h3>
            <p>Una herramienta de análisis de datos desarrollada en Python que procesa archivos de gastos (CSV), realiza cálculos estadísticos y genera automáticamente un reporte financiero en formato PDF con gráficos visuales.</p>
            <h3>✨ Características</h3>
            <ul>
                <li><strong>Procesamiento:</strong> Limpieza de datos crudos utilizando <code>Pandas</code>.</li>
                <li><strong>Visualización:</strong> Gráficos de torta (Pie Charts) automáticos con <code>Matplotlib</code>.</li>
                <li><strong>Reporte:</strong> Generación de PDF listo para imprimir con <code>FPDF</code>.</li>
            </ul>
            <h3>📸 Demostración</h3>
            <p><em>Output en consola y Reporte PDF generado:</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/finance-analyzer/main/img/pdf_preview.png" alt="Reporte PDF">
        `
    },
    {
        title: "MercadoLibre Price Tracker",
        description: "Bot de monitoreo de precios en tiempo real. Web scraping automatizado y alertas por email.",
        tags: ["Python", "Web Scraping", "Automation", "SMTP"],
        github: "https://github.com/ryakimovicz/ml-price-tracker",
        details: `
            <h3>📉 Descripción</h3>
            <p>Script de automatización que monitorea el precio de productos en MercadoLibre Argentina. Extrae la información del producto y envía una notificación por correo electrónico si el precio baja del objetivo establecido.</p>
            <h3>✨ Características</h3>
            <ul>
                <li><strong>Scraping:</strong> Extracción precisa con <code>BeautifulSoup4</code>.</li>
                <li><strong>Anti-Bloqueo:</strong> Headers rotativos para evitar errores 429.</li>
                <li><strong>Alertas:</strong> Emails automáticos vía SMTP de Gmail.</li>
            </ul>
            <h3>📸 Funcionamiento</h3>
            <p><em>Detección en consola y Alerta real recibida por Email:</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/ml-price-tracker/main/img/console_output.png" alt="Consola">
            <img src="https://raw.githubusercontent.com/ryakimovicz/ml-price-tracker/main/img/email_alert.png" alt="Email" style="margin-top:10px">
        `
    },
    {
        title: "URL Shortener API",
        description: "Servicio de acortamiento de URLs con Python. Redirección eficiente y base de datos SQLite.",
        tags: ["Python", "FastAPI", "SQLite", "Backend"],
        github: "https://github.com/ryakimovicz/url-shortener",
        details: `
            <h3>🚀 Descripción</h3>
            <p>Sistema completo de acortamiento de URLs con arquitectura Cliente-Servidor. Incluye una REST API robusta con <strong>FastAPI</strong> y un cliente CLI interactivo.</p>
            <h3>✨ Características</h3>
            <ul>
                <li><strong>API RESTful:</strong> Endpoints CRUD definidos.</li>
                <li><strong>Métricas:</strong> Conteo automático de clicks.</li>
                <li><strong>Persistencia:</strong> Base de datos SQLite nativa.</li>
            </ul>
            <h3>📸 Capturas</h3>
            <p><em>Cliente de Consola (CLI):</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/url-shortener/main/img/consola.png" alt="CLI">
            <p style="margin-top:15px"><em>Documentación Automática (Swagger UI):</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/url-shortener/main/img/swagger_response.png" alt="Swagger">
        `
    },
    {
        title: "Portfolio Personal (Web SPA)",
        description: "Single Page Application desarrollada desde cero. Diseño totalmente responsivo, modo oscuro y renderizado dinámico con JavaScript.",
        tags: ["JavaScript", "CSS3", "HTML5", "Web", "Frontend"],
        github: "https://github.com/ryakimovicz/portfolio",
        details: `
            <h3>🎨 Descripción</h3>
            <p>Este mismo sitio web es un proyecto técnico. Fue diseñado como una <strong>SPA (Single Page Application)</strong> sin dependencias externas (No Bootstrap, No jQuery) para demostrar dominio de los estándares web modernos.</p>
            <h3>✨ Características Técnicas</h3>
            <ul>
                <li><strong>Arquitectura:</strong> Renderizado dinámico de proyectos mediante inyección de DOM con JavaScript (JSON).</li>
                <li><strong>UX/UI:</strong> Diseño <em>Dark Mode</em> nativo con variables CSS (<code>:root</code>) y animaciones fluidas.</li>
                <li><strong>Responsive:</strong> Maquetado adaptable utilizando <strong>CSS Grid</strong> y <strong>Flexbox</strong>.</li>
                <li><strong>Performance:</strong> Carga optimizada y puntaje alto en Lighthouse al no utilizar librerías pesadas.</li>
            </ul>
            <h3>🛠️ Stack</h3>
            <p>HTML5 Semántico, CSS3 Moderno, JavaScript ES6+.</p>
        `
    },
    {
        title: "Inventory Management API",
        description: "API RESTful robusta para gestión de inventario con ASP.NET Core 8, Entity Framework y SQLite.",
        tags: ["C#", ".NET Core", "API REST", "SQL", "Entity Framework"],
        github: "https://github.com/ryakimovicz/inventory-api",
        details: `
            <h3>📦 Descripción</h3>
            <p>Una API RESTful profesional diseñada para la gestión eficiente de productos. Implementa patrones de diseño modernos, validaciones de negocio y una arquitectura limpia separada en capas (Controllers, Services, Repositories).</p>
            <h3>✨ Características Clave</h3>
            <ul>
                <li><strong>CRUD Completo:</strong> Gestión total de productos con verbos HTTP correctos.</li>
                <li><strong>Arquitectura Sólida:</strong> Uso de <strong>DTOs</strong> para seguridad y desacoplamiento.</li>
                <li><strong>Búsqueda Avanzada:</strong> Filtrado dinámico con LINQ (Case Insensitive).</li>
                <li><strong>Base de Datos:</strong> Persistencia con <strong>SQLite</strong> y migraciones de EF Core.</li>
            </ul>
            <h3>📸 Demostración</h3>
            <p><em>Documentación interactiva con Swagger UI:</em></p>
            <p style="margin-top:10px"><em>Ejemplo de petición <code>GET</code> estándar recuperando todo el inventario disponible.</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/inventory-api/master/img/swagger_demo.png" alt="Swagger Response">
            <p style="margin-top:10px"><em>Ejemplo consultando <code>/api/Products?search=laptop</code>.</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/inventory-api/master/img/swagger_search_demo.png" alt="Swagger Search">
        `
    },
    {
        title: "Foro Hub (API REST)",
        description: "Backend para un foro con autenticación JWT, CRUD de tópicos y persistencia en MySQL.",
        tags: ["Java", "Spring Boot", "JWT", "API REST", "MySQL"],
        github: "https://github.com/ryakimovicz/foro-hub-ONE",
        details: `
            <h3>🚀 Descripción</h3>
            <p>API REST que simula un foro de discusión. Gestiona tópicos, usuarios y respuestas, asegurando el acceso mediante tokens JWT.</p>
            <h3>✨ Funcionalidades</h3>
            <ul>
                <li><strong>Seguridad:</strong> Autenticación vía <code>Spring Security</code> y JWT.</li>
                <li><strong>Persistencia:</strong> MySQL con migraciones Flyway.</li>
                <li><strong>Validaciones:</strong> Reglas de negocio para evitar duplicados.</li>
            </ul>
            <h3>⚙️ Endpoints Principales</h3>
            <table class="modal-table">
                <thead><tr><th>Verbo</th><th>Endpoint</th><th>Acceso</th></tr></thead>
                <tbody>
                    <tr><td>POST</td><td>/login</td><td>Público</td></tr>
                    <tr><td>POST</td><td>/topicos</td><td>Protegido</td></tr>
                    <tr><td>GET</td><td>/topicos</td><td>Protegido</td></tr>
                    <tr><td>DELETE</td><td>/topicos/{id}</td><td>Protegido</td></tr>
                </tbody>
            </table>
        `
    },
    {
        title: "Literalura: Catálogo",
        description: "Aplicación de consola que consume la API de Gutendex y guarda libros en PostgreSQL.",
        tags: ["Java", "Spring Data JPA", "PostgreSQL", "API Integration"],
        github: "https://github.com/ryakimovicz/literalura-ONE",
        details: `
            <h3>📚 Descripción</h3>
            <p>Catálogo de libros interactivo que consume la API de <strong>Gutendex</strong>. Permite buscar libros, listar autores y filtrar por idiomas, persistiendo todo en PostgreSQL.</p>
            <h3>✨ Funcionalidades</h3>
            <ul>
                <li><strong>Búsqueda:</strong> Consulta a API externa y guardado local.</li>
                <li><strong>Estadísticas:</strong> Listado de autores vivos en determinado año.</li>
                <li><strong>Filtros:</strong> Búsqueda por idioma (ES, EN, FR, PT).</li>
            </ul>
        `
    },
    {
        title: "Conversor de Monedas",
        description: "Conversión de divisas en tiempo real consumiendo Exchange Rate API.",
        tags: ["Java", "API Integration", "JSON"],
        github: "https://github.com/ryakimovicz/conversor-monedas-java-ONE",
        details: `
            <h3>💱 Descripción</h3>
            <p>Proyecto de consola que permite convertir montos entre diferentes monedas (USD, ARS, BRL) utilizando tasas de cambio en tiempo real.</p>
            <h3>⚙️ Tecnologías</h3>
            <ul>
                <li><strong>API:</strong> Consumo de <code>ExchangeRate-API</code>.</li>
                <li><strong>Http Client:</strong> Uso de <code>Java.net.http</code>.</li>
                <li><strong>JSON:</strong> Parseo de respuestas con <code>Gson</code>.</li>
            </ul>
        `
    },
];

// LÓGICA DEL DOM
const projectsGrid = document.getElementById('projectsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-tag');

// Elementos del Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

function renderProjects(data) {
    projectsGrid.innerHTML = ''; 
    if (data.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align:center; color:#94a3b8; grid-column:1/-1;">No se encontraron proyectos.</p>';
        return;
    }

    data.forEach(project => {
        const tagsHtml = project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('');
        
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.cursor = 'pointer';
        card.onclick = () => openModal(project);
        
        card.innerHTML = `
            <div class="card-header">
                <i class="far fa-folder"></i>
                <div class="links">
                    ${project.github !== '#' ? `<a href="${project.github}" target="_blank" onclick="event.stopPropagation()"><i class="fab fa-github"></i></a>` : ''}
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">${tagsHtml}</div>
        `;
        projectsGrid.appendChild(card);
    });
}

function openModal(project) {
    const content = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <div class="project-tags" style="margin-bottom: 15px;">
                <!-- CAMBIO: Quitamos el '#' y el style inline, ahora usa el CSS global -->
                ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="modal-body">
            ${project.details}
        </div>
        <div style="margin-top: 30px; text-align: center;">
            <a href="${project.github}" target="_blank" class="btn primary">
                <i class="fab fa-github"></i> Ver en GitHub
            </a>
        </div>
    `;
    modalBody.innerHTML = content;
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; 
}

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

closeBtn.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function filterProjects() {
    const searchText = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-tag.active').getAttribute('data-filter');

    const filtered = projects.filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchText) || 
                              p.tags.some(t => t.toLowerCase().includes(searchText));
        const matchesCategory = activeCategory === 'all' || 
                        p.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()));
        return matchesSearch && matchesCategory;
    });
    renderProjects(filtered);
}

searchInput.addEventListener('input', filterProjects);
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProjects();
    });
});

/* ====================
   EFECTO TYPEWRITER
   ==================== */
const words = [
    "Python y FastAPI", 
    "Java Spring Boot", 
    "C# .NET Core", 
    "HTML, CSS y JS", 
    "SQL y Datos"
];
let i = 0;
let timer;

function typingEffect() {
    const word = words[i].split("");
    const loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').textContent += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100); 
    };
    loopTyping();
}

function deletingEffect() {
    const word = document.getElementById('typewriter').textContent.split("");
    const loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').textContent = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            typingEffect();
            return false;
        }
        timer = setTimeout(loopDeleting, 50); 
    };
    loopDeleting();
}

document.addEventListener('DOMContentLoaded', () => {
    typingEffect();
});

/* =========================================
   NAVBAR INTELEGENTE (OCULTAR AL SCROLLEAR)
   ========================================= */
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (window.innerWidth <= 768) {
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }
    } else {
        navbar.classList.remove('nav-hidden');
    }
    
    lastScrollTop = scrollTop;
});

renderProjects(projects);