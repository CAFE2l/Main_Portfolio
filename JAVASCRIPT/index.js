    // Inicialização do Particles.js
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#7c4dff"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": true,
                            "speed": 2,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#7c4dff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "push": {
                            "particles_nb": 4
                        }
                    }
                },
                "retina_detect": true
            });
            
            // Inicialização do Typed.js
            var typed = new Typed('#typed', {
                strings: ["Full-Stack Developer", "UI/UX Designer", "Web3 Enthusiast"],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true
            });
            
            // Animação de scroll suave
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            // Animação de elementos ao scroll
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(element => {
                fadeInObserver.observe(element);
            });
            
            // Menu mobile
            const menuButton = document.querySelector('button[class*="md:hidden"]');
            const menu = document.querySelector('.md\\:hidden.mt-4');
            
            if (menuButton && menu) {
                menuButton.addEventListener('click', () => {
                    menu.classList.toggle('hidden');
                });
            }
            
            // Form de contato
            const contactForm = document.querySelector('form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    
                    // Simulação de envio
                    const submitBtn = contactForm.querySelector('button[type="submit"]');
                    const originalText = submitBtn.textContent;
                    
                    submitBtn.textContent = 'Enviando...';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        submitBtn.textContent = 'Mensagem Enviada!';
                        submitBtn.classList.remove('bg-purple-600', 'hover:bg-purple-700');
                        submitBtn.classList.add('bg-green-600');
                        
                        setTimeout(() => {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                            submitBtn.classList.remove('bg-green-600');
                            submitBtn.classList.add('bg-purple-600', 'hover:bg-purple-700');
                            contactForm.reset();
                        }, 2000);
                    }, 1500);
                });
            }
            
            // Filtro de projetos
            const filterButtons = document.querySelectorAll('.inline-flex button');
            const projectCards = document.querySelectorAll('.hover-float');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove a classe ativa de todos os botões
                    filterButtons.forEach(btn => {
                        btn.classList.remove('text-purple-400');
                        btn.classList.add('text-gray-300');
                    });
                    
                    // Adiciona a classe ativa ao botão clicado
                    button.classList.remove('text-gray-300');
                    button.classList.add('text-purple-400');
                    
                    // Filtra os projetos
                    const filter = button.textContent.trim().toLowerCase();
                    
                    projectCards.forEach(card => {
                        if (filter === 'todos') {
                            card.style.display = 'block';
                        } else {
                            const badge = card.querySelector('.text-xs');
                            if (badge && badge.textContent.toLowerCase().includes(filter)) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
            
            // Atualização do ano no footer
            document.getElementById('current-year').textContent = new Date().getFullYear();
        });