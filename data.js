// LISTA DE PROYECTOS CON DETALLES
// Para agregar un proyecto nuevo, simplemente añade un nuevo bloque al final de esta lista.
window.portfolioProjects = [
  {
    title: "Pathd",
    description:
      "Plataforma para el seguimiento de bibliotecas personales y consumo multimedia. Integra películas, series, juegos, libros y música en un solo lugar.",
    cover: "assets/covers/pathd_cover.png",
    backCover: "assets/covers/pathd_bg.png",
    tags: ["React 19", "FastAPI", "TypeScript", "Python", "Web", "Full Stack"],
    github: "https://github.com/ryakimovicz/tracker-lists",
    date: "Julio 2026 | En desarrollo",
    details: `
            <h3>🌌 El Proyecto</h3>
            <p><strong>Pathd</strong> es una plataforma para el seguimiento de bibliotecas personales y monitorización del consumo multimedia. Permite a los usuarios indexar, organizar y hacer seguimiento de su progreso en libros, mangas, cómics, películas, series, animes, videojuegos y música en una única interfaz cohesiva, complementada con guías y listas de la comunidad, y un feed social en tiempo real.</p>
            <h3>🚀 Stack Tecnológico</h3>
            <ul>
                <li><strong>Backend:</strong> FastAPI (Python 3.11+), SQLite y PostgreSQL via SQLAlchemy, JWT + HttpOnly cookies.</li>
                <li><strong>Frontend:</strong> React 19 + TypeScript + Vite, Estado Global mediante Contextos.</li>
                <li><strong>Estilos:</strong> Vanilla CSS con sistema de diseño basado en variables (Soporte dark/light mode).</li>
            </ul>
            <hr class="page-break">
            <h3>🌐 Integración de APIs Externas</h3>
            <p>El sistema se nutre de 4 fuentes de datos masivas procesadas a través del backend:</p>
            <ul>
                <li><strong>TMDB:</strong> Películas, series, animes y detalle de episodios.</li>
                <li><strong>IGDB:</strong> Videojuegos (autenticado via Twitch OAuth2).</li>
                <li><strong>Google Books & Comic Vine:</strong> Libros, cómics y mangas.</li>
            </ul>
            <hr class="page-break">
            <h3>📖 Secciones Clave</h3>
            <ul>
                <li><strong>Editor de Guías:</strong> Constructor de guías y listas con ordenamiento manual e importador de datos desde las APIs.</li>
                <li><strong>Buscador Global:</strong> Motor unificado que conecta las 4 APIs desde un único campo de búsqueda.</li>
                <li><strong>Estantería:</strong> Catálogo personal organizado por categorías y estados de progreso.</li>
                <li><strong>Social:</strong> Timeline comunitaria con actividad de seguidos, interacciones, votos y comentarios.</li>
                <li><strong>Modificaciones:</strong> Sistema para crear y adoptar bloques de adiciones a guías existentes de la comunidad.</li>
            </ul>
        `,
  },
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
    date: "v1.0 Abril 2026 | En desarrollo",
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
                <li><strong>Gestión de Datos:</strong> Sincronización de progreso y autenticación de usuarios en tiempo real mediante Firebase (Auth y Firestore).</li>
                <li><strong>Accesibilidad:</strong> Diseño adaptable que garantiza que el puzzle sea jugable con mouse, teclado o pantallas táctiles.</li>
                <li><strong>Cero Dependencias:</strong> 0% de librerías externas en el frontend, reduciendo el peso de la descarga al mínimo absoluto.</li>
            </ul>
        `,
  },
  {
    title: "DecoParque CRM",
    description:
      "Sistema integral de gestión de clientes y monitoreo de WhatsApp en tiempo real. Sincronización híbrida con Google Sheets y persistencia en servidor para alto rendimiento.",
    cover: "assets/covers/crm_cover.png",
    backCover: "assets/covers/crm_bg.png",
    tags: ["Node.js", "Socket.io", "SQLite", "Web", "Full Stack"],
    github: "https://github.com/ryakimovicz/decoparque-app-public",
    date: "Abril 2026",
    details: `
            <h3>💼 Solución Empresarial Real</h3>
            <p><strong>DecoParque CRM</strong> nació de la necesidad de centralizar la logística de una empresa de paisajismo. La aplicación permite gestionar clientes, obras y comunicaciones sin depender de múltiples plataformas dispersas.</p>
            <img src="assets/proyectos/crm_inbox.png" alt="Inbox CRM">
            <h3>🏗️ Arquitectura Híbrida y Sincronización</h3>
            <p>El sistema utiliza una arquitectura avanzada para garantizar la integridad de los datos:</p>
            <hr class="page-break">
            <ul>
                <li><strong>Nube (Google Sheets):</strong> Núcleo de persistencia principal, permitiendo la edición administrativa directa.</li>
                <li><strong>Servidor (SQLite):</strong> Historial de chats y metadatos en el backend para búsquedas instantáneas y baja latencia.</li>
                <li><strong>Gateway de WhatsApp:</strong> Integración nativa con <code>whatsapp-web.js</code> para captura de mensajes sin costos de API.</li>
            </ul>
            <h3>⚡ Comunicación en Tiempo Real</h3>
            <p>Gracias a <strong>Socket.io</strong>, el sistema ofrece una experiencia multi-agente donde los mensajes entrantes se reflejan en todos los dispositivos al instante.</p>
            <hr class="page-break">
            <h3>📍 Logística y Geolocalización</h3>
            <img src="assets/proyectos/crm_mapa.png" alt="Mapa CRM">
            <ul>
                <li><strong>Selector de Mapas:</strong> Ubicación precisa mediante Leaflet en zonas sin numeración estándar.</li>
                <li><strong>Redirección GPS:</strong> Acceso directo a Google Maps y Waze desde el CRM.</li>
                <li><strong>Orden Inteligente:</strong> Algoritmo de organización automática según visitas y contacto.</li>
            </ul>
            <hr class="page-break">
            <h3>📱 Experiencia PWA</h3>
            <p>Diseñada bajo la filosofía <strong>Mobile-First</strong>, la aplicación es instalable y cuenta con gestos táctiles para agilizar el trabajo operativo en campo.</p>
            <img src="assets/proyectos/crm_movil.png" alt="PWA CRM" style="max-height: calc(var(--book-height) * 0.6); width: auto; border-radius: 5px;">
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
    date: "Enero 2026",
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
    title: "Flask Finance Tracker",
    description:
      "Aplicación Web Full Stack para gestión de gastos. Dashboard con gráficos interactivos (Chart.js), presupuestos y exportación a CSV.",
    tags: ["Web", "Python", "Flask", "SQL", "Chart.js", "Full Stack"],
    github: "https://github.com/ryakimovicz/flask-expense-tracker",
    cover: "assets/covers/flask_cover.png",
    backCover: "assets/covers/flask_bg.png",
    date: "Diciembre 2025",
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
    cover: "assets/covers/finance_cover.png",
    backCover: "assets/covers/finance_bg.png",
    tags: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    github: "https://github.com/ryakimovicz/finance-analyzer",
    date: "Noviembre 2025",
    details: `
            <h3>📊 Descripción</h3>
            <p>Una herramienta de análisis de datos desarrollada en Python que procesa archivos de gastos (CSV), realiza cálculos estadísticos y genera automáticamente un reporte financiero en formato PDF con gráficos visuales.</p>
            <h3>✨ Características</h3>
            <ul>
                <li><strong>Procesamiento:</strong> Limpieza de datos crudos utilizando <code>Pandas</code>.</li>
                <li><strong>Visualización:</strong> Gráficos de torta (Pie Charts) automáticos con <code>Matplotlib</code>.</li>
                <li><strong>Reporte:</strong> Generación de PDF listo para imprimir con <code>FPDF</code>.</li>
            </ul>
            <hr class="page-break">
            <h3>📸 Demostración</h3>
            <p><em>Output en consola y Reporte PDF generado:</em></p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/finance-analyzer/main/img/pdf_preview.png" alt="Reporte PDF">
        `,
  },
  {
    title: "MercadoLibre Price Tracker",
    description:
      "Bot de monitoreo de precios en tiempo real. Web scraping automatizado y alertas por email.",
    cover: "assets/covers/ml_tracker_cover.png",
    backCover: "assets/covers/ml_tracker_bg.png",
    tags: ["Python", "Web Scraping", "Automation", "SMTP"],
    github: "https://github.com/ryakimovicz/ml-price-tracker",
    date: "Noviembre 2025",
    details: `
            <h3>📉 Descripción</h3>
            <p>Un script de automatización en Python que monitorea productos en MercadoLibre Argentina. Extrae precios en tiempo real y alerta de inmediato si bajan de la meta establecida, demostrando habilidades en scraping seguro y automatización limpia.</p>
            <h3>✨ Características</h3>
            <ul>
                <li><strong>Scraping Eficiente:</strong> Extracción precisa de título y precio utilizando <code>BeautifulSoup4</code>.</li>
                <li><strong>Evasión de Bloqueos:</strong> Headers HTTP rotativos y User-Agents para prevenir bloqueos por error 429.</li>
                <li><strong>Lógica de Negocio:</strong> Comparación automática entre el costo de lista y el presupuesto objetivo.</li>
                <li><strong>Sistema de Alertas:</strong> Envío de correos SMTP con codificación UTF-8 para caracteres especiales.</li>
                <li><strong>Seguridad:</strong> Credenciales sensibles protegidas fuera del código mediante variables de entorno (<code>.env</code>).</li>
            </ul>
            <h3>📸 Funcionamiento</h3>
            <p><strong>1. Detección en Consola (CLI):</strong> El script analiza el HTML, limpia la moneda y detecta la oportunidad de compra en segundos. (Primera prueba con TARGET_PRICE = 1200000 y la segunda con TARGET_PRICE = 1700000)</p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/ml-price-tracker/main/img/console_output.png" alt="Consola">
            <hr class="page-break">
            <p><strong>2. Alerta de Compra (Email):</strong> Si el valor actual es menor que tu objetivo, se despacha un correo directo a tu casilla con el enlace directo del artículo.</p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/ml-price-tracker/main/img/email_alert.png" alt="Email" style="margin-top:10px">
        `,
  },
  {
    title: "URL Shortener API",
    description:
      "Servicio de acortamiento de URLs con Python. Redirección eficiente y base de datos SQLite.",
    cover: "assets/covers/url_shortener_cover.png",
    backCover: "assets/covers/url_shortener_bg.png",
    tags: ["Python", "FastAPI", "SQLite", "Backend"],
    github: "https://github.com/ryakimovicz/url-shortener",
    date: "Noviembre 2025",
    details: `
            <h3>🚀 Descripción</h3>
            <p>Un sistema completo de acortamiento de URLs desarrollado en Python con arquitectura Cliente-Servidor. Cuenta con una REST API robusta construida con <strong>FastAPI</strong> y un cliente CLI interactivo de consola, prescindiendo de dependencias de frontend complejas.</p>
            <h3>✨ Características</h3>
            <ul>
                <li><strong>API RESTful:</strong> Endpoints bien definidos para operaciones CRUD tradicionales.</li>
                <li><strong>Métricas Automáticas:</strong> Conteo e historial de clicks al redirigir enlaces.</li>
                <li><strong>Persistencia Local:</strong> Base de datos SQLite integrada para un almacenamiento ágil.</li>
                <li><strong>Redirecciones Reales:</strong> Manejo nativo de códigos HTTP 307 y 302 hacia la URL de destino.</li>
                <li><strong>Validación Estricta:</strong> Integridad de esquemas garantizada con <code>Pydantic</code>.</li>
            </ul>
            <hr class="page-break">
            <h3>📡 Endpoints Disponibles</h3>
            <table class="modal-table">
                <thead>
                    <tr><th>Método</th><th>Endpoint</th><th>Descripción</th></tr>
                </thead>
                <tbody>
                    <tr><td>POST</td><td>/shorten</td><td>Genera y almacena el código corto de una URL.</td></tr>
                    <tr><td>GET</td><td>/{short_code}</td><td>Redirecciona a la URL de destino y suma +1 click.</td></tr>
                    <tr><td>GET</td><td>/api/links</td><td>Retorna el listado de URLs y sus estadísticas de uso.</td></tr>
                    <tr><td>DELETE</td><td>/api/delete/{code}</td><td>Remueve de forma permanente un enlace.</td></tr>
                </tbody>
            </table>
            <hr class="page-break">
            <h3>🧠 Conceptos Aplicados</h3>
            <ul>
                <li><strong>Separación de Capas:</strong> Cliente CLI y Servidor API totalmente desacoplados.</li>
                <li><strong>SQL Raw:</strong> Consultas manuales escritas a mano para comprender el ciclo de vida de los datos.</li>
            </ul>
            <h3>📸 Captura (Consola)</h3>
            <p><strong>Menú Interactivo (CLI):</strong> Interfaz amigable para gestionar los enlaces desde la terminal sin recurrir a Postman o al navegador.</p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/url-shortener/main/img/consola.png" alt="CLI" class="cropped-comic-img">
            <hr class="page-break">
            <h3>📸 Documentación de API (FastAPI)</h3>
            <p><strong>Petición y Respuesta en Swagger:</strong> Interfaz gráfica interactiva que documenta y permite testear los endpoints al instante.</p>
            <div style="display:flex; flex-direction:column; gap:10px; margin-top:10px;">
                <img src="https://raw.githubusercontent.com/ryakimovicz/url-shortener/main/img/swagger_request.png" alt="Swagger Request">
                <img src="https://raw.githubusercontent.com/ryakimovicz/url-shortener/main/img/swagger_response.png" alt="Swagger Response">
            </div>
        `,
  },
  {
    title: "Portfolio Personal (Web SPA)",
    description:
      "Single Page Application desarrollada desde cero. Diseño totalmente responsivo, modo oscuro y renderizado dinámico con JavaScript.",
    cover: "assets/covers/portfolio_cover.png",
    backCover: "assets/covers/portfolio_bg.png",
    tags: ["JavaScript", "CSS3", "HTML5", "Web", "Frontend"],
    github: "https://github.com/ryakimovicz/portfolio",
    date: "Junio 2026",
    details: `
            <h3>🎨 El Concepto</h3>
            <p>Este mismo sitio web es un proyecto de ingeniería frontend diseñado para emular la experiencia física de abrir y leer un cómic. Fue programado de forma <strong>100% nativa (Vanilla JS)</strong> sin frameworks pesados, garantizando un rendimiento óptimo e interactividad fluida.</p>
            <h3>⚙️ Motor de Paginación Dinámico</h3>
            <p>Uno de los mayores desafíos fue maquetar los textos en páginas cerradas "tipo libro". Para resolverlo, se programó un sistema en <code>script.js</code> que:</p>
            <ul>
                <li><strong>Medición en Tiempo Real:</strong> Clona el contenido en un contenedor oculto con el ancho exacto del lector.</li>
                <li><strong>Cálculo de Desbordamiento:</strong> Evalúa el <code>scrollHeight</code> frente a la altura disponible para determinar dinámicamente cuándo insertar un salto de página.</li>
                <li><strong>Salto Inteligente de Listas:</strong> Si un elemento de lista (<code>&lt;li&gt;</code>) excede el tamaño de la página, el sistema fragmenta el bloque y lo continúa en la siguiente página.</li>
                <li><strong>Soporte para Imágenes:</strong> Espera asincrónicamente la carga de imágenes y fuentes del sistema antes de procesar la paginación para evitar desajustes visuales.</li>
            </ul>
            <hr class="page-break">
            <h3>✨ Características de la Experiencia</h3>
            <ul>
                <li><strong>Diseño Cómic Retro:</strong> Paletas oscuras y contrastantes con acentos naranjas, bordes gruesos dibujados en CSS, fuentes temáticas (<i>Bangers</i> y <i>Comic Neue</i>) y patrones vectoriales Halftone.</li>
                <li><strong>Generador de Códigos de Barras:</strong> Algoritmo hash personalizado que convierte el nombre del proyecto en un código de barras único para las contraportadas.</li>
                <li><strong>Scroll Lock Robusto:</strong> Bloqueo limpio del fondo del sitio al abrir un cómic, memorizando la posición del usuario y previniendo saltos visuales al cerrarlo.</li>
                <li><strong>Accesibilidad y Control:</strong> Cierre intuitivo mediante atajos de teclado (tecla <code>Esc</code>) y gestos táctiles optimizados para móviles y tablets.</li>
            </ul>
        `,
  },
  {
    title: "Inventory Management API",
    description:
      "API RESTful robusta para gestión de inventario con ASP.NET Core 8, Entity Framework y SQLite.",
    cover: "assets/covers/inventory_cover.png",
    backCover: "assets/covers/inventory_bg.png",
    tags: ["C#", ".NET Core", "API REST", "SQL", "Entity Framework"],
    github: "https://github.com/ryakimovicz/inventory-api",
    date: "Diciembre 2025",
    details: `
            <h3>📦 Arquitectura y Buenas Prácticas</h3>
            <p><strong>Inventory Management API</strong> es una solución construida con <strong>C# 12</strong> y <strong>.NET 8 (LTS)</strong>. El proyecto implementa una arquitectura desacoplada en capas para garantizar la separación de responsabilidades y facilidad de mantenimiento.</p>
            <h3>📂 Estructura y Capas</h3>
            <ul>
                <li><strong>Controllers:</strong> Manejan las peticiones HTTP mediante <code>ProductsController.cs</code>.</li>
                <li><strong>DTOs:</strong> Protegen el modelo interno desacoplándolo de la API pública y aplicando validaciones de campos (precios, stock y longitud de caracteres).</li>
                <li><strong>Data & ORM:</strong> Persistencia administrada mediante <strong>Entity Framework Core 8</strong> y base de datos relacional ligera <strong>SQLite</strong>.</li>
            </ul>
            <hr class="page-break">
            <h3>📸 Demostración de Endpoints</h3>
            <p><strong>1. Listado General (GET):</strong> Petición estándar recuperando todo el catálogo de productos disponible en la base de datos.</p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/inventory-api/master/img/swagger_demo.png" alt="Swagger Demo">
            <hr class="page-break">
            <p><strong>2. Filtro de Búsqueda (GET /api/Products?search=laptop):</strong> Búsqueda dinámica Case-Insensitive mapeada mediante LINQ.</p>
            <img src="https://raw.githubusercontent.com/ryakimovicz/inventory-api/master/img/swagger_search_demo.png" alt="Swagger Search">
        `,
  },
  {
    title: "Foro Hub (API REST)",
    description:
      "Backend para un foro con autenticación JWT, CRUD de tópicos y persistencia en MySQL.",
    cover: "assets/covers/foro_hub_cover.png",
    backCover: "assets/covers/foro_hub_bg.png",
    tags: ["Java", "Spring Boot", "JWT", "API REST", "MySQL"],
    github: "https://github.com/ryakimovicz/foro-hub",
    date: "Julio 2025",
    details: `
            <h3>🚀 Solución Challenge ONE</h3>
            <p><strong>Foro Hub</strong> es una API REST robusta que emula un foro de discusión, desarrollada como parte del challenge de backend del programa <strong>Oracle Next Education (ONE)</strong>. Permite interactuar con hilos de conversación de forma segura y estructurada.</p>
            <h3>⚙️ Seguridad y Persistencia</h3>
            <ul>
                <li><strong>Autenticación JWT:</strong> Filtros de seguridad con <code>Spring Security</code> para validar tokens JSON Web Tokens (JWT) y proteger los endpoints.</li>
                <li><strong>Persistencia de Datos:</strong> Mapeo objeto-relacional mediante Spring Data JPA conectado a una base de datos <strong>MySQL</strong>.</li>
                <li><strong>Migración Automática:</strong> Integración de <strong>Flyway Migrations</strong> para controlar las versiones del esquema de base de datos automáticamente al iniciar.</li>
                <li><strong>Validación de Negocio:</strong> Lógica de validación personalizada para evitar duplicidad de títulos y mensajes en el foro.</li>
            </ul>
            <h3>📡 Endpoints de la API</h3>
            <table class="modal-table">
                <thead><tr><th style="width: 18%;">Método</th><th style="width: 27%;">Endpoint</th><th style="width: 35%;">Descripción</th><th style="width: 20%;">Acceso</th></tr></thead>
                <tbody>
                    <tr><td>POST</td><td>/login</td><td>Genera token JWT de sesión.</td><td>Público</td></tr>
                    <tr><td>POST</td><td>/topicos</td><td>Registra un nuevo tópico.</td><td>Protegido</td></tr>
                    <tr><td>GET</td><td>/topicos</td><td>Retorna listado paginado.</td><td>Protegido</td></tr>
                    <tr><td>GET</td><td>/topicos/{id}</td><td>Detalle de tópico por ID.</td><td>Protegido</td></tr>
                    <tr><td>PUT</td><td>/topicos/{id}</td><td>Actualiza título/mensaje.</td><td>Protegido</td></tr>
                    <tr><td>DELETE</td><td>/topicos/{id}</td><td>Elimina un tópico.</td><td>Protegido</td></tr>
                </tbody>
            </table>

        `,
  },
  {
    title: "Literalura: Catálogo",
    description:
      "Aplicación de consola que consume la API de Gutendex y guarda libros en PostgreSQL.",
    cover: "assets/covers/literalura_cover.png",
    backCover: "assets/covers/literalura_bg.png",
    tags: ["Java", "Spring Data JPA", "PostgreSQL", "API Integration"],
    github: "https://github.com/ryakimovicz/literalura",
    date: "Julio 2025",
    details: `
            <h3>📚 Catálogo Literario Inteligente</h3>
            <p><strong>Literalura</strong> es una aplicación de consola desarrollada para el challenge de backend del programa <strong>Oracle Next Education (ONE)</strong>. El proyecto combina el consumo de APIs públicas y la persistencia de datos relacionales para construir un gestor bibliográfico dinámico.</p>
            <h3>⚙️ Integración y Persistencia</h3>
            <ul>
                <li><strong>Consumo de API Gutendex:</strong> Consultas en tiempo real a la base de datos de Gutendex para recuperar información bibliográfica por título.</li>
                <li><strong>Procesamiento JSON:</strong> Parseo y deserialización estructurada de respuestas JSON obtenidas del servidor mediante la biblioteca <strong>Jackson</strong>.</li>
                <li><strong>Base de Datos Relacional:</strong> Mapeo objeto-relacional gestionado con <strong>Spring Data JPA</strong> y almacenamiento seguro en <strong>PostgreSQL</strong>.</li>
            </ul>
            <hr class="page-break">
            <h3>✨ Características de la Consola</h3>
            <ul>
                <li><strong>Buscador de Libros:</strong> Localiza y registra automáticamente obras literarias en la base de datos local a través de su título.</li>
                <li><strong>Registro de Autores:</strong> Listado unificado de escritores y autores indexados sin duplicados.</li>
                <li><strong>Filtro Cronológico:</strong> Consulta inteligente de autores vivos en un año determinado según los periodos registrados.</li>
                <li><strong>Clasificación por Idioma:</strong> Filtrado dinámico de obras según el idioma seleccionado (Español, Inglés, Francés, Portugués).</li>
            </ul>
        `,
  },
  {
    title: "Conversor de Monedas",
    description:
      "Conversión de divisas en tiempo real consumiendo Exchange Rate API.",
    cover: "assets/covers/currency_cover.png",
    backCover: "assets/covers/currency_bg.png",
    tags: ["Java", "API Integration", "JSON"],
    github: "https://github.com/ryakimovicz/conversor-monedas-java-ONE",
    date: "Mayo 2025",
    details: `
            <h3>💱 Conversión de Divisas en Tiempo Real</h3>
            <p><strong>Conversor de Monedas</strong> es una aplicación interactiva de consola en <strong>Java 21</strong> desarrollada como challenge para Oracle + Alura Latam. Permite realizar conversiones rápidas entre USD, ARS y BRL utilizando datos financieros reales y actualizados.</p>
            <h3>⚙️ Arquitectura Desacoplada</h3>
            <p>La lógica de la aplicación se estructuró siguiendo buenas prácticas de diseño, organizándose en capas bien delimitadas:</p>
            <ul>
                <li><strong>API Client:</strong> Realiza consultas HTTP asíncronas hacia la API de tipo de cambio utilizando el cliente nativo <code>Java HttpClient</code>.</li>
                <li><strong>Modelos:</strong> Contenedor (<code>ExchangeRateResponse</code>) que mapea y procesa las respuestas JSON obtenidas mediante la biblioteca <strong>Gson</strong>.</li>
                <li><strong>Lógica de Negocio:</strong> Servicio especializado (<code>CurrencyConverter</code>) encargado de realizar los cálculos matemáticos de equivalencia entre las distintas divisas.</li>
                <li><strong>UI (Consola):</strong> Interfaz de terminal interactiva (<code>Conversor</code>) que gestiona el menú de selección y captura las entradas del usuario.</li>
            </ul>
        `,
  },
];

