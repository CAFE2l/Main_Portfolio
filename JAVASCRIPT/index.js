// ============================================
// PORTFOLIO ENHANCED - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PARTICLES.JS CONFIG =====
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: '#7c4dff' },
                shape: { type: 'circle' },
                opacity: { 
                    value: 0.4, 
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1 }
                },
                size: { 
                    value: 3, 
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.5 }
                },
                line_linked: {
                    enable: true,
                    distance: 140,
                    color: '#7c4dff',
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 0.6 } },
                    push: { particles_nb: 3 }
                }
            },
            retina_detect: true
        });
    }
    
    // ===== TYPED.JS =====
    if (typeof Typed !== 'undefined') {
        new Typed('#typed', {
            strings: [
                'Full-Stack Developer', 
                'UI/UX Designer', 
                'Web3 Enthusiast',
                'Digital Influencer'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2500,
            loop: true,
            cursorChar: '|',
            showCursor: true
        });
    }
    
    // ===== HEADER SCROLL EFFECT =====
    const header = document.getElementById('main-header');
    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    
    // ===== PARALLAX EFFECT =====
    const parallaxElements = document.querySelectorAll('#particles-js');
    const handleParallax = () => {
        const scrolled = window.pageYOffset;
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${scrolled * -0.3}px)`;
        });
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    
    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos
    document.querySelectorAll('.clay, .glass-enhanced, .project-card, .timeline-item, .skill-bar').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ===== SKILL BARS ANIMATION =====
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.skill-track').forEach(track => {
        skillObserver.observe(track);
    });
    
    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fechar menu mobile se aberto
                const mobileMenu = document.querySelector('.md\\:hidden.mt-4');
                mobileMenu?.classList.add('hidden');
            }
        });
    });
    
    // ===== MOBILE MENU TOGGLE =====
    const menuBtn = document.querySelector('button[class*="md:hidden"]');
    const mobileMenu = document.querySelector('.md\\:hidden.mt-4');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon?.classList.remove('fa-times');
                icon?.classList.add('fa-bars');
            } else {
                icon?.classList.remove('fa-bars');
                icon?.classList.add('fa-times');
            }
        });
    }
    
    // ===== PROJECT FILTER =====
    const filterBtns = document.querySelectorAll('.inline-flex button');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => {
                b.classList.remove('text-purple-400', 'bg-purple-900/30');
                b.classList.add('text-gray-300');
            });
            this.classList.remove('text-gray-300');
            this.classList.add('text-purple-400', 'bg-purple-900/30');
            
            const filter = this.textContent.trim().toLowerCase();
            
            projectCards.forEach(card => {
                const badge = card.querySelector('.text-xs');
                const cardType = badge?.textContent.toLowerCase() || '';
                
                if (filter === 'all' || filter === 'todos' || cardType.includes(filter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ===== VIDEO PAGE FILTER =====
    const videoFilterBtns = document.querySelectorAll('[data-video-filter]');
    const videoCards = document.querySelectorAll('[data-video-category]');

    videoFilterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.videoFilter;

            videoFilterBtns.forEach(button => {
                button.classList.toggle('active', button === this);
            });

            videoCards.forEach(card => {
                const shouldShow = filter === 'all' || card.dataset.videoCategory === filter;
                card.classList.toggle('is-hidden', !shouldShow);

                if (shouldShow) {
                    card.classList.remove('is-filtering');
                    void card.offsetWidth;
                    card.classList.add('is-filtering');
                }
            });
        });
    });
    
    // ===== CARD HOVER EFFECTS =====
    document.querySelectorAll('.clay, .glass-enhanced').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        card.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
    
    // ===== RIPPLE EFFECT ON CLICK =====
    document.querySelectorAll('.btn, .clay, .social-card').forEach(element => {
        element.addEventListener('click', function(e) {
            // Skip if it's a link that should navigate
            if (this.tagName === 'A' && this.getAttribute('href')?.startsWith('#')) return;
            
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                border-radius: 50%;
                background: rgba(124, 77, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.5s ease-out;
                pointer-events: none;
                z-index: 0;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 500);
        });
    });
    
    // ===== CONTACT FORM =====
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (!submitBtn) return;
            
            const originalText = submitBtn.innerHTML;
            
            // Loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
            submitBtn.disabled = true;
            
            try {
                // Simular envio (substitua por sua API real)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // Success state
                submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Enviado!';
                submitBtn.classList.remove('bg-purple-600', 'hover:bg-purple-700');
                submitBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    submitBtn.classList.add('bg-purple-600', 'hover:bg-purple-700');
                }, 3000);
                
            } catch (error) {
                submitBtn.innerHTML = '<i class="fas fa-exclamation mr-2"></i>Erro!';
                submitBtn.classList.add('bg-red-600');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.classList.remove('bg-red-600');
                }, 2000);
            }
        });
    }
    
    // ===== LAZY LOAD IMAGES =====
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ===== COPY EMAIL TO CLIPBOARD =====
    const emailElement = document.querySelector('[data-email]');
    if (emailElement) {
        emailElement.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = emailElement.dataset.email;
            
            try {
                await navigator.clipboard.writeText(email);
                
                // Feedback visual
                const originalText = emailElement.textContent;
                emailElement.textContent = 'Copiado! ✓';
                emailElement.classList.add('text-green-400');
                
                setTimeout(() => {
                    emailElement.textContent = originalText;
                    emailElement.classList.remove('text-green-400');
                }, 2000);
                
            } catch (err) {
                console.error('Erro ao copiar:', err);
            }
        });
    }
    
    // ===== UPDATE FOOTER YEAR =====
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
    
    // ===== KEYBOARD NAVIGATION =====
    document.addEventListener('keydown', (e) => {
        // Atalhos para navegação
        if (e.ctrlKey || e.metaKey) {
            switch(e.key.toLowerCase()) {
                case '1':
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '2':
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case '3':
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        }
    });
    
    // ===== PERFORMANCE: Debounce scroll events =====
    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
    
    // ===== PRELOAD ANIMATION =====
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Trigger initial animations
        setTimeout(() => {
            document.querySelectorAll('.animate-in').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, 300);
    });
    
    // ===== CONSOLE EASTER EGG =====
    console.log('%c👋 Hello Developer!', 'color: #7c4dff; font-size: 20px; font-weight: bold;');
    console.log('%cGostou do código? Dá uma olhada no meu GitHub: https://github.com/CAFE2l', 'color: #8a8aa0; font-size: 12px;');
});
