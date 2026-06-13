/**
 * GUCC Cyber Security Society – Main Script (Professional Build)
 * 
 * Dynamically loads common components (navbar, footer, page-header, event-banner),
 * injects favicon from data.js, renders all dynamic content (events, committee, blogs, etc.),
 * and handles UI interactions (mobile menu, active nav, scroll effects, countdown, stats, contact form).
 * 
 * Edit data.js to update all content – no need to touch this file.
 */

// ==================== DOM CONTENT LOADED ====================
document.addEventListener('DOMContentLoaded', async function() {
    // Ensure data.js is loaded
    if (typeof siteData === 'undefined') {
        console.error('data.js not loaded. Make sure data.js is included before script.js');
        return;
    }

    // Inject favicon dynamically (single source of truth from data.js)
    injectFavicon();

    // Load all common components (navbar, footer, page-header, event-banner)
    await loadCommonComponents();

    // Initialize page-specific content and functionality
    initializePage();

    // Set up mobile menu toggle
    setupMobileMenu();

    // Set active navigation link based on current page
    setActiveNavLink();

    // Initialize scroll effects (navbar background)
    initScrollEffects();

    // Initialize smooth scrolling for anchor links
    initSmoothScroll();

    // Initialize contact form (if on contact page)
    initContactForm();

    // Initialize countdown timer (if on homepage)
    initCountdown();

    // Initialize stats counter animation (if on homepage)
    initStatsCounter();
});

// ==================== FAVICON INJECTION ====================
function injectFavicon() {
    if (!siteData.favicon) return;
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'shortcut icon';
        document.head.appendChild(link);
    }
    link.type = siteData.favicon.type || 'image/png';
    link.href = siteData.favicon.path;
}

// ==================== LOAD COMMON COMPONENTS ====================
async function loadCommonComponents() {
    const components = [
        { selector: '#navbar-placeholder', file: 'navbar.html' },
        { selector: '#footer-placeholder', file: 'footer.html' },
        { selector: '#page-header-placeholder', file: 'page-header.html' },
        { selector: '#event-banner-placeholder', file: 'event-banner.html' }
    ];

    await Promise.all(components.map(async (comp) => {
        const element = document.querySelector(comp.selector);
        if (element) {
            try {
                const response = await fetch(comp.file);
                if (response.ok) {
                    element.innerHTML = await response.text();
                } else {
                    console.warn(`Failed to load ${comp.file}`);
                }
            } catch (error) {
                console.error(`Error loading ${comp.file}:`, error);
            }
        }
    }));

    // Re-setup mobile menu after navbar is loaded
    setupMobileMenu();
}

// ==================== PAGE INITIALIZATION ====================
function initializePage() {
    const currentPage = getCurrentPage();
    
    // Set page header title/subtitle (for inner pages)
    setPageHeader(currentPage);
    
    // Render dynamic content based on page
    switch(currentPage) {
        case 'index':
            renderHomepage();
            break;
        case 'events':
            renderEvents();
            renderEventBanner();
            break;
        case 'blogs':
            renderBlogs();
            break;
        case 'about':
            renderAbout();
            break;
        case 'committee':
            renderCommittee();
            break;
        case 'contact':
            renderContactInfo();
            renderFAQ();
            break;
        default:
            console.warn('Unknown page:', currentPage);
    }
}

// ==================== HELPER: GET CURRENT PAGE ====================
function getCurrentPage() {
    const path = window.location.pathname.split('/').pop();
    if (path === '' || path === '/' || path === 'index.html') return 'index';
    return path.replace('.html', '');
}

// ==================== SET PAGE HEADER (from data.js) ====================
function setPageHeader(page) {
    const titleElement = document.getElementById('page-title');
    const subtitleElement = document.getElementById('page-subtitle');
    
    if (titleElement && subtitleElement && siteData.pageHeaders && siteData.pageHeaders[page]) {
        const headerData = siteData.pageHeaders[page];
        titleElement.textContent = headerData.title;
        // For glitch effect: update data-text attribute
        titleElement.setAttribute('data-text', headerData.title);
        subtitleElement.textContent = headerData.subtitle;
    }
}

// ==================== HOMEPAGE RENDERING ====================
function renderHomepage() {
    // Features grid
    const featuresGrid = document.getElementById('featuresGrid');
    if (featuresGrid && siteData.features) {
        featuresGrid.innerHTML = siteData.features.map((feature, idx) => `
            <div class="feature-card" style="animation-delay: ${idx * 0.1}s">
                <div class="feature-icon"><i class="fas ${feature.icon}"></i></div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `).join('');
    }
    
    // Stats grid
    const statsGrid = document.getElementById('statsGrid');
    if (statsGrid && siteData.stats) {
        statsGrid.innerHTML = siteData.stats.map(stat => `
            <div class="stat-card">
                <span class="stat-number" data-target="${stat.value}">0</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('');
    }
    
    // Activities grid
    const activitiesGrid = document.getElementById('activitiesGrid');
    if (activitiesGrid && siteData.activities) {
        activitiesGrid.innerHTML = siteData.activities.map((activity, idx) => `
            <div class="activity-card" style="animation-delay: ${idx * 0.05}s">
                <div class="activity-icon"><i class="fas ${activity.icon}"></i></div>
                <h3>${activity.title}</h3>
                <p>${activity.description}</p>
            </div>
        `).join('');
    }
}

// ==================== EVENTS PAGE RENDERING (Compact Cards) ====================
function renderEvents() {
    const eventsGrid = document.getElementById('eventsGrid');
    if (!eventsGrid || !siteData.events) return;
    
    eventsGrid.innerHTML = siteData.events.map(event => {
        // Speakers HTML
        const speakersHtml = event.speakers && event.speakers.length > 0
            ? `<div class="event-speakers"><i class="fas fa-users"></i> ${event.speakers.join(', ')}</div>`
            : '';
        
        // Extra info (e.g., "3 Days Intensive")
        const extraHtml = event.extra ? `<div class="event-extra">${event.extra}</div>` : '';
        
        // Location
        const locationHtml = event.location ? `<div class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</div>` : '';
        
        return `
            <div class="event-card-compact">
                <div class="event-header">
                    <span class="event-date-inline">${event.date}</span>
                    <span class="event-badge">${event.badge || ''}</span>
                </div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                ${speakersHtml}
                ${extraHtml}
                ${locationHtml}
            </div>
        `;
    }).join('');
}

// ==================== EVENT BANNER (Upcoming/Running Event) ====================
function renderEventBanner() {
    const bannerContainer = document.getElementById('event-banner-placeholder');
    if (!bannerContainer || !siteData.activeEvent) return;
    
    // Wait a bit for the banner HTML to be loaded
    setTimeout(() => {
        const eventName = document.getElementById('banner-event-name');
        const eventDate = document.getElementById('banner-event-date');
        const eventLocation = document.getElementById('banner-event-location');
        const statusText = document.querySelector('#banner-status .status-text');
        const ctaButton = document.getElementById('banner-cta-button');
        
        if (eventName && siteData.activeEvent.name) eventName.textContent = siteData.activeEvent.name;
        if (eventDate && siteData.activeEvent.date) eventDate.textContent = siteData.activeEvent.date;
        if (eventLocation && siteData.activeEvent.location) eventLocation.textContent = siteData.activeEvent.location;
        if (statusText && siteData.activeEvent.status) {
            statusText.textContent = siteData.activeEvent.status === 'upcoming' ? 'Upcoming Event' : 'Live Now';
        }
        if (ctaButton && siteData.activeEvent.ctaLink) {
            ctaButton.href = siteData.activeEvent.ctaLink;
            if (siteData.activeEvent.ctaText) {
                ctaButton.innerHTML = `${siteData.activeEvent.ctaText} <i class="fas fa-arrow-right"></i>`;
            }
        }
    }, 100);
}

// ==================== BLOGS PAGE RENDERING ====================
function renderBlogs() {
    const blogsGrid = document.getElementById('blogsGrid');
    if (!blogsGrid || !siteData.blogs) return;
    
    blogsGrid.innerHTML = siteData.blogs.map(blog => `
        <div class="blog-card">
            <div class="blog-image">
                <img src="${blog.imageUrl}" alt="${blog.title}">
            </div>
            <div class="blog-content">
                <span class="blog-category">${blog.category}</span>
                <h3>${blog.title}</h3>
                <p>${blog.summary}</p>
                <a href="${blog.readMoreLink}" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `).join('');
}

// ==================== ABOUT PAGE RENDERING ====================
function renderAbout() {
    // Main about content
    const aboutGrid = document.getElementById('aboutGrid');
    if (aboutGrid && siteData.aboutContent) {
        aboutGrid.innerHTML = `
            <div class="about-content">
                <span class="section-tag">${siteData.aboutContent.tag}</span>
                <h2>${siteData.aboutContent.heading}</h2>
                <p>${siteData.aboutContent.description}</p>
                <p>${siteData.aboutContent.description2}</p>
                <ul class="about-list">
                    ${siteData.aboutContent.highlights.map(h => `<li><i class="fas fa-check-circle"></i> ${h}</li>`).join('')}
                </ul>
                <a href="${siteData.aboutContent.buttonUrl}" class="btn btn-primary">${siteData.aboutContent.buttonText} <i class="fas ${siteData.aboutContent.buttonIcon}"></i></a>
            </div>
            <div class="about-image">
                <img src="${siteData.aboutContent.imageUrl}" alt="${siteData.aboutContent.imageAlt}">
            </div>
        `;
    }
    
    // About activities grid
    const aboutActivitiesGrid = document.getElementById('aboutActivitiesGrid');
    if (aboutActivitiesGrid && siteData.activities) {
        aboutActivitiesGrid.innerHTML = siteData.activities.map((activity, idx) => `
            <div class="activity-card" style="animation-delay: ${idx * 0.05}s">
                <div class="activity-icon"><i class="fas ${activity.icon}"></i></div>
                <h3>${activity.title}</h3>
                <p>${activity.description}</p>
            </div>
        `).join('');
    }
}

// ==================== COMMITTEE PAGE RENDERING ====================
function renderCommittee() {
    const container = document.getElementById('committeeContainer');
    if (!container || !siteData.committeeGroups) return;
    
    let html = '';
    siteData.committeeGroups.forEach(group => {
        html += `
            <div class="committee-group">
                <h3 class="group-title"><i class="fas ${group.icon}"></i> ${group.groupName}</h3>
                <div class="committee-grid">
                    ${group.members.map(member => `
                        <div class="member-card">
                            <div class="member-image"><i class="fas fa-user-circle"></i></div>
                            <h4>${member.name}</h4>
                            <p class="member-role">${member.role}</p>
                            ${member.department ? `<p class="member-dept">${member.department}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// ==================== CONTACT PAGE RENDERING ====================
function renderContactInfo() {
    const contactInfoContainer = document.getElementById('contactInfo');
    if (!contactInfoContainer || !siteData.contactInfo) return;
    
    contactInfoContainer.innerHTML = siteData.contactInfo.map(info => `
        <div class="contact-card">
            <i class="fas ${info.icon}"></i>
            <h3>${info.title}</h3>
            <p>${info.details}</p>
        </div>
    `).join('');
    
    // Social links
    if (siteData.socialLinks) {
        const socialHtml = `
            <div class="social-links">
                ${siteData.socialLinks.map(link => `
                    <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.platform}">
                        <i class="${link.icon}"></i>
                    </a>
                `).join('')}
            </div>
        `;
        contactInfoContainer.insertAdjacentHTML('beforeend', socialHtml);
    }
}

function renderFAQ() {
    const faqGrid = document.getElementById('faqGrid');
    if (!faqGrid || !siteData.faq) return;
    
    faqGrid.innerHTML = siteData.faq.map(q => `
        <div class="faq-card">
            <i class="fas ${q.icon}" style="color: var(--primary); font-size: 2rem; margin-bottom: 15px; display: block;"></i>
            <h3>${q.title}</h3>
            <p>${q.answer}</p>
        </div>
    `).join('');
}

// ==================== COUNTDOWN TIMER ====================
function initCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (!daysEl || !siteData.countdownTarget) return;
    
    const targetDate = new Date(siteData.countdownTarget);
    if (isNaN(targetDate.getTime())) return;
    
    function updateCountdown() {
        const now = new Date();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            daysEl.innerText = '00';
            hoursEl.innerText = '00';
            minutesEl.innerText = '00';
            secondsEl.innerText = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (86400000)) / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        
        daysEl.innerText = days.toString().padStart(2, '0');
        hoursEl.innerText = hours.toString().padStart(2, '0');
        minutesEl.innerText = minutes.toString().padStart(2, '0');
        secondsEl.innerText = seconds.toString().padStart(2, '0');
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ==================== STATS COUNTER ANIMATION ====================
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    if (isNaN(target)) return;
                    let current = 0;
                    const increment = target / 50;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.floor(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) observer.observe(statsSection);
}

// ==================== CONTACT FORM HANDLER ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const subject = document.getElementById('subject')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        
        if (!name) { alert('Please enter your name.'); return; }
        if (!email) { alert('Please enter your email.'); return; }
        if (!/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(email)) { alert('Please enter a valid email address.'); return; }
        if (!message) { alert('Please enter your message.'); return; }
        
        // Here you can replace with actual AJAX submission
        alert('Thank you! Your message has been sent. We will get back to you soon.');
        form.reset();
    });
}

// ==================== MOBILE MENU TOGGLE ====================
function setupMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        // Remove existing listener to avoid duplicates
        navToggle.removeEventListener('click', toggleMenu);
        navToggle.addEventListener('click', toggleMenu);
        
        function toggleMenu() {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        }
    }
    
    // Close menu when clicking a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu?.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle?.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
                document.body.style.overflow = '';
            }
        });
    });
}

// ==================== SET ACTIVE NAV LINK ====================
function setActiveNavLink() {
    const currentPage = getCurrentPage();
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==================== SCROLL EFFECTS (Navbar) ====================
function initScrollEffects() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 16, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(5, 5, 16, 0.95)';
            navbar.style.backdropFilter = 'blur(12px)';
        }
    });
}

// ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}
