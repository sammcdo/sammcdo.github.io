// ============================================
// MODERN PORTFOLIO - INTERACTIVE JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initNavigation();
    initScrollAnimations();
    initSmoothScroll();
});

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SCROLL ANIMATIONS (Reveal on Scroll)
// ============================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observe elements that should animate on scroll
    document.querySelectorAll('.skill-card, .capability-item, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Stagger animations for skill cards
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        observer.observe(card);
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.5 + index * 0.1;
        orb.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// ============================================
// SCROLL INDICATOR ANIMATION
// ============================================

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 200) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

// ============================================
// MOUSE FOLLOW EFFECT (Optional Enhancement)
// ============================================

document.addEventListener('mousemove', (e) => {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Light parallax effect on orbs
    const orbs = document.querySelectorAll('.gradient-orb');
    orbs.forEach(orb => {
        const rect = heroSection.getBoundingClientRect();
        if (
            mouseX > rect.left &&
            mouseX < rect.right &&
            mouseY > rect.top &&
            mouseY < rect.bottom
        ) {
            const x = (mouseX - rect.left - rect.width / 2) * 0.02;
            const y = (mouseY - rect.top - rect.height / 2) * 0.02;
            orb.style.transform += ` translateX(${x}px) translateY(${y}px)`;
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR STATS
// ============================================

const statNumbers = document.querySelectorAll('.stat-number');

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.hasAttribute('data-counted')) {
            animateCounter(entry.target);
            entry.target.setAttribute('data-counted', 'true');
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statObserver.observe(stat));

function animateCounter(element) {
    const text = element.textContent;
    const match = text.match(/(\d+)/);

    if (!match) return;

    const finalNumber = parseInt(match[1]);
    const duration = 1500; // milliseconds
    const steps = 60;
    const stepValue = finalNumber / steps;
    let current = 0;
    let step = 0;

    const interval = setInterval(() => {
        step++;
        current += stepValue;

        if (step >= steps) {
            element.textContent = text;
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current) + text.slice(text.indexOf(match[0]) + match[0].length);
        }
    }, duration / steps);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Press 'h' to go home
    if (e.key.toLowerCase() === 'h') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press 'p' to go to projects
    if (e.key.toLowerCase() === 'p') {
        window.location.href = 'html/projects.html';
    }

    // Press 'c' to contact
    if (e.key.toLowerCase() === 'c') {
        window.location.href = 'html/contact.html';
    }
});

// ============================================
// PERFORMANCE: REDUCE MOTION
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.body.style.scroll = 'auto';
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}

console.log('✨ Modern Portfolio Loaded');
