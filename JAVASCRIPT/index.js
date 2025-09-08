   // Inicializar partículas
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#6e45e2" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#6e45e2",
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

            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Smooth scrolling para links de navegação
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                        
                        // Fechar menu mobile após clicar em um link
                        if (document.querySelector('.nav-links').classList.contains('active')) {
                            toggleMobileMenu();
                        }
                    }
                });
            });

            // Animação de entrada para elementos
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__fadeInUp');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.glass-card, .skill-item, .project-card').forEach(el => {
                observer.observe(el);
            });

            // Menu mobile toggle
            const menuToggle = document.querySelector('.menu-toggle');
            if (menuToggle) {
                menuToggle.addEventListener('click', toggleMobileMenu);
            }

            // Form submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                    contactForm.reset();
                });
            }

            // Efeito de digitação no título
            typeWriterEffect();
        });

        function toggleMobileMenu() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            
            const menuIcon = document.querySelector('.menu-toggle i');
            if (navLinks.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-times');
            } else {
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        }

        function typeWriterEffect() {
            const titleElement = document.querySelector('.hero h1');
            if (!titleElement) return;
            
            const originalText = titleElement.textContent;
            titleElement.textContent = '';
            
            let i = 0;
            const speed = 100;
            
            function typeWriter() {
                if (i < originalText.length) {
                    titleElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                }
            }
            
            // Iniciar efeito após um breve delay
            setTimeout(typeWriter, 1000);
        }

        // Efeito de luz LED interativo
        document.addEventListener('mousemove', function(e) {
            const ledElement = document.querySelector('.led-indicator');
            if (!ledElement) return;
            
            // Calcular distância do mouse ao LED
            const rect = ledElement.getBoundingClientRect();
            const ledX = rect.left + rect.width / 2;
            const ledY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(Math.pow(e.clientX - ledX, 2) + Math.pow(e.clientY - ledY, 2));
            
            // Aumentar brilho quando o mouse estiver próximo
            const intensity = Math.max(0, 1 - distance / 200);
            ledElement.style.boxShadow = `0 0 ${5 + intensity * 10}px ${intensity * 2}px var(--accent-color)`;
        });