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
    date: "En desarrollo",
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
            <h3>⚙️ Instalación y Ejecución</h3>
            <p>El proyecto es totalmente portable y fácil de iniciar localmente mediante la terminal:</p>
            <div style="background:#111b30; color:#e2e8f0; padding: calc(var(--book-height) * 0.02) calc(var(--book-height) * 0.03); border-radius: 6px; font-family: monospace; font-size: calc(var(--book-height) * 0.024); border: calc(var(--book-height) * 0.004) solid #000; margin: 10px 0; line-height: 1.4;">
                # Restaurar paquetes NuGet<br>
                dotnet restore<br><br>
                # Aplicar migraciones y base SQLite<br>
                dotnet ef database update<br><br>
                # Correr servidor API<br>
                dotnet run --project Inventory.API
            </div>
            <p>La documentación interactiva de <strong>Swagger UI</strong> se inicia automáticamente en <code>/swagger</code>.</p>
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
    tags: ["Java", "Spring Boot", "JWT", "API REST", "MySQL"],
    github: "https://github.com/ryakimovicz/foro-hub",
    date: "Julio 2025",
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
    date: "Julio 2025",
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
    github: "https://github.com/ryakimovicz/conversor-monedas-java-ONE",
    date: "Mayo 2025",
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

