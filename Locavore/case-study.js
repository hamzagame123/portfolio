// Locavore Case Study - Interactive JavaScript

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initStatCounters();
    initNavHighlight();
    initParallaxEffects();
    initHoverMicroInteractions();
});

// ===== Scroll Animations =====
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Trigger counter animation for stat cards
                if (entry.target.classList.contains('stat-card')) {
                    animateCounter(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===== Stat Counter Animation =====
function initStatCounters() {
    // Counters will be triggered by scroll observer
}

function animateCounter(element) {
    if (!element || element.dataset.animated) return;
    
    element.dataset.animated = 'true';
    const target = parseInt(element.dataset.count);
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    }

    requestAnimationFrame(updateCounter);
}

// ===== Navigation Highlight =====
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', throttle(highlightNav, 100));
}

// ===== Parallax Effects =====
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', throttle(() => {
        const scrollY = window.scrollY;
        
        if (hero && scrollY < window.innerHeight) {
            const parallaxElements = hero.querySelectorAll('.hero-title, .hero-subtitle');
            parallaxElements.forEach(el => {
                el.style.transform = `translateY(${scrollY * 0.2}px)`;
                el.style.opacity = 1 - (scrollY / window.innerHeight);
            });
        }
    }, 16));
}

// ===== Hover Micro-Interactions =====
function initHoverMicroInteractions() {
    // Card tilt effect
    const cards = document.querySelectorAll('.principle-card, .feature-card, .stat-card, .result-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Magnetic button effect
    const buttons = document.querySelectorAll('.tag, .hmw-card, .screen-item');
    
    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // Quote card slide effect
    const quotes = document.querySelectorAll('.quote-card');
    quotes.forEach(quote => {
        quote.addEventListener('mouseenter', () => {
            quote.style.transform = 'translateX(12px)';
        });
        quote.addEventListener('mouseleave', () => {
            quote.style.transform = '';
        });
    });

    // Journey step pulse
    const steps = document.querySelectorAll('.step-number');
    steps.forEach(step => {
        step.addEventListener('mouseenter', () => {
            step.style.animation = 'pulse 0.5s ease';
        });
        step.addEventListener('animationend', () => {
            step.style.animation = '';
        });
    });

    // Color swatch pop
    const swatches = document.querySelectorAll('.swatch');
    swatches.forEach(swatch => {
        swatch.addEventListener('mouseenter', () => {
            swatch.querySelector('::before')?.style;
            swatch.style.transform = 'scale(1.1)';
        });
        swatch.addEventListener('mouseleave', () => {
            swatch.style.transform = '';
        });
    });
}

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Utility Functions =====
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Typing Effect for Hero (Optional) =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== Add CSS for active nav state =====
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: var(--primary-700);
    }
    .nav-links a.active::after {
        width: 100%;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.15); }
        100% { transform: scale(1); }
    }
    
    .swatch {
        transition: transform 0.2s ease;
    }
`;
document.head.appendChild(style);

// ===== Cursor Trail Effect (Subtle) =====
function initCursorTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(74, 124, 89, 0.3) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0;
    `;
    document.body.appendChild(trail);

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        trail.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        trail.style.opacity = '0';
    });

    function animateTrail() {
        trailX += (mouseX - trailX) * 0.2;
        trailY += (mouseY - trailY) * 0.2;
        
        trail.style.left = `${trailX - 10}px`;
        trail.style.top = `${trailY - 10}px`;
        
        requestAnimationFrame(animateTrail);
    }

    animateTrail();
}

// Only enable cursor trail on desktop
if (window.innerWidth > 768) {
    initCursorTrail();
}

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        document.querySelectorAll('.hero .animate-on-scroll').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });
    }, 300);
});

// Console branding
console.log(`
🌿 Locavore Case Study
   Designed by Hamza Galbete
   
   Eat Local. Live Sustainable.
`);

