// LISTA DE PROYECTOS
const projects = [
    {
        title: "MercadoLibre Price Tracker",
        description: "Bot de monitoreo de precios en tiempo real. Web scraping automatizado con BeautifulSoup, evasión de bloqueos y sistema de alertas por email vía SMTP.",
        tags: ["Python", "Web Scraping", "Automation", "SMTP"],
        github: "https://github.com/ryakimovicz/ml-price-tracker",
        demo: "#" 
    },
    {
        title: "URL Shortener API",
        description: "Servicio de acortamiento de URLs desarrollado con Python. Incluye redirección eficiente, manejo de base de datos SQLite y documentación automática.",
        tags: ["Python", "FastAPI", "SQLite", "Backend"],
        github: "https://github.com/ryakimovicz/url-shortener",
        demo: "#" 
    },
    {
        title: "Foro Hub (API REST)",
        description: "Backend completo para un foro. Implementa CRUD de tópicos, autenticación segura con JWT, validaciones y persistencia en base de datos MySQL.",
        tags: ["Java", "Spring Boot", "JWT", "API REST", "MySQL"],
        github: "https://github.com/ryakimovicz/foro-hub-ONE",
        demo: "#" 
    },
    {
        title: "Literalura: Catálogo de Libros",
        description: "Aplicación de consola que consume la API de Gutendex para buscar libros, autores y estadísticas, guardando el historial en base de datos.",
        tags: ["Java", "Spring Data JPA", "API Integration", "PostgreSQL"],
        github: "https://github.com/ryakimovicz/literalura-ONE",
        demo: "#"
    },
    {
        title: "Conversor de Monedas",
        description: "Herramienta de conversión de divisas en tiempo real consumiendo una Exchange Rate API. Manejo de JSON y HttpClient en Java.",
        tags: ["Java", "API Integration", "JSON"],
        github: "https://github.com/ryakimovicz/conversor-monedas-java-ONE",
        demo: "#"
    },
];

// LÓGICA DEL BUSCADOR (NO TOCAR)
const projectsGrid = document.getElementById('projectsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-tag');

function renderProjects(data) {
    projectsGrid.innerHTML = ''; 
    if (data.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align:center; color:#94a3b8; grid-column:1/-1;">No se encontraron proyectos.</p>';
        return;
    }

    data.forEach(project => {
        const tagsHtml = project.tags.map(tag => `<span class="tech-tag">#${tag}</span>`).join('');
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="card-header">
                <i class="far fa-folder"></i>
                <div class="links">
                    ${project.github !== '#' ? `<a href="${project.github}" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="project-tags">${tagsHtml}</div>
        `;
        projectsGrid.appendChild(card);
    });
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

renderProjects(projects);