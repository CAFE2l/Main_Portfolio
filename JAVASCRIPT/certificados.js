// ====== CONSTANTES E CONFIGURAÇÕES ======
const CERTIFICATES_PER_PAGE = 12; // 4 colunas × 3 linhas
const CertificateType = {
    DEVELOPMENT: 'development',
    DESIGN: 'design',
    WEB3: 'web3',
    LANGUAGE: 'language',
    FULLSTACK: 'fullstack',
    MANAGEMENT: 'management'
};

const RarityType = {
    COMMON: 'common',
    UNCOMMON: 'uncommon',
    RARE: 'rare'
};

// Mapeamento de ícones
const typeIcons = {
    [CertificateType.DEVELOPMENT]: 'fas fa-code',
    [CertificateType.DESIGN]: 'fas fa-palette',
    [CertificateType.WEB3]: 'fas fa-cube',
    [CertificateType.LANGUAGE]: 'fas fa-language',
    [CertificateType.FULLSTACK]: 'fas fa-layer-group',
    [CertificateType.MANAGEMENT]: 'fas fa-tasks'
};

// Dados completos dos certificados
const certificatesData = [
    {
        id: 1,
        title: "HTML",
        subtitle: "an understanding of HTML5",
        type: CertificateType.DEVELOPMENT,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplay-lh.googleusercontent.com%2FCImImd_aaNpZYuFL4o0NRNFuoxmKr6zzLCuBDsZYRu6TrBN3ws0M_hA4y_zii6b2Qxdz%3Dw3840-h2160&f=1&nofb=1&ipt=8aea57c1f31906eb995364af1e771ec2b04138b56be179f3b6d6fafb1b0f8656",
        pdfUrl: "/Certificates/certificate_HTML.pdf",
        issuer: "Mimo Education",
        date: "May 2025",
        duration: "5 hours",
        skills: ["HTML5"],
        description: "an understanding of the core concepts of websites and the HTML knowledge required to create web pages",
        rarity: RarityType.COMMON,
    },
    {
        id: 2,
        title: "CSS",
        subtitle: "User Interface & Experience Design",
        type: CertificateType.DEVELOPMENT,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplay-lh.googleusercontent.com%2FCImImd_aaNpZYuFL4o0NRNFuoxmKr6zzLCuBDsZYRu6TrBN3ws0M_hA4y_zii6b2Qxdz%3Dw3840-h2160&f=1&nofb=1&ipt=8aea57c1f31906eb995364af1e771ec2b04138b56be179f3b6d6fafb1b0f8656",
        issuer: "Mimo Education",
        pdfUrl: "/Certificates/certificate_CSS.pdf",
        date: "March 2025",
        duration: "5 hours",
        skills: ["CSS3", "Flexbox", "Grid", "Responsive Design"],
        description: "an understanding of the core concepts of CSS and the knowledge required to style web pages",
        rarity: RarityType.COMMON,
    },
    {
        id: 3,
        title: "Pratique HTML e CSS em projetos Web",
        subtitle: "Introduction to HTML5 and CSS3 Fundamentals",
        type: CertificateType.DEVELOPMENT,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportfolio-stefania-bruera.vercel.app%2Fassets%2Fimg%2Flogos%2Falura-latam-logo.jpg&f=1&nofb=1&ipt=98c39b068f90767e0cbc024c5dc249df338ba2d7c99e52d182ad746198ea21d6",
        issuer: "Alura",
        date: "June 2025",
        pdfUrl: "/Certificates/html_cww.pdf",
        duration: "35 hours",
        skills: ["Create a webpage", "Positioning, Lists and Navigation", "Advancing in CSS", "Working with forms and tables"],
        description: "Fundamentals of HTML5 and CSS3, building and styling web pages, responsive design techniques, and best practices for web development.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 4,
        title: "Data Modeling",
        subtitle: "Introducing to Modeling data and relational databases",
        type: CertificateType.DEVELOPMENT,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportfolio-stefania-bruera.vercel.app%2Fassets%2Fimg%2Flogos%2Falura-latam-logo.jpg&f=1&nofb=1&ipt=98c39b068f90767e0cbc024c5dc249df338ba2d7c99e52d182ad746198ea21d6",
        issuer: "Alura",
        date: "July 2025",
        pdfUrl: "/Certificates/data_modeling.pdf",
        duration: "39 hours",
        skills: ["Entities, Relationships, and Attributes", "logical and physical modeling", "Relational Algebra", "Normalization", "Understanding SQL"],
        description: "Understanding data modeling concepts, including entities, relationships, and attributes. Learning how to create logical and physical data models, as well as understanding relational algebra and normalization techniques.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 5,
        title: "UX Strategy",
        subtitle: "Understanding the Strategies of UX",
        type: CertificateType.DESIGN,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportfolio-stefania-bruera.vercel.app%2Fassets%2Fimg%2Flogos%2Falura-latam-logo.jpg&f=1&nofb=1&ipt=98c39b068f90767e0cbc024c5dc249df338ba2d7c99e52d182ad746198ea21d6",
        issuer: "Alura",
        date: "July 2025",
        pdfUrl: "https://cursos.alura.com.br/degree/certificate/f8568ec7-5207-4719-8459-a2eacead5f5c?lang=en",
        duration: "12 hours",
        skills: ["UX canvas", "MVP and MLP", "Features", "Understanding the user", "Having a strategy", "Diverging ideas", "Defining the script", "Materializing the user", "More empathy and more value", "Scenarios and stories"],
        description: "Understanding UX strategy principles, including user research, prototyping, and user testing methodologies.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 6,
        title: "UX Usability",
        subtitle: "Introduction to Decentralized Technologies",
        type: CertificateType.DESIGN,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportfolio-stefania-bruera.vercel.app%2Fassets%2Fimg%2Flogos%2Falura-latam-logo.jpg&f=1&nofb=1&ipt=98c39b068f90767e0cbc024c5dc249df338ba2d7c99e52d182ad746198ea21d6",
        issuer: "Alura",
        date: "July 2025",
        pdfUrl: "/Certificates/UX_usability.pdf",
        duration: "39 hours",
        skills: ["Usability Testing", "User Flows", "Prototyping", "User Interviews"],
        description: "Mastering usability testing techniques and creating user-centered designs.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 7,
        title: "UX",
        subtitle: "Complete User Experience Design",
        type: CertificateType.DESIGN,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportfolio-stefania-bruera.vercel.app%2Fassets%2Fimg%2Flogos%2Falura-latam-logo.jpg&f=1&nofb=1&ipt=98c39b068f90767e0cbc024c5dc249df338ba2d7c99e52d182ad746198ea21d6",
        issuer: "Alura",
        date: "July 2025",
        pdfUrl: "/Certificates/UX.pdf",
        duration: "39 hours",
        skills: ["User Research", "Wireframing", "Prototyping", "UI Design"],
        description: "Comprehensive course covering all aspects of User Experience design.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 8,
        title: "Communication",
        subtitle: "Effective Business Communication",
        type: CertificateType.MANAGEMENT,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fportfolio-stefania-bruera.vercel.app%2Fassets%2Fimg%2Flogos%2Falura-latam-logo.jpg&f=1&nofb=1&ipt=98c39b068f90767e0cbc024c5dc249df338ba2d7c99e52d182ad746198ea21d6",
        issuer: "Alura",
        date: "July 2025",
        pdfUrl: "/Certificates/comunication.pdf",
        duration: "39 hours",
        skills: ["Public Speaking", "Business Writing", "Presentation Skills", "Negotiation"],
        description: "Developing effective communication skills for professional environments.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 9,
        title: "JavaScript Fundamentals",
        subtitle: "Modern JavaScript Programming",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/3b82f6/ffffff?text=JS",
        pdfUrl: "/Certificates/javascript.pdf",
        issuer: "Alura",
        date: "August 2025",
        duration: "45 hours",
        skills: ["ES6+", "DOM Manipulation", "Async Programming", "Modern JS Features"],
        description: "Mastering modern JavaScript programming concepts and techniques.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 10,
        title: "React & Redux",
        subtitle: "Modern Frontend Development",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/61dafb/ffffff?text=React",
        pdfUrl: "/Certificates/react_redux.pdf",
        issuer: "Alura",
        date: "September 2025",
        duration: "50 hours",
        skills: ["React Hooks", "Redux", "Context API", "Component Architecture"],
        description: "Building modern web applications with React and state management.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 11,
        title: "Node.js API Development",
        subtitle: "Backend Development with Node.js",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/339933/ffffff?text=Node.js",
        pdfUrl: "/Certificates/nodejs.pdf",
        issuer: "Alura",
        date: "October 2025",
        duration: "40 hours",
        skills: ["Express.js", "REST APIs", "Authentication", "Database Integration"],
        description: "Creating robust backend APIs with Node.js and Express.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 12,
        title: "AWS Cloud Practitioner",
        subtitle: "Cloud Computing Fundamentals",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/FF9900/ffffff?text=AWS",
        pdfUrl: "/Certificates/aws.pdf",
        issuer: "Amazon",
        date: "November 2025",
        duration: "80 hours",
        skills: ["EC2", "S3", "Lambda", "Cloud Architecture"],
        description: "Fundamentals of AWS cloud computing services and architecture.",
        rarity: RarityType.RARE,
    },
    {
        id: 13,
        title: "Python for Data Science",
        subtitle: "Data Analysis with Python",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/3776AB/ffffff?text=Python",
        pdfUrl: "/Certificates/python_data.pdf",
        issuer: "Alura",
        date: "December 2025",
        duration: "55 hours",
        skills: ["Pandas", "NumPy", "Matplotlib", "Data Analysis"],
        description: "Data analysis and visualization using Python libraries.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 14,
        title: "UI Design Fundamentals",
        subtitle: "User Interface Design Principles",
        type: CertificateType.DESIGN,
        image: "https://via.placeholder.com/400x300/FF6B9D/ffffff?text=UI",
        pdfUrl: "/Certificates/ui_design.pdf",
        issuer: "Alura",
        date: "January 2026",
        duration: "30 hours",
        skills: ["Visual Design", "Typography", "Color Theory", "Layout"],
        description: "Principles of effective user interface design.",
        rarity: RarityType.COMMON,
    },
    {
        id: 15,
        title: "Project Management",
        subtitle: "Agile Project Management",
        type: CertificateType.MANAGEMENT,
        image: "https://via.placeholder.com/400x300/9C27B0/ffffff?text=PM",
        pdfUrl: "/Certificates/project_management.pdf",
        issuer: "Google",
        date: "February 2026",
        duration: "60 hours",
        skills: ["Scrum", "Agile", "Project Planning", "Team Leadership"],
        description: "Managing projects using Agile and Scrum methodologies.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 16,
        title: "English C1 Advanced",
        subtitle: "Advanced English Proficiency",
        type: CertificateType.LANGUAGE,
        image: "https://via.placeholder.com/400x300/0077BE/ffffff?text=ENG",
        pdfUrl: "/Certificates/english_c1.pdf",
        issuer: "Cambridge",
        date: "March 2026",
        duration: "200 hours",
        skills: ["Advanced Grammar", "Business English", "Academic Writing", "Speaking"],
        description: "Advanced English language proficiency certification.",
        rarity: RarityType.RARE,
    },
    {
        id: 17,
        title: "Blockchain Fundamentals",
        subtitle: "Introduction to Blockchain Technology",
        type: CertificateType.WEB3,
        image: "https://via.placeholder.com/400x300/FF7F00/ffffff?text=Web3",
        pdfUrl: "/Certificates/blockchain.pdf",
        issuer: "Alura",
        date: "April 2026",
        duration: "25 hours",
        skills: ["Smart Contracts", "Cryptocurrency", "Decentralized Apps", "Web3"],
        description: "Fundamentals of blockchain technology and applications.",
        rarity: RarityType.RARE,
    },
    {
        id: 18,
        title: "Full-Stack Development",
        subtitle: "Complete Web Development Stack",
        type: CertificateType.FULLSTACK,
        image: "https://via.placeholder.com/400x300/4CAF50/ffffff?text=FullStack",
        pdfUrl: "/Certificates/fullstack.pdf",
        issuer: "Alura",
        date: "May 2026",
        duration: "100 hours",
        skills: ["Frontend", "Backend", "Database", "DevOps"],
        description: "Comprehensive full-stack web development certification.",
        rarity: RarityType.RARE,
    },
    {
        id: 19,
        title: "DevOps Engineering",
        subtitle: "Development Operations",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/2496ED/ffffff?text=DevOps",
        pdfUrl: "/Certificates/devops.pdf",
        issuer: "Microsoft",
        date: "June 2026",
        duration: "70 hours",
        skills: ["Docker", "Kubernetes", "CI/CD", "Infrastructure"],
        description: "DevOps practices and tools for modern development.",
        rarity: RarityType.RARE,
    },
    {
        id: 20,
        title: "Mobile Development",
        subtitle: "Cross-Platform Mobile Apps",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/61DAFB/ffffff?text=Mobile",
        pdfUrl: "/Certificates/mobile.pdf",
        issuer: "Alura",
        date: "July 2026",
        duration: "65 hours",
        skills: ["React Native", "Expo", "Mobile UI", "Native Features"],
        description: "Building cross-platform mobile applications.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 21,
        title: "GraphQL API Design",
        subtitle: "Modern API Development",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/E535AB/ffffff?text=GraphQL",
        pdfUrl: "/Certificates/graphql.pdf",
        issuer: "Alura",
        date: "August 2026",
        duration: "30 hours",
        skills: ["GraphQL", "Apollo", "Schema Design", "Queries"],
        description: "Designing and implementing GraphQL APIs.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 22,
        title: "TypeScript Mastery",
        subtitle: "Type-Safe JavaScript",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/3178C6/ffffff?text=TS",
        pdfUrl: "/Certificates/typescript.pdf",
        issuer: "Alura",
        date: "September 2026",
        duration: "45 hours",
        skills: ["TypeScript", "Types", "Interfaces", "Advanced Features"],
        description: "Mastering TypeScript for type-safe applications.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 23,
        title: "Next.js Development",
        subtitle: "React Framework",
        type: CertificateType.DEVELOPMENT,
        image: "https://via.placeholder.com/400x300/000000/ffffff?text=Next.js",
        pdfUrl: "/Certificates/nextjs.pdf",
        issuer: "Vercel",
        date: "October 2026",
        duration: "40 hours",
        skills: ["App Router", "Server Components", "SSR", "Optimization"],
        description: "Building applications with Next.js framework.",
        rarity: RarityType.UNCOMMON,
    },
    {
        id: 24,
        title: "Leadership Skills",
        subtitle: "Team Leadership and Management",
        type: CertificateType.MANAGEMENT,
        image: "https://via.placeholder.com/400x300/8B5CF6/ffffff?text=Lead",
        pdfUrl: "/Certificates/leadership.pdf",
        issuer: "Alura",
        date: "November 2026",
        duration: "25 hours",
        skills: ["Team Management", "Decision Making", "Conflict Resolution", "Strategy"],
        description: "Developing leadership skills for technical teams.",
        rarity: RarityType.UNCOMMON,
    }
];

// ====== VARIÁVEIS DE ESTADO ======
let currentPage = 1;
let currentFilter = 'all';
let selectedCertificate = null;

// ====== FUNÇÕES UTILITÁRIAS ======
function getFilteredCertificates() {
    if (currentFilter === 'all') {
        return certificatesData;
    }
    return certificatesData.filter(cert => cert.type === currentFilter);
}

function getCurrentPageCertificates() {
    const filteredCertificates = getFilteredCertificates();
    const startIndex = (currentPage - 1) * CERTIFICATES_PER_PAGE;
    const endIndex = startIndex + CERTIFICATES_PER_PAGE;
    return filteredCertificates.slice(startIndex, endIndex);
}

function getTotalPages() {
    return Math.ceil(getFilteredCertificates().length / CERTIFICATES_PER_PAGE);
}

// ====== FUNÇÃO PARA GERAR ÍCONES DE SKILLS ======
function getSkillIcon(skill) {
    const skillIcons = {
        'HTML5': 'fab fa-html5',
        'CSS3': 'fab fa-css3-alt',
        'JavaScript': 'fab fa-js',
        'React': 'fab fa-react',
        'Node.js': 'fab fa-node-js',
        'Python': 'fab fa-python',
        'SQL': 'fas fa-database',
        'Git': 'fab fa-git-alt',
        'AWS': 'fab fa-aws',
        'UI/UX': 'fas fa-pencil-ruler',
        'Web Design': 'fas fa-desktop',
        'Flexbox': 'fas fa-th',
        'Grid': 'fas fa-th-large',
        'Responsive Design': 'fas fa-mobile-alt'
    };
    
    // Tenta encontrar correspondência exata
    if (skillIcons[skill]) {
        return skillIcons[skill];
    }
    
    // Busca por palavras-chave
    const skillLower = skill.toLowerCase();
    if (skillLower.includes('html')) return 'fab fa-html5';
    if (skillLower.includes('css')) return 'fab fa-css3-alt';
    if (skillLower.includes('javascript') || skillLower.includes('js')) return 'fab fa-js';
    if (skillLower.includes('react')) return 'fab fa-react';
    if (skillLower.includes('node')) return 'fab fa-node-js';
    if (skillLower.includes('python')) return 'fab fa-python';
    if (skillLower.includes('sql') || skillLower.includes('database')) return 'fas fa-database';
    if (skillLower.includes('git')) return 'fab fa-git-alt';
    if (skillLower.includes('aws')) return 'fab fa-aws';
    if (skillLower.includes('ui') || skillLower.includes('ux')) return 'fas fa-pencil-ruler';
    if (skillLower.includes('design')) return 'fas fa-palette';
    if (skillLower.includes('web')) return 'fas fa-globe';
    if (skillLower.includes('mobile')) return 'fas fa-mobile-alt';
    if (skillLower.includes('table') || skillLower.includes('form')) return 'fas fa-table';
    
    // Ícone padrão
    return 'fas fa-check';
}

// ====== FUNÇÃO PARA CRIAR UM CARD ======
function createCertificateCard(certificate, index) {
    const card = document.createElement('div');
    card.className = 'pokemon-card animate-float';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="pokemon-card-inner">
            <!-- FRONT DO CARD -->
            <div class="pokemon-card-front">
                <div class="holo-effect"></div>
                
                <div class="rarity-badge rarity-${certificate.rarity}">
                    ${certificate.rarity}
                </div>
                
                <div class="card-type type-${certificate.type}">
                    <i class="${typeIcons[certificate.type]}"></i>
                    ${certificate.type}
                </div>
                
                <div class="cert-image">
                    <img src="${certificate.image}" alt="${certificate.title}" 
                         style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                
                <div class="cert-info">
                    <h3 class="cert-title">${certificate.title}</h3>
                    <p class="cert-issuer">${certificate.issuer}</p>
                    
                    <div class="cert-meta">
                        <div class="meta-item">
                            <div>${certificate.duration}</div>
                            <div class="meta-label">Duration</div>
                        </div>
                        <div class="meta-item">
                            <div>${certificate.date}</div>
                            <div class="meta-label">Completed</div>
                        </div>
                    </div>
                    
                    <div class="stats-bar">
                        <div class="stats-fill" 
                             style="width: ${certificate.rarity === RarityType.RARE ? '100%' : 
                                          certificate.rarity === RarityType.UNCOMMON ? '70%' : '40%'};
                                    background: ${certificate.rarity === RarityType.RARE ? '#7c4dff' :
                                                certificate.rarity === RarityType.UNCOMMON ? '#4caf50' : '#8a8aa0'}">
                        </div>
                    </div>
                </div>
                
                <div class="flip-icon" onclick="event.stopPropagation(); this.closest('.pokemon-card').classList.toggle('flipped')">
                    <i class="fas fa-sync-alt"></i>
                </div>
            </div>
            
            <!-- BACK DO CARD -->
            <div class="pokemon-card-back">
                <h3 class="cert-title">${certificate.title}</h3>
                <p class="cert-issuer">${certificate.subtitle}</p>
                
                <div class="cert-meta" style="margin-top: 10px; margin-bottom: 15px;">
                    <div class="meta-item">
                        <div>${certificate.duration}</div>
                        <div class="meta-label">Duration</div>
                    </div>
                    <div class="meta-item">
                        <div>${certificate.date}</div>
                        <div class="meta-label">Date</div>
                    </div>
                </div>
                
                <div style="margin-top: 20px; flex-grow: 1;">
                    <h4 style="color: #7c4dff; font-size: 0.9rem; margin-bottom: 10px;">
                        Skills Acquired:
                    </h4>
                    <div>
                        ${certificate.skills.map(skill => `
                            <div class="skill-item">
                                <div class="skill-icon" style="background: rgba(124, 77, 255, 0.2); color: #7c4dff;">
                                    <i class="${getSkillIcon(skill)}"></i>
                                </div>
                                <span style="font-size: 0.9rem;">${skill}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="card-actions">
                    <button class="card-btn" onclick="event.stopPropagation(); downloadCertificate('${certificate.pdfUrl}', '${certificate.title}')">
                        <i class="fas fa-download"></i> Download PDF
                    </button>
                    <button class="card-btn download-btn" onclick="event.stopPropagation(); openCertificatePopup(${certificate.id})">
                        <i class="fas fa-external-link-alt"></i> View Details
                    </button>
                </div>
                
                <div class="flip-icon" onclick="event.stopPropagation(); this.closest('.pokemon-card').classList.toggle('flipped')">
                    <i class="fas fa-sync-alt"></i>
                </div>
            </div>
        </div>
    `;
    
    // Adiciona evento de clique para abrir popup
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.flip-icon') && !e.target.closest('.card-btn')) {
            openCertificatePopup(certificate.id);
        }
    });
    
    return card;
}

// ====== FUNÇÃO PARA ABRIR POPUP DO CERTIFICADO ======
function openCertificatePopup(certificateId) {
    selectedCertificate = certificatesData.find(cert => cert.id === certificateId);
    
    const popupHTML = `
        <div class="popup-overlay" onclick="closeCertificatePopup()">
            <div class="popup-content" onclick="event.stopPropagation()">
                <button class="popup-close" onclick="closeCertificatePopup()">
                    <i class="fas fa-times"></i>
                </button>
                
                <div style="display: flex; flex-direction: column; gap: 25px;">
                    <!-- Cabeçalho do Popup -->
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                        <div>
                            <h2 style="font-size: 2.2rem; margin-bottom: 10px; color: white;">${selectedCertificate.title}</h2>
                            <p style="color: #8a8aa0; font-size: 1.1rem;">${selectedCertificate.subtitle}</p>
                        </div>
                        <div style="display: flex; gap: 10px;">
                            <div class="rarity-badge rarity-${selectedCertificate.rarity}">
                                ${selectedCertificate.rarity}
                            </div>
                            <div class="card-type type-${selectedCertificate.type}">
                                <i class="${typeIcons[selectedCertificate.type]}"></i>
                                ${selectedCertificate.type}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Imagem do Certificado -->
                    <div class="popup-certificate-image">
                        <img src="${selectedCertificate.image}" alt="${selectedCertificate.title}" 
                             style="width: 100%; height: 100%; object-fit: contain; background: white;">
                    </div>
                    
                    <!-- Informações Detalhadas -->
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px;">
                        <!-- Coluna Esquerda -->
                        <div>
                            <h3 style="color: #7c4dff; margin-bottom: 15px; font-size: 1.2rem;">
                                <i class="fas fa-info-circle"></i> Certificate Details
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: #8a8aa0;">Issuer:</span>
                                    <span style="font-weight: 500;">${selectedCertificate.issuer}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: #8a8aa0;">Completion Date:</span>
                                    <span style="font-weight: 500;">${selectedCertificate.date}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: #8a8aa0;">Duration:</span>
                                    <span style="font-weight: 500;">${selectedCertificate.duration}</span>
                                </div>
                                <div style="display: flex; justify-content: space-between;">
                                    <span style="color: #8a8aa0;">Certificate ID:</span>
                                    <span style="font-weight: 500; font-family: monospace;">#${selectedCertificate.id.toString().padStart(3, '0')}</span>
                                </div>
                            </div>
                            
                            <h3 style="color: #7c4dff; margin: 25px 0 15px; font-size: 1.2rem;">
                                <i class="fas fa-file-alt"></i> Description
                            </h3>
                            <p style="color: #c9c9d9; line-height: 1.6;">
                                ${selectedCertificate.description}
                            </p>
                        </div>
                        
                        <!-- Coluna Direita -->
                        <div>
                            <h3 style="color: #7c4dff; margin-bottom: 15px; font-size: 1.2rem;">
                                <i class="fas fa-tools"></i> Skills Acquired
                            </h3>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;">
                                ${selectedCertificate.skills.map(skill => `
                                    <div style="display: flex; align-items: center; gap: 8px; 
                                         background: rgba(124, 77, 255, 0.1); 
                                         padding: 8px 12px; 
                                         border-radius: 8px;
                                         border: 1px solid rgba(124, 77, 255, 0.2);">
                                        <i class="${getSkillIcon(skill)}" style="color: #7c4dff;"></i>
                                        <span style="font-size: 0.9rem;">${skill}</span>
                                    </div>
                                `).join('')}
                            </div>
                            
                            <h3 style="color: #7c4dff; margin-bottom: 15px; font-size: 1.2rem;">
                                <i class="fas fa-certificate"></i> Certificate Actions
                            </h3>
                            <div style="display: flex; flex-direction: column; gap: 12px;">
                                <button class="popup-download-btn" onclick="downloadCertificate('${selectedCertificate.pdfUrl}', '${selectedCertificate.title}')">
                                    <i class="fas fa-download"></i> Download PDF Certificate
                                </button>
                                <button style="background: rgba(255, 255, 255, 0.1); 
                                              border: 1px solid rgba(255, 255, 255, 0.2);
                                              color: white;
                                              padding: 12px 25px;
                                              border-radius: 12px;
                                              cursor: pointer;
                                              transition: all 0.3s ease;
                                              font-weight: 500;"
                                        onmouseover="this.style.background='rgba(255, 255, 255, 0.2)';"
                                        onmouseout="this.style.background='rgba(255, 255, 255, 0.1)';"
                                        onclick="shareCertificate('${selectedCertificate.title}')">
                                    <i class="fas fa-share-alt"></i> Share Certificate
                                </button>
                            </div>
                            
                            <div style="margin-top: 25px; padding: 15px; 
                                      background: rgba(124, 77, 255, 0.05); 
                                      border-radius: 12px;
                                      border: 1px solid rgba(124, 77, 255, 0.1);">
                                <p style="color: #8a8aa0; font-size: 0.85rem; display: flex; align-items: center; gap: 8px;">
                                    <i class="fas fa-lightbulb" style="color: #7c4dff;"></i>
                                    This certificate verifies the completion of all required coursework and assessments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Adiciona o popup ao body
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    
    // Previne scroll do body
    document.body.style.overflow = 'hidden';
}

// ====== FUNÇÃO PARA FECHAR POPUP ======
function closeCertificatePopup() {
    const popup = document.querySelector('.popup-overlay');
    if (popup) {
        popup.remove();
        document.body.style.overflow = 'auto';
        selectedCertificate = null;
    }
}
// ====== FUNÇÃO PARA BAIXAR CERTIFICADO ======
function downloadCertificate(pdfUrl, fileName) {
    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${fileName.replace(/\s+/g, '_')}_Certificate.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Mostra notificação de download
    showNotification('Download started!', '#4caf50');
}

// ====== FUNÇÃO PARA COMPARTILHAR CERTIFICADO ======
function shareCertificate(title) {
    if (navigator.share) {
        navigator.share({
            title: `${title} Certificate`,
            text: `Check out my ${title} certificate!`,
            url: window.location.href
        })
        .then(() => showNotification('Shared successfully!', '#4caf50'))
        .catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback para copiar link
        navigator.clipboard.writeText(window.location.href)
            .then(() => showNotification('Link copied to clipboard!', '#7c4dff'))
            .catch(err => console.error('Failed to copy:', err));
    }
}

// ====== FUNÇÃO PARA MOSTRAR NOTIFICAÇÃO ======
function showNotification(message, color = '#7c4dff') {
    // Remove notificação existente
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Cria nova notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${color};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Remove após 3 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// ====== FUNÇÃO PARA RENDERIZAR CERTIFICADOS ======
function renderCertificates() {
    const container = document.querySelector('.cards-container');
    if (!container) return;
    
    // Limpa o container
    container.innerHTML = '';
    
    // Obtém certificados da página atual
    const certificates = getCurrentPageCertificates();
    
    // Cria os cards
    certificates.forEach((certificate, index) => {
        const card = createCertificateCard(certificate, index);
        container.appendChild(card);
    });
    
    // Atualiza controles de paginação
    updatePaginationControls();
    
    // Atualiza contador de resultados
    updateResultsCount();
}

// ====== FUNÇÃO PARA ATUALIZAR CONTROLES DE PAGINAÇÃO ======
function updatePaginationControls() {
    const paginationContainer = document.querySelector('.pagination-controls');
    if (!paginationContainer) return;
    
    const totalPages = getTotalPages();
    
    let html = '';
    
    // Botão anterior
    if (currentPage > 1) {
        html += `
            <button class="page-btn" onclick="changePage(${currentPage - 1})">
                <i class="fas fa-chevron-left"></i> Prev
            </button>
        `;
    } else {
        html += `<button class="page-btn disabled" disabled>Prev</button>`;
    }
    
    // Números de página
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    // Ajusta startPage se necessário
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    // Primeira página com ellipsis se necessário
    if (startPage > 1) {
        html += `
            <button class="page-btn" onclick="changePage(1)">1</button>
            ${startPage > 2 ? '<span class="page-ellipsis">...</span>' : ''}
        `;
    }
    
    // Páginas visíveis
    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            html += `<button class="page-btn active">${i}</button>`;
        } else {
            html += `<button class="page-btn" onclick="changePage(${i})">${i}</button>`;
        }
    }
    
    // Última página com ellipsis se necessário
    if (endPage < totalPages) {
        html += `
            ${endPage < totalPages - 1 ? '<span class="page-ellipsis">...</span>' : ''}
            <button class="page-btn" onclick="changePage(${totalPages})">${totalPages}</button>
        `;
    }
    
    // Botão próximo
    if (currentPage < totalPages) {
        html += `
            <button class="page-btn" onclick="changePage(${currentPage + 1})">
                Next <i class="fas fa-chevron-right"></i>
            </button>
        `;
    } else {
        html += `<button class="page-btn disabled" disabled>Next</button>`;
    }
    
    paginationContainer.innerHTML = html;
}

// ====== FUNÇÃO PARA ATUALIZAR CONTADOR DE RESULTADOS ======
function updateResultsCount() {
    const resultsCount = document.querySelector('.results-count');
    if (!resultsCount) return;
    
    const filteredCertificates = getFilteredCertificates();
    const total = filteredCertificates.length;
    const start = (currentPage - 1) * CERTIFICATES_PER_PAGE + 1;
    const end = Math.min(currentPage * CERTIFICATES_PER_PAGE, total);
    
    let filterText = '';
    if (currentFilter !== 'all') {
        const filterLabels = {
            [CertificateType.DEVELOPMENT]: 'Development',
            [CertificateType.DESIGN]: 'Design',
            [CertificateType.WEB3]: 'Web3',
            [CertificateType.LANGUAGE]: 'Language',
            [CertificateType.FULLSTACK]: 'Full Stack',
            [CertificateType.MANAGEMENT]: 'Management'
        };
        filterText = ` in ${filterLabels[currentFilter] || currentFilter}`;
    }
    
    resultsCount.innerHTML = `
        Showing ${start}-${end} of ${total} certificate${total !== 1 ? 's' : ''}${filterText}
    `;
}

// ====== FUNÇÃO PARA MUDAR PÁGINA ======
function changePage(page) {
    const totalPages = getTotalPages();
    if (page < 1 || page > totalPages || page === currentPage) return;
    
    currentPage = page;
    renderCertificates();
    
    // Rola para o topo dos cards
    const container = document.querySelector('.cards-container');
    if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ====== FUNÇÃO PARA APLICAR FILTRO ======
function applyFilter(filterType) {
    // Atualiza estado do filtro
    currentFilter = filterType;
    currentPage = 1;
    
    // Atualiza botões de filtro ativos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === filterType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Renderiza certificados com o novo filtro
    renderCertificates();
}

// ====== FUNÇÃO PARA EXPORTAR CERTIFICADOS ======
function exportCertificates() {
    const certificates = getFilteredCertificates();
    const data = {
        total: certificates.length,
        filter: currentFilter,
        certificates: certificates.map(cert => ({
            title: cert.title,
            issuer: cert.issuer,
            date: cert.date,
            type: cert.type,
            skills: cert.skills
        }))
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `certificates_${currentFilter}_export.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    showNotification('Certificates exported successfully!', '#4caf50');
}

// ====== FUNÇÃO PARA INICIALIZAR ======
function initCertificatesGallery() {
    // Cria os botões de filtro dinamicamente
    const filtersContainer = document.querySelector('.certificate-filters');
    if (filtersContainer) {
        const filterButtons = [
            { filter: 'all', icon: 'fas fa-globe', label: 'All' },
            { filter: CertificateType.DEVELOPMENT, icon: typeIcons[CertificateType.DEVELOPMENT], label: 'Development' },
            { filter: CertificateType.DESIGN, icon: typeIcons[CertificateType.DESIGN], label: 'Design' },
            { filter: CertificateType.WEB3, icon: typeIcons[CertificateType.WEB3], label: 'Web3' },
            { filter: CertificateType.LANGUAGE, icon: typeIcons[CertificateType.LANGUAGE], label: 'Language' },
            { filter: CertificateType.FULLSTACK, icon: typeIcons[CertificateType.FULLSTACK], label: 'Full Stack' },
            { filter: CertificateType.MANAGEMENT, icon: typeIcons[CertificateType.MANAGEMENT], label: 'Management' }
        ];
        
        filterButtons.forEach(btn => {
            const button = document.createElement('button');
            button.className = `filter-btn ${btn.filter === 'all' ? 'active' : ''}`;
            button.dataset.filter = btn.filter;
            button.innerHTML = `<i class="${btn.icon}"></i> ${btn.label}`;
            button.onclick = () => applyFilter(btn.filter);
            filtersContainer.appendChild(button);
        });
    }
    
    // Adiciona botão de exportar se não existir
    const exportBtn = document.createElement('button');
    exportBtn.className = 'export-btn';
    exportBtn.innerHTML = '<i class="fas fa-file-export"></i> Export';
    exportBtn.onclick = exportCertificates;
    exportBtn.style.cssText = `
        background: linear-gradient(135deg, #7c4dff, #00bcd4);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 500;
        transition: transform 0.3s ease;
        margin-left: auto;
    `;
    
    const header = document.querySelector('.header-section');
    if (header) {
        header.style.display = 'flex';
        header.style.justifyContent = 'space-between';
        header.style.alignItems = 'center';
        header.appendChild(exportBtn);
    }
    
    // Inicializa a renderização
    renderCertificates();
    
    // Adiciona estilos CSS dinâmicos
    addDynamicStyles();
}

// ====== FUNÇÃO PARA ADICIONAR ESTILOS DINÂMICOS ======
function addDynamicStyles() {
    const styles = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #7c4dff;
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 9999;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
            font-weight: 500;
        }
        
        .page-ellipsis {
            color: #8a8aa0;
            padding: 0 10px;
        }
        
        .disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }
        
        .popup-download-btn {
            background: linear-gradient(135deg, #7c4dff, #00bcd4);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            width: 100%;
            margin-bottom: 10px;
        }
        
        .popup-download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(124, 77, 255, 0.4);
        }
        
        .export-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(124, 77, 255, 0.3);
        }
        
        .skill-item {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }
        
        .skill-icon {
            width: 24px;
            height: 24px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .popup-certificate-image {
            width: 100%;
            height: 300px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            overflow: hidden;
            border: 2px solid rgba(124, 77, 255, 0.2);
            padding: 10px;
        }
        
        .popup-content {
            max-width: 1200px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            padding: 30px;
            background: linear-gradient(135deg, #1e1e2e, #252538);
            border-radius: 20px;
            position: relative;
            border: 1px solid rgba(124, 77, 255, 0.3);
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        
        .popup-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .popup-close:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: rotate(90deg);
        }
        
        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

// ====== INICIALIZAÇÃO QUANDO O DOM ESTIVER PRONTO ======
document.addEventListener('DOMContentLoaded', function() {
    initCertificatesGallery();
    
    // Adiciona listener para tecla ESC para fechar popup
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeCertificatePopup();
        }
    });
});

// ====== FUNÇÕES GLOBAIS PARA ACESSO NO HTML ======
// Essas funções precisam ser globais para serem chamadas do HTML
window.downloadCertificate = downloadCertificate;
window.openCertificatePopup = openCertificatePopup;
window.closeCertificatePopup = closeCertificatePopup;
window.shareCertificate = shareCertificate;
window.changePage = changePage;
window.applyFilter = applyFilter;
window.exportCertificates = exportCertificates;

// ====== FUNÇÕES ADICIONAIS UTILITÁRIAS ======
function getTotalCertificatesCount() {
    return certificatesData.length;
}

function getCertificatesByRarity(rarity) {
    return certificatesData.filter(cert => cert.rarity === rarity);
}

function searchCertificates(query) {
    const searchTerm = query.toLowerCase();
    return certificatesData.filter(cert => 
        cert.title.toLowerCase().includes(searchTerm) ||
        cert.subtitle.toLowerCase().includes(searchTerm) ||
        cert.issuer.toLowerCase().includes(searchTerm) ||
        cert.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
        cert.description.toLowerCase().includes(searchTerm)
    );
}