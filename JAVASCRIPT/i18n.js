// ============================================
// SHARED i18n — used by all pages
// ============================================

const translations = {
    pt: {
        // Nav
        nav_home: 'Home', nav_about: 'Sobre Mim', nav_skills: 'Habilidades',
        nav_projects: 'Projetos', nav_experience: 'Experiência', nav_videos: 'Vídeos',
        nav_contact: 'Contato', nav_certificates: 'Certificados',
        cv: 'Currículo', select_language: 'Selecionar idioma', open_menu: 'Abrir menu',
        cv_modal_eyebrow: 'Documento profissional', cv_modal_title: 'Currículo de Gabriel Felipe',
        cv_modal_subtitle: 'Visualize o currículo abaixo ou baixe uma cópia em PDF.',
        cv_download_pdf: 'Baixar currículo em PDF', cv_open_page: 'Abrir em nova página',
        cv_close: 'Fechar currículo', cv_open: 'Abrir currículo',
        videos_open_channel: 'Abrir canal no YouTube',
        home_page_title: 'Gabriel Felipe | Desenvolvedor Full-Stack',
        videos_page_title: 'Vídeos | Gabriel Felipe', cert_page_title: 'Certificados | Gabriel Felipe',
        // Hero
        hero_greeting: 'Olá a todos👋, sou',
        hero_role: 'Desenvolvedor Full-Stack Júnior',
        hero_see_projects: 'Ver Projetos', hero_contact: 'Fale Comigo',
        badge_experience: 'De Experiência', badge_made: 'Feitos',
        // About
        about_title: 'Desenvolvedor Full-Stack & Influenciador Digital',
        about_p1: 'Sou um desenvolvedor full-stack com mais de 1 ano de experiência criando soluções web inovadoras. Minha paixão é transformar ideias complexas em interfaces intuitivas e funcionais que proporcionam excelentes experiências ao usuário.',
        about_p2: 'Minha jornada na programação começou aos 15 anos, e desde então me dedico a aprender novas tecnologias e metodologias. Acredito que a tecnologia deve ser acessível e útil a todos, e isso me motiva a criar aplicações que fazem a diferença.',
        stat_projects: 'Projetos', stat_clients: 'Clientes', stat_years: 'Anos de Exp', stat_tech: 'Tecnologias',
        // Skills
        section_skills: 'Minhas Habilidades', skills_technical: 'Habilidades Técnicas', skills_professional: 'Habilidades Profissionais',
        skills_tech_title: 'Tecnologias que Uso',
        skill_htmlcss: 'HTML/CSS', skill_js: 'JavaScript/TypeScript', skill_firebase: 'Firebase/JSON',
        skill_node: 'Node.js/Docker', skill_php: 'PHP/MySQL', skill_uiux: 'UI/UX Design',
        skill_agile: 'Desenvolvimento Ágil', skill_problem: 'Resolução de Problemas',
        skill_teamwork: 'Trabalho em Equipe', skill_communication: 'Comunicação',
        // Projects
        section_projects: 'Meus Projetos', filter_all: 'Todos', proj_see: 'Ver',
        proj_more_github: 'Ver mais no GitHub',
        proj_waveos_desc: 'O sistema operacional do navegador',
        proj_cafestore_desc: 'Tudo para sua Identidade digital. Criação de web-aplicações, agências digitais, site e landing pages para você e seu negócio',
        proj_todo_desc: 'Overlays de produtividade em tempo real para o OBS',
        proj_linkwave_desc: 'Links para criadores, influenciadores e streamers. Uma forma simples e elegante de compartilhar todo o seu conteúdo em um só lugar.',
        proj_samptech_desc: 'Loja de Informática e Assistência Técnica para Computadores, Celulares e Consoles.',
        proj_streampix_desc: 'Plataforma de Alertas de Doações via Pix para Streaming',
        // Experience
        section_experience: 'Experiência',
        exp_uiux_title: 'UI/UX Design', exp_uiux_role: 'Designer UI/UX',
        exp_uiux_desc: 'Criação de interfaces intuitivas e experiências de usuário excepcionais para aplicações web e mobile. Implementação de design systems e prototipagem interativa com Figma.',
        exp_fullstack_title: 'Desenvolvimento Full-Stack', exp_fullstack_role: 'Desenvolvedor Full-Stack',
        exp_fullstack_desc: 'Desenvolvimento web utilizando tecnologias como HTML, CSS, JavaScript, PHP e MySQL. Construção de aplicações responsivas e dinâmicas com foco em performance.',
        exp_influencer_title: 'Influenciador Digital', exp_influencer_role: 'Influenciador Digital',
        exp_date_mar2025: 'Março 2025 - Presente', exp_date_jan2025: 'Jan 2025 - Presente',
        exp_social_strategy: 'Estratégia de Mídia Social', exp_video_hub: 'Hub de Vídeos',
        exp_yt_desc: 'Shorts → edits de alto engajamento | Long-form → produção premium | Lives → interação com a comunidade | <span class="text-purple-300">Objetivo: crescimento de audiência + conexão forte</span>',
        exp_tw_desc: '<span class="text-purple-300">Objetivo ideal: documentar sua jornada dev + insights financeiros | Engajamento em tempo real com a comunidade tech</span>',
        exp_pin_desc: 'Portfólio de design | <span class="text-purple-300">Objetivo: tráfego passivo + visibilidade de design</span>',
        exp_li_desc: 'Certificados e conquistas profissionais | <span class="text-purple-300">Objetivo: estabelecer autoridade + credibilidade profissional</span>',
        exp_tg_desc: 'Comunicação direta com clientes + conteúdo promocional | <span class="text-purple-300">Objetivo: canal de monetização direta</span>',
        exp_dc_desc: 'Comunidade de estudos & hub de aprendizado | Study streams (câmera ligada, trabalho focado) | <span class="text-purple-300">Objetivo: retenção da comunidade + forte engajamento</span>',
        // Contact
        section_contact: 'Fale Comigo', contact_title: 'Vamos nos Conectar',
        contact_desc: 'Estou sempre aberto a discutir novos projetos, oportunidades de trabalho ou simplesmente trocar ideias sobre tecnologia. Entre em contato e responderei o mais rápido possível.',
        contact_location: 'Localização', contact_email: 'E-mail', contact_phone: 'Telefone',
        social_github: 'Veja meus projetos e repositórios',
        social_linkedin: 'Conexão Profissional', social_linkedin_cta: 'Conecte-se comigo',
        social_whatsapp: 'Mensagem Direta', social_email: 'Me envie um e-mail direto',
        footer_about: 'Sobre', footer_rights: 'Todos os direitos reservados.',
        // Videos page
        videos_eyebrow: 'Galeria do Youtube',
        videos_heading: 'TRABALHOS',
        videos_subtitle: 'Escolha uma categoria e abra os vídeos direto no YouTube.',
        videos_filter_all: 'Todos', videos_filter_long: 'Vídeo longo',
        videos_filter_shorts: 'Shorts', videos_filter_live: 'Lives',
        videos_channel: 'Canal', videos_filters_label: 'Filtro de vídeos',
        videos_long_reflection: 'Vídeo longo - Reflexão',
        videos_shorts_edits: 'Shorts - Edições',
        videos_shorts_calisthenics: 'Shorts - Calistenia',
        videos_shorts_reviews: 'Shorts - Avaliações de produtos',
        videos_live_study: 'Live - Estude comigo',
        videos_card_complete: 'Conteúdos completos', videos_card_projects: 'Projetos na prática',
        videos_card_tech: 'Tecnologia e rotina dev', videos_card_edits: 'Cortes rápidos',
        videos_card_dev: 'Dev em cortes', videos_card_moments: 'Momentos tech',
        videos_card_study: 'Lives de estudo', videos_card_programming: 'Programando ao vivo',
        videos_card_focus: 'Sessão de foco',
        videos_ticker_create: 'Criar', videos_ticker_publish: 'Publicar',
        videos_ticker_edit: 'Editar', videos_ticker_record: 'Gravar',
        videos_footer_projects: 'Projetos', videos_footer_videos: 'Vídeos',
        videos_footer_contact: 'Contato', videos_footer_certificates: 'Certificados',
        // Certificates page
        cert_hero_title: 'Meus <span>Certificados Profissionais</span>',
        cert_hero_subtitle: 'Uma coleção de certificações e qualificações que demonstram expertise em diversas tecnologias e metodologias.',
        cert_section_title: 'Coleção de Certificados',
        cert_section_subtitle: 'Navegue pelos meus certificados profissionais',
        cert_search_placeholder: 'Buscar certificados...',
        cert_showing: 'Exibindo certificados...',
        cert_contact_title: 'Vamos nos Conectar',
        cert_contact_subtitle: 'Fique à vontade para entrar em contato para oportunidades profissionais',
        cert_footer: '© 2026 Portfólio Profissional. Todos os direitos reservados.',
        cert_filter_all: 'Todos', cert_filter_dev: 'Desenvolvimento', cert_filter_mgmt: 'Gestão',
        cert_view: 'Ver', cert_pdf: 'PDF',
        cert_details: 'Detalhes', cert_skills_label: 'Habilidades',
        cert_issuer: 'Emissor:', cert_date: 'Data:', cert_duration: 'Duração:', cert_id: 'ID:',
        cert_download: 'Baixar PDF', cert_share: 'Compartilhar',
        cert_no_results: 'Nenhum certificado encontrado com esses critérios',
        cert_pdf_unavailable: 'PDF indisponível para este certificado',
        cert_download_started: 'Download iniciado!',
        cert_share_text: 'Confira meu certificado:',
        cert_link_copied: 'Link copiado para a área de transferência!',
        cert_share_unavailable: 'Não foi possível compartilhar este certificado',
        cert_showing_count: 'Exibindo',
        cert_of: 'de',
        cert_certificates: 'certificados',
        cert_page: 'Página',
        // Typed
        typed_strings: ['Desenvolvedor Full-Stack', 'Designer UI/UX', 'Entusiasta Web3', 'Influenciador Digital']
    },
    en: {
        nav_home: 'Home', nav_about: 'About Me', nav_skills: 'Skills',
        nav_projects: 'Projects', nav_experience: 'Experience', nav_videos: 'Videos',
        nav_contact: 'Contact', nav_certificates: 'Certificates',
        cv: 'Resume', select_language: 'Select language', open_menu: 'Open menu',
        cv_modal_eyebrow: 'Professional document', cv_modal_title: 'Gabriel Felipe Resume',
        cv_modal_subtitle: 'Preview the resume below or download a PDF copy.',
        cv_download_pdf: 'Download resume PDF', cv_open_page: 'Open in new page',
        cv_close: 'Close resume', cv_open: 'Open resume',
        videos_open_channel: 'Open YouTube channel',
        home_page_title: 'Gabriel Felipe | Full-Stack Developer',
        videos_page_title: 'Videos | Gabriel Felipe', cert_page_title: 'Certificates | Gabriel Felipe',
        hero_greeting: "Hi all👋, I'm",
        hero_role: 'Junior Full-Stack Developer',
        hero_see_projects: 'See Projects', hero_contact: 'Contact Me',
        badge_experience: 'Of Experience', badge_made: 'Made',
        about_title: 'Full-Stack Developer & Digital Influencer',
        about_p1: 'I am a full-stack developer with over 1 year of experience creating innovative web solutions. My passion is transforming complex ideas into intuitive and functional interfaces that provide excellent user experiences.',
        about_p2: "My programming journey began in my 15 years of age, and since then I have been dedicated to learning new technologies and methodologies. I believe technology should be accessible and useful to everyone, and that's what motivates me to create applications that make a difference.",
        stat_projects: 'Projects', stat_clients: 'Clients', stat_years: 'Years Of Exp', stat_tech: 'Technologies',
        section_skills: 'My Skills', skills_technical: 'Technical Skills', skills_professional: 'Professional Skills',
        skills_tech_title: 'Technologies I Use',
        skill_htmlcss: 'HTML/CSS', skill_js: 'JavaScript/TypeScript', skill_firebase: 'Firebase/JSON',
        skill_node: 'Node.js/Docker', skill_php: 'PHP/MySQL', skill_uiux: 'UI/UX Design',
        skill_agile: 'Agile Development', skill_problem: 'Problem Solving',
        skill_teamwork: 'Teamwork', skill_communication: 'Communication',
        section_projects: 'My Projects', filter_all: 'All', proj_see: 'See',
        proj_more_github: 'See more on GitHub',
        proj_waveos_desc: 'The browser operating system',
        proj_cafestore_desc: 'Everything for your digital identity. Creation of web applications, digital agencies, websites and landing pages for you and your business',
        proj_todo_desc: 'Realtime OBS productivity overlays for creators',
        proj_linkwave_desc: 'Links for creators, influencers and streamers. A simple and elegant way to share all your content in one place.',
        proj_samptech_desc: 'Computer Store and Technical Assistance for Computers, Phones and Consoles.',
        proj_streampix_desc: 'Pix Donation Alert Platform for Streaming',
        section_experience: 'Experience',
        exp_uiux_title: 'UI/UX Design', exp_uiux_role: 'UI/UX Designer',
        exp_uiux_desc: 'Creating intuitive interfaces and exceptional user experiences for web and mobile applications. Implementation of design systems and interactive prototyping with Figma.',
        exp_fullstack_title: 'Full-Stack Development', exp_fullstack_role: 'Full-Stack Developer',
        exp_fullstack_desc: 'Web development using technologies such as HTML, CSS, JavaScript, PHP, and MySQL. Building responsive and dynamic applications with a focus on performance.',
        exp_influencer_title: 'Digital Influencer', exp_influencer_role: 'Digital Influencer',
        exp_date_mar2025: 'March 2025 - Present', exp_date_jan2025: 'Jan 2025 - Present',
        exp_social_strategy: 'Social Media Strategy', exp_video_hub: 'Video Hub',
        exp_yt_desc: 'Shorts → high-engagement edits | Long-form → premium production | Lives → community interaction | <span class="text-purple-300">Purpose: audience growth + strong connection</span>',
        exp_tw_desc: '<span class="text-purple-300">Ideal Purpose: document your dev journey + financial insights | Real-time engagement with tech community</span>',
        exp_pin_desc: 'Design portfolio | <span class="text-purple-300">Purpose: passive traffic + design visibility</span>',
        exp_li_desc: 'Professional certificates & achievements | <span class="text-purple-300">Purpose: establish authority + professional credibility</span>',
        exp_tg_desc: 'Direct client communication + promotional content | <span class="text-purple-300">Purpose: direct monetization channel</span>',
        exp_dc_desc: 'Study community & learning hub | Study streams (camera on, focused work) | <span class="text-purple-300">Purpose: community retention + strong engagement</span>',
        section_contact: 'Contact Me', contact_title: "Let's Stay Connected",
        contact_desc: 'I am always open to discussing new projects, job opportunities or simply exchanging ideas about technology. Contact me and I will get back to you as soon as possible.',
        contact_location: 'Location', contact_email: 'Email', contact_phone: 'Phone',
        social_github: 'See my projects and repositories',
        social_linkedin: 'Professional Connection', social_linkedin_cta: 'Connect with me',
        social_whatsapp: 'Direct Message', social_email: 'Send me a direct email',
        footer_about: 'About', footer_rights: 'All rights reserved.',
        videos_eyebrow: 'Youtube Gallery',
        videos_heading: 'WORKS',
        videos_subtitle: 'Choose a category and open the videos directly on YouTube.',
        videos_filter_all: 'All', videos_filter_long: 'Long video',
        videos_filter_shorts: 'Shorts', videos_filter_live: 'Lives',
        videos_channel: 'Channel', videos_filters_label: 'Video filters',
        videos_long_reflection: 'Long video - Reflection',
        videos_shorts_edits: 'Shorts - Edits',
        videos_shorts_calisthenics: 'Shorts - Calisthenics',
        videos_shorts_reviews: 'Shorts - Product reviews',
        videos_live_study: 'Live - Study with me',
        videos_card_complete: 'Complete content', videos_card_projects: 'Projects in practice',
        videos_card_tech: 'Tech and dev routine', videos_card_edits: 'Quick edits',
        videos_card_dev: 'Dev clips', videos_card_moments: 'Tech moments',
        videos_card_study: 'Study livestreams', videos_card_programming: 'Programming live',
        videos_card_focus: 'Focus session',
        videos_ticker_create: 'Create', videos_ticker_publish: 'Publish',
        videos_ticker_edit: 'Edit', videos_ticker_record: 'Record',
        videos_footer_projects: 'Projects', videos_footer_videos: 'Videos',
        videos_footer_contact: 'Contact', videos_footer_certificates: 'Certificates',
        cert_hero_title: 'My <span>Professional Certificates</span>',
        cert_hero_subtitle: 'A collection of certifications and qualifications demonstrating expertise across various technologies and methodologies.',
        cert_section_title: 'Certificates Collection',
        cert_section_subtitle: 'Browse through my professional certifications',
        cert_search_placeholder: 'Search certificates...',
        cert_showing: 'Showing certificates...',
        cert_contact_title: "Let's Stay Connected",
        cert_contact_subtitle: 'Feel free to reach out for professional opportunities',
        cert_footer: '© 2026 Professional Portfolio. All rights reserved.',
        cert_filter_all: 'All', cert_filter_dev: 'Development', cert_filter_mgmt: 'Management',
        cert_view: 'View', cert_pdf: 'PDF',
        cert_details: 'Details', cert_skills_label: 'Skills',
        cert_issuer: 'Issuer:', cert_date: 'Date:', cert_duration: 'Duration:', cert_id: 'ID:',
        cert_download: 'Download PDF', cert_share: 'Share',
        cert_no_results: 'No certificates found matching your criteria',
        cert_pdf_unavailable: 'PDF not available for this certificate',
        cert_download_started: 'Download started!',
        cert_share_text: 'Check out my certificate:',
        cert_link_copied: 'Link copied to clipboard!',
        cert_share_unavailable: 'Unable to share this certificate',
        cert_showing_count: 'Showing',
        cert_of: 'of',
        cert_certificates: 'certificates',
        cert_page: 'Page',
        typed_strings: ['Full-Stack Developer', 'UI/UX Designer', 'Web3 Enthusiast', 'Digital Influencer']
    },
    es: {
        nav_home: 'Inicio', nav_about: 'Sobre Mí', nav_skills: 'Habilidades',
        nav_projects: 'Proyectos', nav_experience: 'Experiencia', nav_videos: 'Videos',
        nav_contact: 'Contacto', nav_certificates: 'Certificados',
        cv: 'Currículum', select_language: 'Seleccionar idioma', open_menu: 'Abrir menú',
        cv_modal_eyebrow: 'Documento profesional', cv_modal_title: 'Currículum de Gabriel Felipe',
        cv_modal_subtitle: 'Visualiza el currículum o descarga una copia en PDF.',
        cv_download_pdf: 'Descargar currículum en PDF', cv_open_page: 'Abrir en nueva página',
        cv_close: 'Cerrar currículum', cv_open: 'Abrir currículum',
        videos_open_channel: 'Abrir canal de YouTube',
        home_page_title: 'Gabriel Felipe | Desarrollador Full-Stack',
        videos_page_title: 'Videos | Gabriel Felipe', cert_page_title: 'Certificados | Gabriel Felipe',
        hero_greeting: 'Hola a todos👋, soy',
        hero_role: 'Desarrollador Full-Stack Junior',
        hero_see_projects: 'Ver Proyectos', hero_contact: 'Contáctame',
        badge_experience: 'De Experiencia', badge_made: 'Realizados',
        about_title: 'Desarrollador Full-Stack & Influencer Digital',
        about_p1: 'Soy un desarrollador full-stack con más de 1 año de experiencia creando soluciones web innovadoras. Mi pasión es transformar ideas complejas en interfaces intuitivas y funcionales que brinden excelentes experiencias de usuario.',
        about_p2: 'Mi camino en la programación comenzó a los 15 años, y desde entonces me he dedicado a aprender nuevas tecnologías y metodologías. Creo que la tecnología debe ser accesible y útil para todos, y eso me motiva a crear aplicaciones que marquen la diferencia.',
        stat_projects: 'Proyectos', stat_clients: 'Clientes', stat_years: 'Años de Exp', stat_tech: 'Tecnologías',
        section_skills: 'Mis Habilidades', skills_technical: 'Habilidades Técnicas', skills_professional: 'Habilidades Profesionales',
        skills_tech_title: 'Tecnologías que Uso',
        skill_htmlcss: 'HTML/CSS', skill_js: 'JavaScript/TypeScript', skill_firebase: 'Firebase/JSON',
        skill_node: 'Node.js/Docker', skill_php: 'PHP/MySQL', skill_uiux: 'Diseño UI/UX',
        skill_agile: 'Desarrollo Ágil', skill_problem: 'Resolución de Problemas',
        skill_teamwork: 'Trabajo en Equipo', skill_communication: 'Comunicación',
        section_projects: 'Mis Proyectos', filter_all: 'Todos', proj_see: 'Ver',
        proj_more_github: 'Ver más en GitHub',
        proj_waveos_desc: 'El sistema operativo del navegador',
        proj_cafestore_desc: 'Todo para tu identidad digital. Creación de aplicaciones web, agencias digitales, sitios y landing pages para ti y tu negocio',
        proj_todo_desc: 'Overlays de productividad en tiempo real para OBS',
        proj_linkwave_desc: 'Links para creadores, influencers y streamers. Una forma simple y elegante de compartir todo tu contenido en un solo lugar.',
        proj_samptech_desc: 'Tienda de Informática y Asistencia Técnica para Computadoras, Teléfonos y Consolas.',
        proj_streampix_desc: 'Plataforma de Alertas de Donaciones vía Pix para Streaming',
        section_experience: 'Experiencia',
        exp_uiux_title: 'Diseño UI/UX', exp_uiux_role: 'Diseñador UI/UX',
        exp_uiux_desc: 'Creación de interfaces intuitivas y experiencias de usuario excepcionales para aplicaciones web y móviles. Implementación de sistemas de diseño y prototipado interactivo con Figma.',
        exp_fullstack_title: 'Desarrollo Full-Stack', exp_fullstack_role: 'Desarrollador Full-Stack',
        exp_fullstack_desc: 'Desarrollo web utilizando tecnologías como HTML, CSS, JavaScript, PHP y MySQL. Construcción de aplicaciones responsivas y dinámicas con enfoque en rendimiento.',
        exp_influencer_title: 'Influencer Digital', exp_influencer_role: 'Influencer Digital',
        exp_date_mar2025: 'Marzo 2025 - Presente', exp_date_jan2025: 'Ene 2025 - Presente',
        exp_social_strategy: 'Estrategia de Redes Sociales', exp_video_hub: 'Hub de Videos',
        exp_yt_desc: 'Shorts → edits de alto engagement | Long-form → producción premium | Lives → interacción con la comunidad | <span class="text-purple-300">Propósito: crecimiento de audiencia + conexión fuerte</span>',
        exp_tw_desc: '<span class="text-purple-300">Propósito ideal: documentar tu camino dev + insights financieros | Engagement en tiempo real con la comunidad tech</span>',
        exp_pin_desc: 'Portafolio de diseño | <span class="text-purple-300">Propósito: tráfico pasivo + visibilidad de diseño</span>',
        exp_li_desc: 'Certificados y logros profesionales | <span class="text-purple-300">Propósito: establecer autoridad + credibilidad profesional</span>',
        exp_tg_desc: 'Comunicación directa con clientes + contenido promocional | <span class="text-purple-300">Propósito: canal de monetización directa</span>',
        exp_dc_desc: 'Comunidad de estudio & hub de aprendizaje | Study streams (cámara encendida, trabajo enfocado) | <span class="text-purple-300">Propósito: retención de comunidad + fuerte engagement</span>',
        section_contact: 'Contáctame', contact_title: 'Mantengámonos Conectados',
        contact_desc: 'Siempre estoy abierto a discutir nuevos proyectos, oportunidades laborales o simplemente intercambiar ideas sobre tecnología. Contáctame y te responderé lo antes posible.',
        contact_location: 'Ubicación', contact_email: 'Correo', contact_phone: 'Teléfono',
        social_github: 'Ver mis proyectos y repositorios',
        social_linkedin: 'Conexión Profesional', social_linkedin_cta: 'Conéctate conmigo',
        social_whatsapp: 'Mensaje Directo', social_email: 'Envíame un correo directo',
        footer_about: 'Sobre', footer_rights: 'Todos los derechos reservados.',
        videos_eyebrow: 'Galería de Youtube',
        videos_heading: 'TRABAJOS',
        videos_subtitle: 'Elige una categoría y abre los videos directamente en YouTube.',
        videos_filter_all: 'Todos', videos_filter_long: 'Video largo',
        videos_filter_shorts: 'Shorts', videos_filter_live: 'Lives',
        videos_channel: 'Canal', videos_filters_label: 'Filtro de videos',
        videos_long_reflection: 'Video largo - Reflexión',
        videos_shorts_edits: 'Shorts - Ediciones',
        videos_shorts_calisthenics: 'Shorts - Calistenia',
        videos_shorts_reviews: 'Shorts - Reseñas de productos',
        videos_live_study: 'Live - Estudia conmigo',
        videos_card_complete: 'Contenidos completos', videos_card_projects: 'Proyectos en práctica',
        videos_card_tech: 'Tecnología y rutina dev', videos_card_edits: 'Cortes rápidos',
        videos_card_dev: 'Dev en clips', videos_card_moments: 'Momentos tech',
        videos_card_study: 'Lives de estudio', videos_card_programming: 'Programando en vivo',
        videos_card_focus: 'Sesión de concentración',
        videos_ticker_create: 'Crear', videos_ticker_publish: 'Publicar',
        videos_ticker_edit: 'Editar', videos_ticker_record: 'Grabar',
        videos_footer_projects: 'Proyectos', videos_footer_videos: 'Videos',
        videos_footer_contact: 'Contacto', videos_footer_certificates: 'Certificados',
        cert_hero_title: 'Mis <span>Certificados Profesionales</span>',
        cert_hero_subtitle: 'Una colección de certificaciones y calificaciones que demuestran experiencia en diversas tecnologías y metodologías.',
        cert_section_title: 'Colección de Certificados',
        cert_section_subtitle: 'Explora mis certificaciones profesionales',
        cert_search_placeholder: 'Buscar certificados...',
        cert_showing: 'Mostrando certificados...',
        cert_contact_title: 'Mantengámonos Conectados',
        cert_contact_subtitle: 'No dudes en contactarme para oportunidades profesionales',
        cert_footer: '© 2026 Portafolio Profesional. Todos los derechos reservados.',
        cert_filter_all: 'Todos', cert_filter_dev: 'Desarrollo', cert_filter_mgmt: 'Gestión',
        cert_view: 'Ver', cert_pdf: 'PDF',
        cert_details: 'Detalles', cert_skills_label: 'Habilidades',
        cert_issuer: 'Emisor:', cert_date: 'Fecha:', cert_duration: 'Duración:', cert_id: 'ID:',
        cert_download: 'Descargar PDF', cert_share: 'Compartir',
        cert_no_results: 'No se encontraron certificados con esos criterios',
        cert_pdf_unavailable: 'PDF no disponible para este certificado',
        cert_download_started: '¡Descarga iniciada!',
        cert_share_text: 'Mira mi certificado:',
        cert_link_copied: '¡Enlace copiado al portapapeles!',
        cert_share_unavailable: 'No se pudo compartir este certificado',
        cert_showing_count: 'Mostrando',
        cert_of: 'de',
        cert_certificates: 'certificados',
        cert_page: 'Página',
        typed_strings: ['Desarrollador Full-Stack', 'Diseñador UI/UX', 'Entusiasta Web3', 'Influencer Digital']
    }
};

const langFlags = { pt: '🇧🇷', en: '🇺🇸', es: '🇪🇸' };
const langCodes = { pt: 'PT', en: 'EN', es: 'ES' };

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (!t[key]) return;
        if (el.children.length > 0) {
            el.innerHTML = t[key];
        } else {
            el.textContent = t[key];
        }
    });

    // placeholder inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key]) el.placeholder = t[key];
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
        const key = el.dataset.i18nAriaLabel;
        if (t[key]) el.setAttribute('aria-label', t[key]);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.dataset.i18nTitle;
        if (t[key]) el.title = t[key];
    });

    const flagEl = document.getElementById('lang-flag');
    const codeEl = document.getElementById('lang-code');
    if (flagEl) flagEl.textContent = langFlags[lang];
    if (codeEl) codeEl.textContent = langCodes[lang];

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });

    // Typed.js — only on index page
    if (typeof initTyped === 'function') {
        initTyped(t.typed_strings);
    }

    // Certificates page dynamic strings
    if (typeof updateCertPageStrings === 'function') {
        updateCertPageStrings(t);
    }

    // Videos page filter buttons (data-video-filter)
    const vfMap = {
        all: t.videos_filter_all,
        long: t.videos_filter_long,
        shorts: t.videos_filter_shorts,
        live: t.videos_filter_live
    };
    document.querySelectorAll('[data-video-filter]').forEach(btn => {
        const key = btn.dataset.videoFilter;
        if (vfMap[key]) btn.textContent = vfMap[key];
    });

    document.dispatchEvent(new CustomEvent('portfolio:languagechange', {
        detail: { lang, translations: t }
    }));
}

function initLangSelector() {
    const selector = document.getElementById('lang-selector');
    const btn = document.getElementById('lang-btn');
    if (!selector || !btn) return;

    btn.addEventListener('click', e => {
        e.stopPropagation();
        selector.classList.toggle('open');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            applyLanguage(opt.dataset.lang);
            selector.classList.remove('open');
        });
    });

    document.addEventListener('click', e => {
        if (!selector.contains(e.target)) selector.classList.remove('open');
    });

    applyLanguage(localStorage.getItem('portfolio-lang') || 'pt');
}

document.addEventListener('DOMContentLoaded', initLangSelector);
