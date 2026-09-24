(function () {
    'use strict';

    var STORAGE_KEY = 'lang';
    var SUPPORTED = ['pt', 'en', 'es'];
    var HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };

    // O português é o conteúdo original do HTML; en/es são traduções.
    var translations = {
        en: {
            'meta.title': 'Alexandro Borges — Senior Back-End & Full Stack Developer',
            'meta.description': 'Senior Back-End and Full Stack Developer with 10+ years of experience in PHP, JavaScript/TypeScript, Java, software architecture, databases, microservices, CI/CD and automation.',
            'skip': 'Skip to content',
            'nav.home': 'Home',
            'nav.label': 'Main navigation',
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'lang.label': 'Language',

            'hero.eyebrow': 'Back-End · Full Stack · Senior',
            'hero.title': 'I build end-to-end corporate web systems — from data modeling to the user interface.',
            'hero.lead': 'I\'m Alexandro Borges, a developer with <strong>10+ years of experience</strong>. I work with software architecture, APIs, relational databases, microservices and automation, focused on performance, scalability and maintainable code.',
            'hero.ctaProjects': 'View projects',
            'hero.ctaContact': 'Get in touch',
            'hero.social': 'Social links',
            'hero.photoAlt': 'Photo of Alexandro Borges',

            'stats.years': 'years building software',
            'stats.fullstack': 'back-end, front-end, mobile and infra',
            'stats.ecosystems': 'main ecosystems',
            'stats.locationTitle': 'DF · Brazil',
            'stats.location': 'Planaltina, Federal District',

            'about.kicker': '01 — About',
            'about.title': 'Engineering with a product mindset',
            'about.p1': 'I started in 2016 building websites for companies and have since been building complete corporate platforms: ERPs, financial systems, document management (GED), digital signature and internal tools for large clients such as Caixa Econômica Federal.',
            'about.p2': 'I have led the re-engineering of legacy systems, created in-house back-end and front-end frameworks and owned entire platforms, from architecture to delivery. Day to day, I work across every layer: database modeling and optimization, APIs and integrations, design-system-based interfaces, CI/CD pipelines, Linux servers and automation with Airflow, N8N and AI.',
            'about.principle1': '<strong>Architecture</strong> designed to scale and to be maintained by teams.',
            'about.principle2': '<strong>Data</strong> modeled with integrity, indexes and performance from day one.',
            'about.principle3': '<strong>Automation</strong> to reduce manual work and human error.',

            'exp.kicker': '02 — Experience',
            'exp.title': 'Career',
            'tags.label': 'Technologies',
            'exp.ev.period': 'Aug 2023 — Present',
            'exp.ev.role': 'Senior Full Stack Developer <span>· Estado Virtual</span>',
            'exp.ev.b1': 'Full stack development of corporate web platforms with PHP, JavaScript and MariaDB.',
            'exp.ev.b2': 'Architecture and evolution of the in-house PHP framework that powers the back-end of all the company\'s platforms.',
            'exp.ev.b3': 'Complete re-engineering of the <a href="https://www.bigadv.com.br/" target="_blank" rel="noopener">BigAdv</a> legal ERP with IBM\'s Carbon Design System and an in-house JavaScript front-end framework.',
            'exp.ev.b4': 'End-to-end development of the <a href="https://www.evalid.com.br/" target="_blank" rel="noopener">EValid</a> digital signature platform, including facial recognition and a third-party integration API.',
            'exp.ev.b5': 'Visual workflow module for the <a href="https://www.evsolid.com/evdoc/" target="_blank" rel="noopener">EVDoc</a> document management system.',
            'exp.ev.b6': 'Database modeling, legacy query refactoring, strategic indexing and foreign keys.',
            'exp.ev.b7': 'Infrastructure and automation: Linux servers, Docker, microservices, CI/CD, AWS S3, Airflow, N8N, OpenAI and web scraping with Python.',
            'exp.bia.period': 'Jan 2023 — Sep 2024',
            'exp.bia.role': 'Back-End Developer <span>· Bia Technology</span>',
            'exp.bia.b1': 'Development of web platforms in PHP (Laravel).',
            'exp.bia.b2': 'Development of a cross-platform app with Flutter (Android and iOS).',
            'exp.bia.b3': 'Maintenance and evolution of a Java platform.',
            'exp.bia.b4': 'Management of development projects.',
            'exp.tele.period': 'Jan 2023 — Aug 2023',
            'exp.tele.role': 'IT Manager <span>· Teledata | Caixa Econômica Federal</span>',
            'exp.tele.b1': 'Development of an internal Java system for Caixa Econômica Federal.',
            'exp.tele.b2': 'Development of a help-desk platform.',
            'exp.tele.b3': 'Project and team management.',
            'exp.conex.period': 'Jun 2019 — Dec 2022',
            'exp.conex.role': 'Network Analyst <span>· Conex Internet</span>',
            'exp.conex.b1': 'Configuration of Mikrotik routers and Linux servers.',
            'exp.conex.b2': 'Network monitoring with Zabbix and Grafana.',
            'exp.conex.b3': 'Data analysis and reporting with Power BI.',
            'exp.conex.b4': 'Development of an in-house scheduling and customer service system.',
            'exp.web.role': 'Web Developer <span>· Projects for companies</span>',
            'exp.web.b1': 'Development of websites and systems for private companies.',

            'proj.kicker': '03 — Projects',
            'proj.title': 'Products in production',
            'proj.intro': 'Corporate platforms I helped build that are live today. The code is proprietary, but the products can be accessed through the links below.',
            'proj.evalid.label': 'EValid · Full platform',
            'proj.evalid.title': 'Digital signature with facial recognition',
            'proj.evalid.text': 'Owned the platform from scratch: architecture, database modeling, back-end and front-end. I built the facial reading and recognition validation flow and the public integration API for third-party platforms.',
            'proj.bigadv.label': 'BigAdv · Re-engineering',
            'proj.bigadv.title': 'Legal ERP — next generation',
            'proj.bigadv.text': 'Complete re-engineering of a legacy ERP into a new version with IBM\'s Carbon Design System. I created an in-house JavaScript front-end framework that standardizes and generates every component of the application.',
            'proj.evdoc.label': 'EVDoc · UX and workflow',
            'proj.evdoc.title': 'Document management with visual workflow',
            'proj.evdoc.text': 'Visual workflow module built with a drawing library (draw), letting users create document flows intuitively and reducing the learning curve. It became the foundation for the digital signature module.',
            'proj.firewall.label': 'BigAdv · Automation and rules',
            'proj.firewall.title': 'A "firewall" for court publications',
            'proj.firewall.text': 'Module inspired by network firewalls: the law firm manager defines rules for incoming publications and case updates and which actions run automatically. It significantly reduced manual reading and internal organization work.',
            'proj.scraping.label': 'BigAdv · Data and scraping',
            'proj.scraping.title': 'Automated publication capture',
            'proj.scraping.text': 'Python web-scraping bot that automatically captures court publications and case updates from legal platforms, with a database designed for the publication search engine.',
            'proj.framework.title': 'Corporate PHP framework',
            'proj.framework.text': 'Contributed to the architecture and evolution of the in-house PHP framework that powers the back-end of every platform built and maintained by the company.',
            'proj.ownTitle': 'Personal product',
            'proj.bicho.label': 'Author and maintainer · App + API + admin',
            'proj.bicho.title': 'BichoAí — help animals near you',
            'proj.bicho.text': 'Collaborative platform that maps stray animals and connects people who want to help. Users photograph the animal, pin its location on the map and follow community updates. I designed, built and maintain the whole product: app, API, admin panel and website.',
            'proj.bicho.app': '<strong>App</strong> Flutter · OpenStreetMap map · geolocation · Provider · Dio',
            'proj.bicho.cta': 'Discover BichoAí',
            'proj.bicho.ctaStore': 'My apps on the App Store',
            'proj.apps.label': 'Published on the App Store',
            'proj.apps.bicho': 'Collaborative animal welfare',
            'proj.apps.utilities': 'Utilities',

            'tag.faceBio': 'Facial biometrics',
            'tag.ged': 'Document management',
            'tag.rules': 'Rules engine',
            'tag.architecture': 'Architecture',
            'tag.patterns': 'Design patterns',
            'tag.microservices': 'Microservices',
            'tag.modeling': 'Data modeling',
            'tag.queryOpt': 'Query optimization',
            'tag.indexing': 'Indexing',
            'tag.payments': 'Payment integrations',

            'stack.title': 'Technologies I use every day',
            'stack.db': 'Databases',
            'stack.data': 'Data, AI &amp; Automation',
            'stack.mobile': 'Mobile &amp; Integrations',

            'contact.kicker': '05 — Contact',
            'contact.title': 'Let\'s talk?',
            'contact.lead': 'Open to Senior Back-End or Full Stack Developer opportunities.',
            'contact.waHref': 'https://wa.me/5561992933961?text=' + encodeURIComponent('Hi Alexandro! I saw your portfolio.'),

            'footer.degree': 'Systems Analysis and Development — UNIBF'
        },

        es: {
            'meta.title': 'Alexandro Borges — Desarrollador Back-End & Full Stack Senior',
            'meta.description': 'Desarrollador Back-End y Full Stack Senior con más de 10 años de experiencia en PHP, JavaScript/TypeScript, Java, arquitectura de software, bases de datos, microservicios, CI/CD y automatización.',
            'skip': 'Saltar al contenido',
            'nav.home': 'Inicio',
            'nav.label': 'Navegación principal',
            'nav.about': 'Sobre mí',
            'nav.experience': 'Experiencia',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',
            'lang.label': 'Idioma',

            'hero.eyebrow': 'Back-End · Full Stack · Senior',
            'hero.title': 'Construyo sistemas web corporativos de punta a punta — desde el modelado de datos hasta la interfaz.',
            'hero.lead': 'Soy Alexandro Borges, desarrollador con <strong>más de 10 años de experiencia</strong>. Trabajo con arquitectura de software, APIs, bases de datos relacionales, microservicios y automatización, con foco en rendimiento, escalabilidad y código mantenible.',
            'hero.ctaProjects': 'Ver proyectos',
            'hero.ctaContact': 'Contactar',
            'hero.social': 'Redes',
            'hero.photoAlt': 'Foto de Alexandro Borges',

            'stats.years': 'años desarrollando software',
            'stats.fullstack': 'back-end, front-end, móvil e infraestructura',
            'stats.ecosystems': 'ecosistemas principales',
            'stats.locationTitle': 'DF · Brasil',
            'stats.location': 'Planaltina, Distrito Federal',

            'about.kicker': '01 — Sobre mí',
            'about.title': 'Ingeniería con visión de producto',
            'about.p1': 'Empecé en 2016 desarrollando sitios web para empresas y, desde entonces, construyo plataformas corporativas completas: ERPs, sistemas financieros, gestión documental, firma digital y herramientas internas para grandes clientes como la Caixa Econômica Federal.',
            'about.p2': 'He liderado la reingeniería de sistemas heredados, creado frameworks internos de back-end y front-end y he sido responsable de plataformas enteras, desde la arquitectura hasta la entrega. En el día a día trabajo en todas las capas: modelado y optimización de bases de datos, APIs e integraciones, interfaces con design system, pipelines de CI/CD, servidores Linux y automatizaciones con Airflow, N8N e IA.',
            'about.principle1': '<strong>Arquitectura</strong> pensada para escalar y ser mantenida por equipos.',
            'about.principle2': '<strong>Datos</strong> modelados con integridad, índices y rendimiento desde el inicio.',
            'about.principle3': '<strong>Automatización</strong> para reducir el trabajo manual y el error humano.',

            'exp.kicker': '02 — Experiencia',
            'exp.title': 'Trayectoria profesional',
            'tags.label': 'Tecnologías',
            'exp.ev.period': 'Ago 2023 — Actualidad',
            'exp.ev.role': 'Desarrollador Full Stack Senior <span>· Estado Virtual</span>',
            'exp.ev.b1': 'Desarrollo full stack de plataformas web corporativas con PHP, JavaScript y MariaDB.',
            'exp.ev.b2': 'Arquitectura y evolución del framework PHP propio que sostiene el back-end de todas las plataformas de la empresa.',
            'exp.ev.b3': 'Reingeniería completa del ERP jurídico <a href="https://www.bigadv.com.br/" target="_blank" rel="noopener">BigAdv</a> con Carbon Design System (IBM) y un framework front-end propio en JavaScript.',
            'exp.ev.b4': 'Desarrollo completo de la plataforma de firma digital <a href="https://www.evalid.com.br/" target="_blank" rel="noopener">EValid</a>, incluyendo reconocimiento facial y una API de integración con terceros.',
            'exp.ev.b5': 'Módulo de workflow visual del sistema de gestión documental <a href="https://www.evsolid.com/evdoc/" target="_blank" rel="noopener">EVDoc</a>.',
            'exp.ev.b6': 'Modelado de bases de datos, refactorización de consultas heredadas, indexación estratégica y claves foráneas.',
            'exp.ev.b7': 'Infraestructura y automatización: servidores Linux, Docker, microservicios, CI/CD, AWS S3, Airflow, N8N, OpenAI y web scraping con Python.',
            'exp.bia.period': 'Ene 2023 — Sep 2024',
            'exp.bia.role': 'Desarrollador Back-End <span>· Bia Technology</span>',
            'exp.bia.b1': 'Desarrollo de plataformas web en PHP (Laravel).',
            'exp.bia.b2': 'Desarrollo de una aplicación multiplataforma con Flutter (Android e iOS).',
            'exp.bia.b3': 'Mantenimiento y evolución de una plataforma en Java.',
            'exp.bia.b4': 'Gestión de proyectos de desarrollo.',
            'exp.tele.period': 'Ene 2023 — Ago 2023',
            'exp.tele.role': 'Gerente de TI <span>· Teledata | Caixa Econômica Federal</span>',
            'exp.tele.b1': 'Desarrollo de un sistema interno en Java para la Caixa Econômica Federal.',
            'exp.tele.b2': 'Desarrollo de una plataforma de help-desk.',
            'exp.tele.b3': 'Gestión de proyectos y equipo.',
            'exp.conex.period': 'Jun 2019 — Dic 2022',
            'exp.conex.role': 'Analista de Redes <span>· Conex Internet</span>',
            'exp.conex.b1': 'Configuración de routers Mikrotik y servidores Linux.',
            'exp.conex.b2': 'Monitoreo de red con Zabbix y Grafana.',
            'exp.conex.b3': 'Análisis de datos e informes con Power BI.',
            'exp.conex.b4': 'Desarrollo de un sistema propio de agendamiento y atención.',
            'exp.web.role': 'Desarrollador Web <span>· Proyectos para empresas</span>',
            'exp.web.b1': 'Desarrollo de sitios web y sistemas para empresas privadas.',

            'proj.kicker': '03 — Proyectos',
            'proj.title': 'Productos en producción',
            'proj.intro': 'Plataformas corporativas que ayudé a construir y que están en funcionamiento. El código es propietario, pero los productos se pueden visitar en los enlaces de abajo.',
            'proj.evalid.label': 'EValid · Plataforma completa',
            'proj.evalid.title': 'Firma digital con reconocimiento facial',
            'proj.evalid.text': 'Responsable de la plataforma desde cero: arquitectura, modelado de la base de datos, back-end y front-end. Desarrollé el flujo de validación por lectura y reconocimiento facial y la API pública de integración para plataformas de terceros.',
            'proj.bigadv.label': 'BigAdv · Reingeniería',
            'proj.bigadv.title': 'ERP jurídico — nueva generación',
            'proj.bigadv.text': 'Reingeniería completa de un ERP heredado hacia una nueva versión con Carbon Design System (IBM). Creé un framework front-end propio en JavaScript que estandariza y genera todos los componentes de la aplicación.',
            'proj.evdoc.label': 'EVDoc · UX y workflow',
            'proj.evdoc.title': 'Gestión documental con workflow visual',
            'proj.evdoc.text': 'Módulo de workflow visual con una biblioteca de dibujo (draw) que permite crear flujos de documentos de forma intuitiva y reduce la curva de aprendizaje de los usuarios. Sirvió de base para el módulo de firma digital.',
            'proj.firewall.label': 'BigAdv · Automatización y reglas',
            'proj.firewall.title': 'Un "firewall" de publicaciones judiciales',
            'proj.firewall.text': 'Módulo inspirado en un firewall de red: el responsable del despacho define reglas sobre las publicaciones y actuaciones que llegan al sistema y qué acciones se ejecutan automáticamente. Redujo significativamente la lectura manual y la organización interna.',
            'proj.scraping.label': 'BigAdv · Datos y scraping',
            'proj.scraping.title': 'Captura automática de publicaciones',
            'proj.scraping.text': 'Bot en Python con web scraping que captura automáticamente publicaciones y actuaciones judiciales en las plataformas jurídicas, con una base de datos modelada para el buscador de publicaciones.',
            'proj.framework.title': 'Framework PHP corporativo',
            'proj.framework.text': 'Participación en la arquitectura y evolución del framework PHP propio que sostiene el back-end de todas las plataformas desarrolladas y mantenidas por la empresa.',
            'proj.ownTitle': 'Producto propio',
            'proj.bicho.label': 'Autoría y mantenimiento · App + API + panel',
            'proj.bicho.title': 'BichoAí — ayuda a los animales cerca de ti',
            'proj.bicho.text': 'Plataforma colaborativa para mapear animales en situación de calle y conectar a personas que quieren ayudar. El usuario fotografía al animal, marca la ubicación en el mapa y sigue las actualizaciones de la comunidad. Concebí, desarrollé y mantengo el producto de punta a punta: aplicación, API, panel de administración y sitio web.',
            'proj.bicho.app': '<strong>App</strong> Flutter · mapa con OpenStreetMap · geolocalización · Provider · Dio',
            'proj.bicho.cta': 'Conocer BichoAí',
            'proj.bicho.ctaStore': 'Mis apps en la App Store',
            'proj.apps.label': 'Publicadas en la App Store',
            'proj.apps.bicho': 'Protección animal colaborativa',
            'proj.apps.utilities': 'Utilidades',

            'tag.faceBio': 'Biometría facial',
            'tag.ged': 'Gestión documental',
            'tag.rules': 'Motor de reglas',
            'tag.architecture': 'Arquitectura',
            'tag.patterns': 'Patrones de diseño',
            'tag.microservices': 'Microservicios',
            'tag.modeling': 'Modelado',
            'tag.queryOpt': 'Optimización de consultas',
            'tag.indexing': 'Indexación',
            'tag.payments': 'Integraciones de pago',

            'stack.title': 'Tecnologías que uso a diario',
            'stack.db': 'Bases de datos',
            'stack.data': 'Datos, IA &amp; Automatización',
            'stack.mobile': 'Móvil &amp; Integraciones',

            'contact.kicker': '05 — Contacto',
            'contact.title': '¿Hablamos?',
            'contact.lead': 'Abierto a oportunidades como Desarrollador Back-End o Full Stack Senior.',
            'contact.waHref': 'https://wa.me/5561992933961?text=' + encodeURIComponent('¡Hola, Alexandro! Vi tu portafolio.'),

            'footer.degree': 'Análisis y Desarrollo de Sistemas — UNIBF'
        }
    };

    var textNodes = document.querySelectorAll('[data-i18n]');
    var attrNodes = document.querySelectorAll('[data-i18n-attr]');

    // Guarda o conteúdo original (português) para poder voltar a ele.
    var original = { text: [], attr: [] };
    textNodes.forEach(function (el) { original.text.push(el.innerHTML); });
    attrNodes.forEach(function (el) {
        var saved = {};
        parseAttrs(el).forEach(function (pair) { saved[pair[0]] = el.getAttribute(pair[0]); });
        original.attr.push(saved);
    });

    function parseAttrs(el) {
        return el.getAttribute('data-i18n-attr').split(';').map(function (pair) {
            var i = pair.indexOf(':');
            return [pair.slice(0, i).trim(), pair.slice(i + 1).trim()];
        });
    }

    function readStored() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }

    function store(lang) {
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* armazenamento indisponível */ }
    }

    function detect() {
        var fromUrl = new URLSearchParams(location.search).get('lang');
        if (fromUrl && SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
        var stored = readStored();
        if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
        var nav = (navigator.language || 'pt').slice(0, 2).toLowerCase();
        return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
    }

    function apply(lang) {
        var dict = translations[lang];

        textNodes.forEach(function (el, i) {
            var key = el.getAttribute('data-i18n');
            el.innerHTML = dict && dict[key] !== undefined ? dict[key] : original.text[i];
        });

        attrNodes.forEach(function (el, i) {
            parseAttrs(el).forEach(function (pair) {
                var value = dict && dict[pair[1]] !== undefined ? dict[pair[1]] : original.attr[i][pair[0]];
                el.setAttribute(pair[0], value);
            });
        });

        document.documentElement.lang = HTML_LANG[lang];
        document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
            btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
        });
    }

    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var lang = btn.getAttribute('data-lang');
            store(lang);
            apply(lang);
            var url = new URL(location.href);
            url.searchParams.set('lang', lang);
            history.replaceState(null, '', url);
        });
    });

    apply(detect());
})();
