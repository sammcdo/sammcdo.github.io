// ============================================
// BLOG PAGE - DYNAMIC LOADING & FILTERING
// ============================================

// Blog data
const blogs = [
    {
        id: 1,
        title: "Stylo-Compare: Stylometric Text Comparison Tool",
        category: "ml",
        categoryLabel: "Machine Learning",
        description: "A formal writeup of my work creating a Stylometric analysis text comparison tool. Analyzes linguistic patterns and authorship styles.",
        tags: ["Stylometry", "NLP", "Machine Learning", "R Shiny"],
        date: "2023",
        readTime: "8 min read",
        link: "https://sammcdo.github.io/Stylo-Compare/"
    },
    {
        id: 2,
        title: "IPO Stock Price Prediction",
        category: "data",
        categoryLabel: "Data Science",
        description: "A formal writeup of my work predicting stock prices of related IPOs with Vector Autoregression. Time series analysis and forecasting techniques.",
        tags: ["Time Series", "VAR", "Forecasting", "Python"],
        date: "2023",
        readTime: "10 min read",
        link: "https://sammcdo.github.io/IPO-Predictor/index.html"
    },
    {
        id: 3,
        title: "The Need for Speed: Does fewer operators improve speed in Python?",
        category: "python",
        categoryLabel: "Python",
        description: "As developers, we are always on the lookout for ways to optimize our code. This post explores whether using fewer operators in conditional statements can impact the speed of Python code.",
        tags: ["Python", "Performance", "Optimization", "Testing"],
        date: "2023",
        readTime: "6 min read",
        link: "blog/operators.html"
    },
    {
        id: 4,
        title: "Essential Algorithms: The Knapsack Problem",
        category: "algo",
        categoryLabel: "Algorithms",
        description: "A detailed guide on solving the Knapsack Problem using dynamic programming. Learn how to maximize value while staying within weight constraints.",
        tags: ["Dynamic Programming", "Algorithms", "Optimization", "Python"],
        date: "2023",
        readTime: "12 min read",
        link: "blog/knapsack.html"
    },
    {
        id: 5,
        title: "Essential Algorithms: Finding Subsets",
        category: "algo",
        categoryLabel: "Algorithms",
        description: "Finding subsets is a common building block to solving difficult programming challenges. Learn how to find all subsets of a set using bitwise algorithms.",
        tags: ["Algorithms", "Bitwise", "Subsets", "Problem Solving"],
        date: "2023",
        readTime: "7 min read",
        link: "blog/subsets.html"
    },
    {
        id: 6,
        title: "Competitive Programming: Sets",
        category: "python",
        categoryLabel: "Python",
        description: "Sets and lists of unique items are very important for Competitive Programming. Learn how to create and use sets in Python and C++.",
        tags: ["Competitive Programming", "Python", "C++", "Data Structures"],
        date: "2023",
        readTime: "5 min read",
        link: "blog/sets.html"
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderBlogs('all');
    initializeFilterButtons();
    initMobileMenu();
    initNavigation();
});

// ============================================
// RENDER BLOGS
// ============================================

function renderBlogs(filter) {
    const grid = document.getElementById('blogsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? blogs 
        : blogs.filter(b => b.category === filter);

    filtered.forEach((blog, index) => {
        const card = createBlogCard(blog);
        grid.appendChild(card);
        
        // Use requestAnimationFrame to ensure DOM is updated before adding show class
        requestAnimationFrame(() => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 50);
        });
    });
}

function createBlogCard(blog) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.dataset.category = blog.category;

    const tagsHtml = blog.tags
        .map(tag => `<span class="blog-tag">${tag}</span>`)
        .join('');

    card.innerHTML = `
        <div class="blog-header-top">
            <span class="blog-category">${blog.categoryLabel}</span>
            <span class="blog-date">${blog.date}</span>
        </div>
        <div class="blog-content">
            <h3 class="blog-title">${blog.title}</h3>
            <p class="blog-description">${blog.description}</p>
            <div class="blog-tags">${tagsHtml}</div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.85rem; color: var(--color-text-light);">${blog.readTime}</span>
                <a href="${blog.link}" target="_blank" rel="noopener" class="blog-read-link">
                    Read More →
                </a>
            </div>
        </div>
    `;

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

            // Filter blogs
            const filter = btn.dataset.filter;
            renderBlogs(filter);
        });
    });
}

// ============================================
// SHARED FUNCTIONS (from modern.js)
// ============================================

function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPage = window.location.pathname.includes('blog') ? 'blog' : null;

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentPage === 'blog' && link.getAttribute('href') === '#') {
            link.classList.add('active');
        }
    });
}
