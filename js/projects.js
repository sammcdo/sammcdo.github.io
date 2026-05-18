// ============================================
// PROJECTS PAGE - DYNAMIC LOADING & FILTERING
// ============================================

// Project data
const projects = [
    {
        id: 1,
        title: "Jane Austen AI",
        category: "ai",
        categoryLabel: "AI & Agents",
        description: "LSTM neural network that generates novels in the style of Jane Austen. Demonstrates advanced text generation using deep learning.",
        image: "../img/austen.jpg",
        tags: ["LSTM", "NLP", "Text Generation", "PyTorch"],
        links: {
            github: "https://github.com/sammcdo/TextGeneratorAI"
        }
    },
    {
        id: 2,
        title: "ML Authorship Attribution",
        category: "ml",
        categoryLabel: "Machine Learning",
        description: "Classification models to identify authors based on writing style. Formal analysis of authorship attribution techniques.",
        image: "https://github.com/sammcdo/ML-Authorship-Attribution/blob/main/output/pca.png?raw=true",
        tags: ["Classification", "NLP", "Feature Engineering", "ML"],
        links: {
            github: "https://github.com/sammcdo/ML-Authorship-Attribution/",
            writeup: "https://sammcdo.github.io/ML-Authorship-Attribution/"
        }
    },
    {
        id: 3,
        title: "IPO Stock Price Predictor",
        category: "data",
        categoryLabel: "Data Science",
        description: "Vector Autoregressive model for predicting related IPO stock prices. Time series analysis and forecasting.",
        image: "../img/vectorautoreg.png",
        tags: ["Time Series", "VAR", "Forecasting", "Statistics"],
        links: {
            writeup: "https://sammcdo.github.io/IPO-Predictor/index.html",
            github: "https://github.com/sammcdo/IPO-Predictor"
        }
    },
    {
        id: 4,
        title: "Live Image Detection",
        category: "ai",
        categoryLabel: "AI & Agents",
        description: "Real-time computer vision system for object detection and image classification in live video streams.",
        image: "https://github.com/sammcdo/ImageClassificationLive/blob/main/demo.png?raw=true",
        tags: ["Computer Vision", "YOLOv3", "Real-time", "OpenCV"],
        links: {
            github: "https://github.com/sammcdo/live-image-detection"
        }
    },
    {
        id: 5,
        title: "Kattis Problem Solver",
        category: "web",
        categoryLabel: "Web Development",
        description: "Full-stack application for tracking and solving competitive programming problems with analytics dashboard.",
        image: "../img/kattis.png",
        tags: ["React", "Python", "APIs", "Database"],
        links: {
            github: "https://github.com/sammcdo/kattis-solver"
        }
    },
    {
        id: 6,
        title: "FRC Nomad 2022",
        category: "ml",
        categoryLabel: "Machine Learning",
        description: "Machine learning pipeline for FIRST Robotics competition. Computer vision and autonomous control systems.",
        image: "../img/robot2022.jpeg",
        tags: ["Computer Vision", "Robotics", "Python", "Deep Learning"],
        links: {
            github: "https://github.com/sammcdo/FRC-Nomad"
        }
    },
    {
        id: 7,
        title: "Web Editor",
        category: "web",
        categoryLabel: "Web Development",
        description: "Interactive online code editor with syntax highlighting, live preview, and multi-language support.",
        image: "../img/mtntraintours.png",
        tags: ["JavaScript", "React", "Ace Editor", "Web"],
        links: {
            github: "https://github.com/sammcdo/web-editor",
            demo: "https://sammcdo.github.io/web-editor/"
        }
    },
    {
        id: 8,
        title: "ML Stylo Compare",
        category: "ml",
        categoryLabel: "Machine Learning",
        description: "Tool for comparing stylometric features across texts. Analyzes linguistic patterns using machine learning.",
        image: "../img/stylo.png",
        tags: ["Stylometry", "NLP", "ML", "Analysis"],
        links: {
            github: "https://github.com/sammcdo/stylo-compare"
        }
    },
    {
        id: 9,
        title: "Decision Tree Visualizer",
        category: "data",
        categoryLabel: "Data Science",
        description: "Interactive visualization of decision tree algorithms showing splits, depths, and classification decisions.",
        image: "../img/dt.png",
        tags: ["Visualization", "ML", "Algorithms", "Interactive"],
        links: {
            github: "https://github.com/sammcdo/decision-tree-viz"
        }
    },
    {
        id: 10,
        title: "JHA Safety Analytics",
        category: "data",
        categoryLabel: "Data Science",
        description: "Job Hazard Analysis data pipeline and analytics platform. Safety metrics tracking and reporting system.",
        image: "../img/jha.png",
        tags: ["Data Pipeline", "Analytics", "Safety", "Reporting"],
        links: {
            github: "https://github.com/sammcdo/jha-safety-analytics"
        }
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');
    initializeFilterButtons();
    initMobileMenu();
    initNavigation();
});

// ============================================
// RENDER PROJECTS
// ============================================

function renderProjects(filter) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);

    filtered.forEach((project, index) => {
        const card = createProjectCard(project);
        grid.appendChild(card);
        
        // Stagger animation
        setTimeout(() => {
            card.classList.add('show');
        }, index * 50);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card hide';
    card.dataset.category = project.category;

    let linksHtml = '';
    if (project.links.github) {
        linksHtml += `<a href="${project.links.github}" target="_blank" rel="noopener" class="project-link">GitHub</a>`;
    }
    if (project.links.writeup) {
        linksHtml += `<a href="${project.links.writeup}" target="_blank" rel="noopener" class="project-link">Writeup</a>`;
    }
    if (project.links.demo) {
        linksHtml += `<a href="${project.links.demo}" target="_blank" rel="noopener" class="project-link">Demo</a>`;
    }

    const tagsHtml = project.tags
        .map(tag => `<span class="project-tag">${tag}</span>`)
        .join('');

    const imageHtml = project.image 
        ? `<img src="${project.image}" alt="${project.title}" class="project-image-img">`
        : `<div class="project-image-placeholder">💻</div>`;

    card.innerHTML = `
        <div class="project-image">
            ${imageHtml}
        </div>
        <div class="project-content">
            <div class="project-category">${project.categoryLabel}</div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-links">${linksHtml}</div>
        </div>
    `;

    // Add image error handler
    const img = card.querySelector('.project-image-img');
    if (img) {
        img.addEventListener('error', function() {
            this.parentElement.innerHTML = '<div class="project-image-placeholder">💻</div>';
        });
    }

    return card;
}

// ============================================
// FILTER FUNCTIONALITY
// ============================================

function initializeFilterButtons() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');

            // Filter projects
            const filter = btn.dataset.filter;
            renderProjects(filter);
        });
    });
}

// ============================================
// MOBILE MENU (from modern.js)
// ============================================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

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
    
    // Set active link for projects page
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'projects.html') {
            link.classList.add('active');
        }
    });
}

// ============================================
// INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
// ============================================

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

// Observe CTA section
document.addEventListener('DOMContentLoaded', () => {
    const ctaSection = document.querySelector('.cta-section');
    if (ctaSection) {
        ctaSection.style.opacity = '0';
        ctaSection.style.transform = 'translateY(20px)';
        ctaSection.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(ctaSection);
    }
});

console.log('✨ Projects Page Loaded');
