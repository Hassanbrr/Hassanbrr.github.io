// === Bahmandar Tech Portfolio JS (Static Projects version) ===
const translations = {
    fa: {
        companyName: "بهمن‌دار تک",
        navHome: "خانه", navAbout: "درباره ما", navTeam: "تیم", navSkills: "مهارت‌ها", navProjects: "نمونه کارها", navContact: "تماس",
        heroTitle: "ما راه‌حل‌های دیجیتال می‌سازیم",
        heroSub: "تیم دو نفره برنامه‌نویسان دات نت | تبدیل ایده به نرم‌افزار",
        heroCTA: "مشاهده نمونه کارها",
        aboutTitle: "درباره ما",
        aboutDesc1: "شرکت بهمن‌دار تک توسط حسن بهمن‌دار و معراج سیاه تیری، دو مهندس کامپیوتر با مدرک کارشناسی و سابقه درخشان در توسعه نرم‌افزارهای تحت وب با .NET تأسیس شد.",
        aboutDesc2: "ماموریت ما ارائه راهکارهای سفارشی، امن و مقیاس‌پذیر با تمرکز بر معماری تمیز و تجربه کاربری مدرن است.",
        aboutDesc3: "بنیان‌گذاران بیش از ۸ سال تجربه ترکیبی در صنعت فناوری اطلاعات دارند.",
        statYears: "سال تجربه", statProjects: "پروژه موفق", statClients: "مشتری خوشحال",
        teamTitle: "تیم ما",
        member1Name: "حسن بهمن‌دار", member1Role: "بنیان‌گذار و مدیر فنی", member1Bio: "توسعه‌دهنده ارشد دات نت با تمرکز بر معماری نرم‌افزار و سیستم‌های سازمانی.",
        member2Name: "معراج سیاه تیری", member2Role: "هم‌بنیان‌گذار و توسعه‌دهنده ارشد", member2Bio: "متخصص فرانت‌اند و بک‌اند با تجربه در Blazor و طراحی رابط کاربری مدرن.",
        skillsTitle: "مهارت‌های شرکت",
        projectsTitle: "نمونه کارها",
        proj1Title: "سامانه مدیریت محتوا",
        proj1Desc: "CMS سفارشی با ASP.NET Core و Blazor، پنل مدیریت پیشرفته و چندزبانگی.",
        proj2Title: "فروشگاه اینترنتی",
        proj2Desc: "پلتفرم تجارت الکترونیک با سبد خرید، درگاه پرداخت و پنل فروشنده در .NET 8.",
        proj3Title: "داشبورد تحلیلی",
        proj3Desc: "داشبورد مدیریتی با SignalR، نمودارهای زنده و گزارش‌های پویا.",
        contactTitle: "تماس با ما",
        formName: "نام", formEmail: "ایمیل", formMessage: "پیام شما", formSubmit: "ارسال پیام",
        footerText: "© 2025 بهمن‌دار تک | طراحی الهام‌گرفته از هنر ایرانی"
    },
    ar: {
        companyName: "بهمن‌دار تك",
        navHome: "الرئيسية", navAbout: "من نحن", navTeam: "الفريق", navSkills: "المهارات", navProjects: "أعمالنا", navContact: "اتصل بنا",
        heroTitle: "نحن نبني الحلول الرقمية",
        heroSub: "فريق من مبرمجي دوت نت",
        heroCTA: "شاهد أعمالنا",
        aboutTitle: "من نحن",
        aboutDesc1: "تأسست شركة بهمن‌دار تك على يد حسن بهمن‌دار ومعراج سیاه تیری، مهندسَي كمبيوتر ذوي خبرة في تطوير الويب بتقنية دوت نت.",
        aboutDesc2: "مهمتنا تقديم حلول برمجية مخصصة وآمنة وقابلة للتطوير.",
        aboutDesc3: "يحمل المؤسسان شهادة البكالوريوس في هندسة الكمبيوتر، ويتمتعان بخبرة تزيد عن 8 سنوات.",
        statYears: "سنوات الخبرة", statProjects: "مشروع ناجح", statClients: "عميل سعيد",
        teamTitle: "فريقنا",
        member1Name: "حسن بهمن‌دار", member1Role: "مؤسس مشارك ومدير تقني", member1Bio: "مطور دوت نت أول يركز على هندسة البرمجيات والأنظمة المؤسسية.",
        member2Name: "معراج سیاه تیری", member2Role: "مؤسس مشارك ومطور أول", member2Bio: "متخصص في الواجهات الأمامية والخلفية مع خبرة في Blazor.",
        skillsTitle: "مهارات الشركة",
        projectsTitle: "أعمالنا",
        proj1Title: "نظام إدارة المحتوى",
        proj1Desc: "نظام إدارة محتوى مخصص بـ ASP.NET Core و Blazor مع لوحة تحكم متقدمة ودعم متعدد اللغات.",
        proj2Title: "متجر إلكتروني",
        proj2Desc: "منصة تجارة إلكترونية مع سلة شراء وبوابة دفع ولوحة بائع باستخدام .NET 8.",
        proj3Title: "لوحة تحكم تحليلية",
        proj3Desc: "لوحة تحكم إدارية مع SignalR للتقارير المباشرة والرسوم البيانية التفاعلية.",
        contactTitle: "اتصل بنا",
        formName: "الاسم", formEmail: "البريد الإلكتروني", formMessage: "رسالتك", formSubmit: "إرسال",
        footerText: "© 2025 بهمن‌دار تك"
    },
    en: {
        companyName: "Bahmandar Tech",
        navHome: "Home", navAbout: "About", navTeam: "Team", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
        heroTitle: "We Build Digital Solutions",
        heroSub: "A two-person .NET team",
        heroCTA: "View Our Work",
        aboutTitle: "About Us",
        aboutDesc1: "Bahmandar Tech was founded by Hassan Bahmandar and Meraj Siyah Tiri, two computer engineers with BSc degrees and strong background in .NET web development.",
        aboutDesc2: "Our mission is to deliver custom, secure and scalable solutions with clean architecture and modern UX.",
        aboutDesc3: "The founders have over 8 years of combined experience in the IT industry.",
        statYears: "Years Experience", statProjects: "Successful Projects", statClients: "Happy Clients",
        teamTitle: "Our Team",
        member1Name: "Hassan Bahmandar", member1Role: "Co-founder & CTO", member1Bio: "Senior .NET developer focused on software architecture and enterprise systems.",
        member2Name: "Meraj Siyah Tiri", member2Role: "Co-founder & Senior Developer", member2Bio: "Front-end & Back-end specialist with Blazor expertise and modern UI design.",
        skillsTitle: "Company Skills",
        projectsTitle: "Projects",
        proj1Title: "Content Management System",
        proj1Desc: "Custom CMS with ASP.NET Core & Blazor, advanced admin panel and multilingual support.",
        proj2Title: "Online Store",
        proj2Desc: "E-commerce platform with cart, payment gateway, and vendor panel using .NET 8.",
        proj3Title: "Analytics Dashboard",
        proj3Desc: "Management dashboard with SignalR, live charts and dynamic reporting.",
        contactTitle: "Contact Us",
        formName: "Name", formEmail: "Email", formMessage: "Your Message", formSubmit: "Send Message",
        footerText: "© 2025 Bahmandar Tech | Design inspired by Persian art"
    }
};

// Project data for modal
const projectsData = [
    {
        id: 1,
        images: ['proj1-1.png','proj1-2.png','proj1-3.jpg','proj1-4.jpg','proj1-5.jpg'],
        github: "https://github.com/Hassanbrr",
        info: {
            fa: { title: "سامانه مدیریت محتوا", desc: "CMS سفارشی با ASP.NET Core و Blazor، پنل مدیریت پیشرفته و پشتیبانی از چند زبان. شامل ویرایشگر بلادرنگ و مدیریت کاربران.", tech: ["ASP.NET Core","Blazor","SQL Server","EF Core"] },
            ar: { title: "نظام إدارة المحتوى", desc: "نظام إدارة محتوى مخصص بـ ASP.NET Core و Blazor مع لوحة تحكم متقدمة ودعم متعدد اللغات.", tech: ["ASP.NET Core","Blazor","SQL Server","EF Core"] },
            en: { title: "Content Management System", desc: "Custom CMS with ASP.NET Core & Blazor, advanced admin panel and multilingual support.", tech: ["ASP.NET Core","Blazor","SQL Server","EF Core"] }
        }
    },
    {
        id: 2,
        images: ['proj1-1.png','proj1-2.png','proj2-3.jpg','proj2-4.jpg','proj2-5.jpg'],
        github: "https://github.com/Hassanbrr",
        info: {
            fa: { title: "فروشگاه اینترنتی", desc: "فروشگاه کامل با سبد خرید، درگاه پرداخت، پنل فروشنده و مدیریت سفارشات با .NET 8 و معماری تمیز.", tech: [".NET 8","Blazor","Entity Framework","REST API"] },
            ar: { title: "متجر إلكتروني", desc: "متجر كامل مع سلة شراء وبوابة دفع ولوحة تحكم بالتجار وإدارة الطلبات باستخدام .NET 8.", tech: [".NET 8","Blazor","Entity Framework","REST API"] },
            en: { title: "Online Store", desc: "Complete e-commerce with cart, payment gateway, vendor panel and order management using .NET 8.", tech: [".NET 8","Blazor","EF Core","REST API"] }
        }
    },
    {
        id: 3,
        images: ['proj1-1.png','proj1-2.png','proj3-3.jpg','proj3-4.jpg','proj3-5.jpg'],
        github: "https://github.com/Hassanbrr",
        info: {
            fa: { title: "داشبورد تحلیلی", desc: "داشبورد مدیریتی با SignalR برای گزارش‌های زنده، نمودارهای تعاملی و فیلترهای پیشرفته.", tech: ["SignalR","Blazor","SQL Server"] },
            ar: { title: "لوحة تحكم تحليلية", desc: "لوحة تحكم إدارية مع SignalR للتقارير المباشرة والرسوم البيانية التفاعلية.", tech: ["SignalR","Blazor","SQL Server"] },
            en: { title: "Analytics Dashboard", desc: "Management dashboard with SignalR for live reporting, interactive charts and advanced filters.", tech: ["SignalR","Blazor","SQL Server"] }
        }
    }
];

const companySkills = [
    { name: ".NET/C#", level: 90 },
    { name: "ASP.NET Core", level: 85 },
    { name: "Blazor", level: 65, note: true },
    { name: "SQL Server", level: 80 },
    { name: "HTML/CSS", level: 88 },
    { name: "JavaScript", level: 75 },
    { name: "Entity Framework", level: 82 },
    { name: "REST APIs", level: 90 }
];

let currentLang = 'fa';
let currentProjIdx = 0;
let currentImgIdx = 0;

function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.body.className = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang]?.[key]) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang]?.[key]) el.placeholder = translations[lang][key];
    });

    document.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`.flag-btn[data-lang="${lang}"]`).classList.add('active');
    localStorage.setItem('lang', lang);

    renderSkills();
    // Static project buttons text update
    document.querySelectorAll('.detail-btn').forEach(btn => {
        btn.innerHTML = `👁️ ${lang==='fa'?'مشاهده جزئیات':(lang==='ar'?'عرض التفاصيل':'View Details')}`;
    });
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    if (!container) return;
    container.innerHTML = '';
    const noteText = currentLang === 'fa' ? 'متوسط' : (currentLang === 'ar' ? 'متوسط' : 'Intermediate');

    companySkills.forEach(skill => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        card.innerHTML = `
            <h3>${skill.name} ${skill.note ? `<small>(${noteText})</small>` : ''}</h3>
            <div class="skill-bar"><div class="skill-fill" style="width:0%"></div></div>
        `;
        container.appendChild(card);
        setTimeout(() => {
            card.querySelector('.skill-fill').style.width = skill.level + '%';
        }, 80);
    });
}

// Modal functions
function openProject(idx) {
    currentProjIdx = idx;
    currentImgIdx = 0;
    const proj = projectsData[idx];
    const info = proj.info[currentLang];

    document.getElementById('modalTitle').textContent = info.title;
    document.getElementById('modalDesc').textContent = info.desc;
    document.getElementById('modalTech').innerHTML = info.tech.map(t => `<span>${t}</span>`).join('');
    document.getElementById('modalGitHub').href = proj.github;

    updateGalleryImage();
    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
}

function updateGalleryImage() {
    const proj = projectsData[currentProjIdx];
    const gallery = document.getElementById('modalGallery');
    gallery.innerHTML = `<img src="images/${proj.images[currentImgIdx]}" alt="${proj.info[currentLang].title}">`;
    document.getElementById('galleryCounter').textContent = `${currentImgIdx+1} / ${proj.images.length}`;
}

function nextImage() {
    const proj = projectsData[currentProjIdx];
    currentImgIdx = (currentImgIdx + 1) % proj.images.length;
    updateGalleryImage();
}

function prevImage() {
    const proj = projectsData[currentProjIdx];
    currentImgIdx = (currentImgIdx - 1 + proj.images.length) % proj.images.length;
    updateGalleryImage();
}

// Counters
function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        if (!target || counter.classList.contains('counted')) return;
        counter.classList.add('counted');
        let count = 0;
        const speed = target / 80;
        function update() {
            count += speed;
            if (count < target) { counter.textContent = Math.ceil(count); requestAnimationFrame(update); }
            else counter.textContent = target;
        }
        update();
    });
}

// Navbar scroll
function updateNavOnScroll() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(l => l.classList.remove('active'));
    const scrollPos = window.scrollY + 120;
    document.querySelectorAll('section[id]').forEach(sec => {
        const top = sec.offsetTop - 100;
        if (scrollPos >= top && scrollPos < top + sec.offsetHeight) {
            document.querySelector(`.nav-links a[href="#${sec.id}"]`)?.classList.add('active');
        }
    });
}

// Intersection Observer for project cards and skill cards
function observeCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll('.project-card, .skill-card').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
    document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));

    // Flags
    document.querySelectorAll('.flag-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });

    // Attach static detail buttons
    document.querySelectorAll('.project-card .detail-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.project-card');
            const idx = parseInt(card.getAttribute('data-project'), 10);
            if (!isNaN(idx) && idx >= 0 && idx < projectsData.length) {
                openProject(idx);
            }
        });
    });

    // Modal events
    document.getElementById('modalClose').addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    document.getElementById('nextImage').addEventListener('click', nextImage);
    document.getElementById('prevImage').addEventListener('click', prevImage);
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('projectModal').classList.contains('active')) {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        }
    });

    // Init language
    const savedLang = localStorage.getItem('lang') || 'fa';
    applyLanguage(savedLang);
    renderSkills();
    observeCards();

    window.addEventListener('scroll', updateNavOnScroll);
    updateNavOnScroll();

    // Preloader
    window.addEventListener('load', () => {
        setTimeout(() => document.getElementById('preloader').classList.add('fade-out'), 600);
        const aboutSection = document.getElementById('about');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) { animateCounters(); obs.unobserve(aboutSection); } });
        }, { threshold: 0.5 });
        if (aboutSection) obs.observe(aboutSection);
    });
});