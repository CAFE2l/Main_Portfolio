   // Navegação suave entre seções
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('.section');
            
            // Mostrar a seção home por padrão
            document.getElementById('home').classList.add('active');
            
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