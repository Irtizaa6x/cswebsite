/**
 * data.js – Central Content for GUCC Cyber Security Society
 * 
 * This file contains ALL dynamic data for the website.
 * Edit this file to update events, committee members, blogs, stats, FAQs, etc.
 * No need to touch any HTML files for content changes.
 */

const siteData = {
    // ==================== PAGE HEADERS (Titles & Subtitles) ====================
    pageHeaders: {
        events: {
            title: "Our Events",
            subtitle: "Past and upcoming cybersecurity events, workshops, and competitions"
        },
        blogs: {
            title: "Our Blogs",
            subtitle: "Insights, stories, and technical writeups from the world of cybersecurity"
        },
        about: {
            title: "About Us",
            subtitle: "Who we are, what we do, and why cybersecurity matters"
        },
        committee: {
            title: "Executive Committee 2025-2026",
            subtitle: "GUCC Cyber Security Society – Leading the digital defense"
        },
        contact: {
            title: "Contact Us",
            subtitle: "Start the conversation — we're here to help and collaborate"
        }
    },

    // ==================== ACTIVE EVENT (for banner on events page) ====================
    activeEvent: {
        name: "DeenSec CTF 2026",
        date: "June 10, 2026",
        location: "Online + GUCC Campus",
        status: "upcoming",   // "upcoming" or "running"
        ctaLink: "https://forms.google.com/your-registration-form",
        ctaText: "Register Now"
    },

    // ==================== COUNTDOWN TARGET (for homepage) ====================
    // Format: "YYYY-MM-DDTHH:MM:SS" (ISO date string)
    countdownTarget: "2026-06-10T00:00:00",

    // ==================== FEATURES (Homepage) ====================
    features: [
        {
            icon: "fa-laptop-code",
            title: "Hands-on Training",
            description: "Practical sessions on ethical hacking, Linux, and cybersecurity tools."
        },
        {
            icon: "fa-flag-checkered",
            title: "CTF Competitions",
            description: "Regular Capture The Flag challenges to test your skills."
        },
        {
            icon: "fa-users",
            title: "Professional Network",
            description: "Connect with industry experts and build your career."
        }
    ],

    // ==================== STATISTICS (Homepage) ====================
    stats: [
        { label: "Workshops", value: 12 },
        { label: "CTF Events", value: 8 },
        { label: "Active Members", value: 150 },
        { label: "Seminars", value: 6 }
    ],

    // ==================== ACTIVITIES (Homepage & About page) ====================
    activities: [
        {
            icon: "fa-chalkboard-user",
            title: "Workshops & Training",
            description: "Hands-on ethical hacking, Linux, and security tools."
        },
        {
            icon: "fa-microphone-alt",
            title: "Seminars",
            description: "Industry experts share insights on cyber threats."
        },
        {
            icon: "fa-flag-checkered",
            title: "CTF Competitions",
            description: "Regular Capture The Flag challenges – from beginner to advanced."
        },
        {
            icon: "fa-boot",
            title: "Bootcamp",
            description: "Intensive training on penetration testing and defense."
        },
        {
            icon: "fa-handshake",
            title: "Community Support",
            description: "Learn real-world techniques in a collaborative environment."
        },
        {
            icon: "fa-share-alt",
            title: "Knowledge Sharing",
            description: "Member-led tech talks and problem-solving sessions."
        }
    ],

    // ==================== EVENTS (Events page) ====================
    events: [
        {
            title: "DeenSec CTF 2026",
            date: { day: "10", month: "Jun", year: 2026 },
            description: "Intra-University Capture The Flag competition. Test your hacking skills in solo format. Categories: cryptography, forensics, web exploitation, reverse engineering.",
            speakers: [],
            location: "Online / GUCC Campus",
            status: "upcoming",
            badge: "🔥 Upcoming",
            extra: ""
        },
        {
            title: "CyberCamp 2026",
            date: { day: "15", month: "Mar", year: 2026 },
            description: "Hands-on cybersecurity bootcamp. Learn penetration testing, vulnerability assessment, and incident response.",
            speakers: ["Industry Experts"],
            location: "GUCC Campus",
            status: "upcoming",
            badge: "🔥 Upcoming",
            extra: "3 Days Intensive"
        },
        {
            title: "Secure Insight Webinar",
            date: { day: "27", month: "Jun", year: 2026 },
            description: "A Guided Tour Through the Mind of a Hacker – expert speakers share tactics and defense strategies.",
            speakers: ["Papan Saha", "Md. Sadikul Islam"],
            location: "Online",
            status: "upcoming",
            badge: "🔥 Upcoming",
            extra: ""
        },
        {
            title: "CyberQuest 101",
            date: { day: "07", month: "Sep", year: 2026 },
            description: "Hands-on CTF challenges, ethical hacking demos, and career insights. Free workshop kits and certificates.",
            speakers: ["Md Gollam Rabbi"],
            location: "GUCC Campus",
            status: "upcoming",
            badge: "🔥 Upcoming",
            extra: ""
        },
        {
            title: "Secure Coding 101",
            date: { day: "02", month: "Oct", year: 2026 },
            description: "Industry best practices for writing secure and resilient code. Learn vulnerability prevention.",
            speakers: ["Irfanul Montasir"],
            location: "Online",
            status: "upcoming",
            badge: "🔥 Upcoming",
            extra: ""
        },
        {
            title: "SecWrite – Writeup Challenge",
            date: { day: "Ongoing", month: "", year: "" },
            description: "Technical writing competition. Submit research-based writeups on cybersecurity topics. Winners featured on our website.",
            speakers: [],
            location: "Online",
            status: "ongoing",
            badge: "📝 Ongoing",
            extra: "🏆 Prizes & Recognition"
        },
        {
            title: "Eid ul-Fitr CTF Challenge",
            date: { day: "Completed", month: "", year: "" },
            description: "Celebratory CTF challenge where participants found hidden flags in images. Congratulations to our winners!",
            speakers: [],
            location: "Online",
            status: "completed",
            badge: "✅ Completed",
            extra: "Successfully Concluded"
        },
        {
            title: "Blog Writing Competition",
            date: { day: "2025", month: "", year: 2025 },
            description: "Students shared original blogs on cybersecurity trends. Top 3 blogs featured on our official website with certificates and crests.",
            speakers: [],
            location: "Online",
            status: "completed",
            badge: "✅ Completed",
            extra: "🏅 Winners Announced"
        }
    ],

    // ==================== BLOGS (Blogs page) ====================
    blogs: [
        {
            id: 1,
            title: "Cybersecurity Threats to Futuristic AI",
            category: "Artificial Intelligence",
            summary: "Exploring the new battleground of AI-driven cyber threats. How adversarial attacks and model poisoning are reshaping security.",
            imageUrl: "https://placehold.co/400x250/16213e/00d9ff?text=AI+Security",
            readMoreLink: "#"
        },
        {
            id: 2,
            title: "'Zero Trust': New Horizons in Security",
            category: "Security Model",
            summary: "Why traditional perimeter-based security is failing. Learn how Zero Trust architecture works and why it's becoming essential.",
            imageUrl: "https://placehold.co/400x250/16213e/00d9ff?text=Zero+Trust",
            readMoreLink: "#"
        },
        {
            id: 3,
            title: "Know Your Enemy: Understanding Footprinting",
            category: "Ethical Hacking",
            summary: "The first step of any cyber attack – footprinting. Learn how ethical hackers gather intelligence and protect your digital footprint.",
            imageUrl: "https://placehold.co/400x250/16213e/00d9ff?text=Footprinting",
            readMoreLink: "#"
        },
        {
            id: 4,
            title: "CTF 101: Beginner's Guide to Capture The Flag",
            category: "CTF Walkthrough",
            summary: "Essential tools, techniques, and mindset for succeeding in your first CTF competition.",
            imageUrl: "https://placehold.co/400x250/16213e/00d9ff?text=CTF+Tips",
            readMoreLink: "#"
        },
        {
            id: 5,
            title: "Spot the Hook: How to Detect Phishing Emails",
            category: "Awareness",
            summary: "Real-world examples of phishing attacks and how to identify them before it's too late.",
            imageUrl: "https://placehold.co/400x250/16213e/00d9ff?text=Phishing",
            readMoreLink: "#"
        },
        {
            id: 6,
            title: "Basics of Cryptography: From Caesar to AES",
            category: "Cryptography",
            summary: "A gentle introduction to encryption, hashing, and digital signatures.",
            imageUrl: "https://placehold.co/400x250/16213e/00d9ff?text=Crypto",
            readMoreLink: "#"
        }
    ],

    // ==================== ABOUT PAGE CONTENT ====================
    aboutContent: {
        tag: "Who We Are",
        heading: "Empowering the Next Generation of Cyber Defenders",
        description: "<strong>GUCC Cyber Security Society</strong> is a student-led organization dedicated to promoting cybersecurity awareness, ethical hacking skills, and professional development. We bring industry experts to train students through our exclusive bootcamp programs, workshops, and CTF competitions.",
        description2: "Our mission is to create a community where students can learn, practice, and excel in the field of cybersecurity – regardless of their starting level. We believe that a secure digital future begins with educated and empowered defenders.",
        highlights: [
            "Cybersecurity Fundamentals",
            "Defense Mechanisms",
            "CTF Competitions",
            "Strong Community",
            "Career Guidance",
            "Ethical Hacking Skills"
        ],
        buttonText: "Join Our Community",
        buttonUrl: "contact.html",
        buttonIcon: "fa-arrow-right",
        imageUrl: "https://placehold.co/600x450/16213e/00d9ff?text=Cyber+Defenders",
        imageAlt: "Cyber Security Team"
    },

    // ==================== COMMITTEE GROUPS ====================
    committeeGroups: [
        {
            groupName: "Moderator Team",
            icon: "fa-gavel",
            members: [
                { name: "Md. Monirul Islam", role: "Moderator", department: "" },
                { name: "Montaser Abdul Quader", role: "Deputy Moderator", department: "" },
                { name: "Feroza Nazin", role: "Deputy Moderator", department: "" }
            ]
        },
        {
            groupName: "Executive Committee",
            icon: "fa-crown",
            members: [
                { name: "Mahady Hasan Fahim", role: "Chair", department: "" },
                { name: "Md. Robiul Islam", role: "Vice Chair", department: "" },
                { name: "Ashrafun Nahar Arifa", role: "General Secretary", department: "" },
                { name: "Thiaba Rahman Methi", role: "Treasurer", department: "" }
            ]
        },
        {
            groupName: "Secretaries",
            icon: "fa-tasks",
            members: [
                { name: "Nuren Abreshum Anonta", role: "Red Team Secretary", department: "" },
                { name: "Md. Tanvir Hasan Abokash", role: "Organizing Secretary", department: "" },
                { name: "Shoaib", role: "CTF Secretary", department: "" },
                { name: "Abdullah", role: "Blue Team Secretary", department: "" }
            ]
        },
        {
            groupName: "Multimedia Specialists",
            icon: "fa-video",
            members: [
                { name: "Rezanur Rahman Anan", role: "Multimedia Specialist", department: "" },
                { name: "Md. Tarikul Islam Tuhen", role: "Multimedia Specialist", department: "" },
                { name: "Shahta Jarab", role: "Multimedia Specialist", department: "" }
            ]
        },
        {
            groupName: "Executive Members",
            icon: "fa-users",
            members: [
                { name: "Romana Zaman", role: "Executive Member", department: "" },
                { name: "Md. Arman Hossain Rifat", role: "Executive Member", department: "" }
            ]
        }
    ],

    // ==================== CONTACT INFO CARDS ====================
    contactInfo: [
        {
            icon: "fa-map-marker-alt",
            title: "Our Address",
            details: "Green University of Bangladesh<br>Purbachal American City, Kanchan, Rupganj, Narayanganj-1461, Dhaka<br>Bangladesh"
        },
        {
            icon: "fa-envelope",
            title: "Email Us",
            details: "info@gucc.edu.bd<br>cyber@green.edu.bd"
        },
        {
            icon: "fa-phone-alt",
            title: "Call Us",
            details: "+880 1234 567890<br>+880 1234 567891"
        }
    ],

    // ==================== SOCIAL LINKS (for contact page) ====================
    socialLinks: [
        { platform: "Facebook", url: "https://www.facebook.com/share/1SPjmR4Rud/", icon: "fab fa-facebook-f" },
        { platform: "WhatsApp", url: "https://chat.whatsapp.com/HrT836SLXMlDaeKJR9AGmx", icon: "fab fa-whatsapp" },
        { platform: "Messenger", url: "https://m.me/j/AbYb911ubVITnupU/", icon: "fab fa-facebook-messenger" },
        { platform: "Website", url: "https://gucc.green.edu.bd/", icon: "fas fa-globe" },
        { platform: "GitHub", url: "https://github.com/gucc-cyber", icon: "fab fa-github" }
    ],

    // ==================== FAQ (Contact page) ====================
    faq: [
        {
            icon: "fa-question-circle",
            title: "How can I join?",
            answer: "Fill out the membership form during our recruitment drive or contact us via email."
        },
        {
            icon: "fa-calendar-alt",
            title: "When are meetings?",
            answer: "Weekly meetups every Thursday at 4 PM in the CSE department seminar room."
        },
        {
            icon: "fa-laptop-code",
            title: "Do I need prior experience?",
            answer: "Not at all! Beginners are welcome. We have sessions for all skill levels."
        },
        {
            icon: "fa-trophy",
            title: "How do I participate in CTFs?",
            answer: "We announce CTF competitions via social media and email. Just register and join."
        }
    ]
};