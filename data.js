// LISTA DE PROYECTOS CON DETALLES
// Para agregar un proyecto nuevo, simplemente añade un nuevo bloque al final de esta lista.
window.portfolioProjects = [
  {
    title: "Jigsudo",
    description:
      "Experiencia de acertijos lógicos diarios. Seis desafíos interconectados (Juego de Memoria, Rompecabezas, Sudoku, Picos y Valles, Sopa de Números y El Código) en un solo tablero.",
    cover: "assets/covers/jigsudo_cover.png",
    tags: ["JavaScript", "Firebase", "Web", "Logic Game", "Full Stack"],
    demo: "https://jigsudo.com/",
    demoLabel: "Sitio Oficial",
    itch: "https://corolado.itch.io/jigsudo",
    github: "https://github.com/ryakimovicz/jigsudo",
    date: "Abril 2026",
    backCover: "assets/covers/jigsudo_bg.png",
    details: `
            <h3>🧩 El Origen</h3>
            <p><strong>Jigsudo</strong> nació como un concepto simple: fusionar un rompecabezas con un Sudoku. Como desarrollador independiente, este es el primer videojuego del autor. Se lideró la visión creativa y el diseño original, utilizando la IA como una herramienta estratégica para potenciar la lógica del código, el diseño de la interfaz y los recursos visuales.</p>
            <p>Este enfoque permitió, como desarrollador solitario, gestionar sistemas complejos como la lógica de generación procedimental diaria y la sincronización de datos en tiempo real, logrando un producto final pulido y competitivo.</p>
            <h3>🌍 Desafío Global Diario</h3>
            <p>Cada día a las <strong>06:00 UTC</strong>, se genera un nuevo desafío único para todo el mundo. Lo que comenzó como un prototipo evolucionó en una misión de 6 etapas interconectadas que se desarrollan en un solo tablero unificado, ofreciendo un momento diario de enfoque y ejercicio mental.</p>
            <h3>🎮 La Misión de 6 Etapas</h3>
            <ul>
                <li><strong>Juego de Memoria:</strong> Hallazgo de fragmentos ocultos de 3x3 para desbloquear el tablero.</li>
                <li><strong>Rompecabezas:</strong> Ensamblado de la cuadrícula completa de 9x9 con las piezas obtenidas.</li>
                <li><strong>Sudoku:</strong> Resolución del enigma clásico sin repetir números en filas, columnas o regiones.</li>
                <li><strong>Picos y Valles:</strong> Identificación de celdas basadas en sus valores relativos para bloquear el tablero.</li>
                <li><strong>Sopa de Números:</strong> Búsqueda de secuencias numéricas ocultas serpenteando por las celdas libres.</li>
                <li><strong>El Código:</strong> Descifrado del patrón final para completar la misión diaria.</li>
            </ul>
            <h3>🛠️ Arquitectura y Sincronización</h3>
            <p>Para garantizar una experiencia fluida, se implementó un sistema de persistencia y autenticación mediante <strong>Firebase (Auth & Firestore)</strong>. Esto permite que los jugadores sincronicen el progreso, escalen en las clasificaciones globales y mantengan el historial de partidas a través de múltiples dispositivos.</p>
            <h3>🚀 Acceso y Práctica</h3>
            <p>Se puede entrar directamente como invitado sin necesidad de registro. Se recomienda probar el <strong>Tutorial Interactivo</strong> y practicar con puzzles pasados en la sección de Historial.</p>
            <h3>💻 Filosofía Técnica</h3>
            <p>Se desarrolló íntegramente con <strong>Vanilla HTML, CSS y JavaScript</strong>. Se priorizó una arquitectura sin frameworks pesados para lograr tiempos de carga instantáneos y una ejecución fluida incluso en dispositivos de gama baja. La lógica de juego se basa en un motor de estados personalizado que gestiona las transiciones entre las 6 etapas sin necesidad de recargar la página.</p>
            <h3>🏆 Logros y Métricas</h3>
            <ul>
                <li><strong>Rendimiento:</strong> Puntaje de 100/100 en Google Lighthouse (Performance, SEO, Best Practices).</li>
                <li><strong>Escalabilidad:</strong> Capacidad para soportar miles de usuarios simultáneos gracias a la arquitectura Serverless de Firebase.</li>
                <li><strong>Accesibilidad:</strong> Diseño adaptable que garantiza que el puzzle sea jugable con mouse, teclado o pantallas táctiles.</li>
                <li><strong>Cero Dependencias:</strong> 0% de librerías externas en el frontend, reduciendo el peso de la descarga al mínimo absoluto.</li>
            </ul>
        `,
  },
  {
    title: "Decoparque Rework",
    description:
      "Rediseño moderno del sitio web de Decoparque. Enfoque en UI limpia, optimización de carga y diseño responsive.",
    cover: "assets/covers/decoparque_cover.png",
    backCover: "assets/covers/decoparque_bg.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Web", "Frontend"],
    demo: "https://ryakimovicz.github.io/decoparque-rework/",
    demoLabel: "VER BETA",
    github: "https://github.com/ryakimovicz/decoparque-rework",
    date: "Marzo 2024",
    details: `
            <h3>🌿 El Paisajismo Moderno</h3>
            <p><strong>Decoparque</strong> se especializa en la transformación de espacios verdes, ofreciendo servicios premium de paisajismo, sistemas de riego automático y nivelación de terrenos en la Zona Norte de Buenos Aires.</p>
            <h3>🔄 De Adobe Muse a Vanilla JS</h3>
            <div>
                <p>El sitio original (2017) fue construido con <i>Adobe Muse</i>, una tecnología hoy obsoleta que generaba código pesado y poco eficiente. El <strong>Rework</strong> eliminó todas las dependencias (jQuery, MuseUtils) en favor de un desarrollo <strong>100% nativo en JavaScript</strong>.</p>
                <p>Esto permitió pasar de una carga lenta y fragmentada a una experiencia instantánea y fluida, optimizando el rendimiento para dispositivos móviles.</p>
            </div>
            <hr class="page-break">
            <h3>🎨 Experiencia de Usuario (UX)</h3>
            <ul>
                <li><strong>Diseño Limpio:</strong> Una interfaz moderna que refuerza la identidad visual de la marca "Parques con Estilo".</li>
                <li><strong>Navegación Fluida:</strong> Menú "Sticky" y scroll suave con compensación de altura para una navegación sin interrupciones.</li>
                <li><strong>Diseño Adaptativo:</strong> Interfaz totalmente responsiva, optimizada para ofrecer una navegación fluida tanto en computadoras de escritorio como en dispositivos móviles.</li>
            </ul>
            <hr class="page-break">
            <h3>✨ Interactividad Avanzada</h3>
            <ul>
                <li><strong>Scroll Reveal:</strong> Uso de <code>IntersectionObserver</code> para animar la entrada de elementos de forma fluida.</li>
                <li><strong>Galería con Lightbox:</strong> Visor de imágenes programado desde cero con soporte táctil (swipe) y navegación por teclado.</li>
                <li><strong>Dual WhatsApp System:</strong> Lógica en JS para derivar consultas a diferentes áreas (Paisajismo o Riego).</li>
            </ul>
            <h3>🛠️ Optimización y Estructura</h3>
            <p>Se priorizó el <strong>HTML5 semántico</strong> para SEO y accesibilidad. Los estilos usan <strong>CSS Variables</strong> y <strong>Flexbox/Grid</strong>, logrando un rendimiento de 100/100 en Google Lighthouse sin dependencias externas.</p>
        `,
  },
  {
    title: "Flask Expense Tracker",
    description:
      "Aplicación Web Full Stack para gestión de gastos. Dashboard con gráficos interactivos (Chart.js), presupuestos y exportación a CSV.",
    tags: ["Web", "Python", "Flask", "SQL", "Chart.js", "Full Stack"],
    github: "https://github.com/ryakimovicz/flask-expense-tracker",
    date: "Noviembre 2024",
    details: `
            <h3>📊 Descripción</h3>
            <p>Una aplicación web completa que lleva el análisis de finanzas al navegador. A diferencia de los scripts de consola, este proyecto ofrece una interfaz gráfica interactiva donde se puede administrar la economía en tiempo real.</p>
            <h3>✨ Características Clave</h3>
            <ul>
                <li><strong>Dashboard Visual:</strong> Gráficos dinámicos con <code>Chart.js</code> que reaccionan a los datos.</li>
                <li><strong>Presupuestos:</strong> Lógica de negocio para calcular metas mensuales y alertas visuales de gasto.</li>
                <li><strong>Persistencia:</strong> Uso de <strong>SQLAlchemy</strong> y SQLite para guardar datos y configuraciones.</li>
                <li><strong>Reportes:</strong> Filtrado por fecha y descarga de datos en CSV.</li>
            </ul>
            <h3>📸 Demo</h3>
            <p><em>Vista del Dashboard con Presupuesto y Gráficos:</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/flask-expense-tracker/main/img/dashboard.png" alt="Dashboard Flask">
        `,
  },
  {
    title: "Personal Finance Analyzer",
    description:
      "Herramienta de Data Science que procesa CSVs de gastos, genera estadísticas y exporta reportes PDF.",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/ryakimovicz/finance-analyzer",
    date: "Diciembre 2024",
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
        `,
  },
  {
    title: "MercadoLibre Price Tracker",
    description:
      "Bot de monitoreo de precios en tiempo real. Web scraping automatizado y alertas por email.",
    tags: ["Python", "Web Scraping", "Automation", "SMTP"],
    github: "https://github.com/ryakimovicz/ml-price-tracker",
    date: "Enero 2025",
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
        `,
  },
  {
    title: "URL Shortener API",
    description:
      "Servicio de acortamiento de URLs con Python. Redirección eficiente y base de datos SQLite.",
    tags: ["Python", "FastAPI", "SQLite", "Backend"],
    github: "https://github.com/ryakimovicz/url-shortener",
    date: "Febrero 2025",
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
        `,
  },
  {
    title: "Portfolio Personal (Web SPA)",
    description:
      "Single Page Application desarrollada desde cero. Diseño totalmente responsivo, modo oscuro y renderizado dinámico con JavaScript.",
    tags: ["JavaScript", "CSS3", "HTML5", "Web", "Frontend"],
    github: "https://github.com/ryakimovicz/portfolio",
    date: "2024 - 2025",
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
        `,
  },
  {
    title: "Inventory Management API",
    description:
      "API RESTful robusta para gestión de inventario con ASP.NET Core 8, Entity Framework y SQLite.",
    tags: ["C#", ".NET Core", "API REST", "SQL", "Entity Framework"],
    github: "https://github.com/ryakimovicz/inventory-api",
    date: "2024",
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
        `,
  },
  {
    title: "Foro Hub (API REST)",
    description:
      "Backend para un foro con autenticación JWT, CRUD de tópicos y persistencia en MySQL.",
    tags: ["Java", "Spring Boot", "JWT", "API REST", "MySQL"],
    github: "https://github.com/ryakimovicz/foro-hub",
    date: "2024",
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
        `,
  },
  {
    title: "Literalura: Catálogo",
    description:
      "Aplicación de consola que consume la API de Gutendex y guarda libros en PostgreSQL.",
    tags: ["Java", "Spring Data JPA", "PostgreSQL", "API Integration"],
    github: "https://github.com/ryakimovicz/literalura",
    date: "2024",
    details: `
            <h3>📚 Descripción</h3>
            <p>Catálogo de libros interactivo que consume la API de <strong>Gutendex</strong>. Permite buscar libros, listar autores y filtrar por idiomas, persistiendo todo en PostgreSQL.</p>
            <h3>✨ Funcionalidades</h3>
            <ul>
                <li><strong>Búsqueda:</strong> Consulta a API externa y guardado local.</li>
                <li><strong>Estadísticas:</strong> Listado de autores vivos en determinado año.</li>
                <li><strong>Filtros:</strong> Búsqueda por idioma (ES, EN, FR, PT).</li>
            </ul>
        `,
  },
  {
    title: "Conversor de Monedas",
    description:
      "Conversión de divisas en tiempo real consumiendo Exchange Rate API.",
    tags: ["Java", "API Integration", "JSON"],
    github: "https://github.com/ryakimovicz/conversor-monedas",
    date: "2024",
    details: `
            <h3>💱 Descripción</h3>
            <p>Proyecto de consola que permite convertir montos entre diferentes monedas (USD, ARS, BRL) utilizando tasas de cambio en tiempo real.</p>
            <h3>⚙️ Tecnologías</h3>
            <ul>
                <li><strong>API:</strong> Consumo de <code>ExchangeRate-API</code>.</li>
                <li><strong>Http Client:</strong> Uso de <code>Java.net.http</code>.</li>
                <li><strong>JSON:</strong> Parseo de respuestas con <code>Gson</code>.</li>
            </ul>
        `,
  },
];

