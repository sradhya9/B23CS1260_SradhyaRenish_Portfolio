const projectsData = [
    {
        id: 1,
        title: 'MeatUp',
        description: 'A full-stack cross-platform mobile application that streamlines online meat ordering and delivery. Implemented user authentication, catalog, cart, and responsive UI.',
        image: 'images/proj1.png',
        category: 'mobile',
        tags: ['React Native', 'Node.js', 'Firebase'],
        demoLink: 'https://play.google.com/store/apps/details?id=app.rork.meatup.delivery',
        repoLink: 'https://github.com/sradhya9/KokoMart'
    },
    {
        id: 2,
        title: 'ZYRA',
        description: 'An AI-powered web application that generates responsive website code using structured templates and intelligent prompt processing.',
        image: 'images/proj2.png',
        category: 'web',
        tags: ['React', 'AI', 'Firebase'],
        repoLink: 'https://github.com/sradhya9/zyra-code'
    },
    {
        id: 3,
        title: 'ShareNSplit',
        description: 'A web-based expense sharing application that simplifies group expense management. Integrated bill scanning using OCR.',
        image: 'images/proj3.png',
        category: 'web',
        tags: ['ReactJS', 'OCR', 'Firebase'],
        demoLink: 'https://sharensplit.vercel.app/',
        repoLink: 'https://github.com/sradhya9/ShareNSplit'
    },
    {
        id: 4,
        title: 'Wall-E',
        description: 'IoT-based intelligent server room monitoring system to continuously monitor environmental conditions using ESP32.',
        image: 'images/proj4.png',
        category: 'iot',
        tags: ['IoT', 'ESP32', 'Firebase'],
        demoLink: 'https://server-room-monitoring-project-e.vercel.app/',
        repoLink: 'https://github.com/sradhya9'
    },
    {
        id: 5,
        title: 'MaxProfit',
        description: 'Financial management and profitability analysis platform enabling organizations to monitor revenue, expenses, and overall performance.',
        image: 'images/proj5.png',
        category: 'web',
        tags: ['React.js', 'Python', 'MySQL'],
        repoLink: 'https://github.com/sradhya9/MaxProfit'
    },
    {
        id: 6,
        title: 'StreetSafe',
        description: 'IoT-powered intelligent monitoring system to improve public safety by detecting broken overhead power lines in real-time.',
        image: 'images/proj6.png',
        category: 'iot',
        tags: ['Flutter', 'Machine Learning', 'ESP32'],
        repoLink: 'https://github.com/sradhya9/StreetSafe'
    }
];

const projectsContainer = document.getElementById('projects-container');

// Render projects to DOM using Template Literals and Array map [Requirement B1, B5]
const renderProjects = (projects) => {
    projectsContainer.innerHTML = '';

    projects.forEach(project => {
        const { title, description, image, tags, demoLink, repoLink } = project; // Destructuring

        const tagsHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        const projectCard = `
            <div class="project-card">
                <img src="${image}" alt="${title}" class="project-img">
                <div class="project-content">
                    <h3 class="project-title">${title}</h3>
                    <p class="project-desc">${description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <div class="project-links">
                        ${demoLink ? `
                        <a href="${demoLink}" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                            Live Demo
                        </a>
                        ` : ''}
                        <a href="${repoLink}" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            Code
                        </a>
                    </div>
                </div>
            </div>
        `;

        projectsContainer.insertAdjacentHTML('beforeend', projectCard);
    });
};

// Initial Render
renderProjects(projectsData);

// ==========================================================================
// 2. Interactive UI Behaviors [Requirement B2]
// ==========================================================================

// Behavior 1: Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active to clicked
        e.target.classList.add('active');

        const filterValue = e.target.getAttribute('data-filter');

        if (filterValue === 'all') {
            renderProjects(projectsData);
        } else {
            // Array filter method [Requirement B5]
            const filteredProjects = projectsData.filter(project => project.category === filterValue);
            renderProjects(filteredProjects);
        }
    });
});

// Behavior 2: Mobile Navigation Toggle (Hamburger)
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// ==========================================================================
// 3. Theme Switching & Browser Storage [Requirement B2, B4]
// ==========================================================================
const themeToggleBtn = document.getElementById('theme-toggle');
const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');

// Check localStorage for saved theme [Requirement B4]
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on load
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update DOM
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    } else {
        document.documentElement.removeAttribute('data-theme');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }

    // Save to localStorage [Requirement B4]
    localStorage.setItem('theme', currentTheme);
});

// ==========================================================================
// 4. Form Validation using Regex [Requirement B3]
// ==========================================================================
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formSuccess = document.getElementById('form-success');

// Validation Regex patterns
const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/, // Only letters and spaces, 2-50 chars
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ // Standard email regex
};

const validateField = (input, regex, errorMessage) => {
    const parentGroup = input.parentElement;
    const errorDisplay = parentGroup.querySelector('.error-msg');

    // Trim value
    const value = input.value.trim();

    if (value === '') {
        parentGroup.classList.add('error');
        errorDisplay.innerText = 'This field is required';
        return false;
    }

    if (regex && !regex.test(value)) {
        parentGroup.classList.add('error');
        errorDisplay.innerText = errorMessage;
        return false;
    }

    // Valid input
    parentGroup.classList.remove('error');
    errorDisplay.innerText = '';
    return true;
};

// Real-time validation as user types
nameInput.addEventListener('input', () => {
    validateField(nameInput, patterns.name, 'Name must contain only letters (min 2)');
});

emailInput.addEventListener('input', () => {
    validateField(emailInput, patterns.email, 'Please enter a valid email address');
});

messageInput.addEventListener('input', () => {
    validateField(messageInput, null, ''); // null regex means only required check
});

// Submit Validation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page reload [Requirement B3]

    const isNameValid = validateField(nameInput, patterns.name, 'Name must contain only letters (min 2)');
    const isEmailValid = validateField(emailInput, patterns.email, 'Please enter a valid email address');
    const isMessageValid = validateField(messageInput, null, '');

    if (isNameValid && isEmailValid && isMessageValid) {
        // Simulate form submission
        formSuccess.classList.remove('hidden');
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.classList.add('hidden');
        }, 5000);
    }
});
