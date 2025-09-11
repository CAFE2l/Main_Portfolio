// Inicialização quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00f7ff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00f7ff",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        },
        retina_detect: true
    });

    // Configuração do cursor personalizado
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Efeitos de hover no cursor
    const hoverElements = document.querySelectorAll('a, button, .nav-link, .led-button, .project-card');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
    
    // Navegação suave entre seções
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            
            // Esconder todas as seções
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar a seção alvo
            document.getElementById(targetId).classList.add('active');
            
            // Atualizar a navegação
            navLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active');
            });
            
            this.parentElement.classList.add('active');
            
            // Scroll suave para o topo da seção
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Animação das barras de habilidades
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Verificar quando a seção de habilidades está visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.getElementById('sobre'));
    
    // Animação de digitação para a home
    function initTypingAnimation() {
        const typingElement = document.querySelector('.typing-animation');
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                typingElement.style.borderRight = 'none';
            }
        }, 100);
    }
    
    // Iniciar animação de digitação se estiver na seção home
    if (document.querySelector('.typing-animation')) {
        initTypingAnimation();
    }
    
    // Animação de entrada para elementos
    const animatedElements = document.querySelectorAll('.slide-in, .fade-in');
    
    function checkScroll() {
        animatedElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.style.animationPlayState = 'running';
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verificar elementos visíveis no carregamento
    
    // Efeito LED pulsante para bordas
    function pulseLED() {
        const ledElements = document.querySelectorAll('.led-border, .led-hover');
        
        setInterval(() => {
            ledElements.forEach(el => {
                el.style.boxShadow = '0 0 15px #00f7ff, 0 0 30px #00f7ff';
                
                setTimeout(() => {
                    el.style.boxShadow = '0 0 5px #00f7ff, 0 0 10px #00f7ff';
                }, 500);
            });
        }, 2000);
    }
    
    pulseLED();
    
    // Configuração do formulário de contato
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar o formulário
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        });
    }
});