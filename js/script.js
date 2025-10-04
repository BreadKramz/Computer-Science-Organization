// JavaScript for CS Org Website

// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// Typing effect for hero
document.addEventListener('DOMContentLoaded', function() {
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        setTimeout(typeWriter, 1000);
    }
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Newsletter form handling
    const newsletterForm = document.querySelector('section.bg-gradient-to-r.from-green-600 form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! You will receive our latest updates.');
                this.reset();
            }
        });
    }

    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Header hide/show on scroll
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Member details modal functionality
    const memberButtons = document.querySelectorAll('.member-details-btn');
    const modal = document.getElementById('member-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    // Member details data
    const memberDetails = {
        balasabas: {
            name: "Balasabas",
            role: "President",
            bio: "Leading the Computer Science Organization with vision and dedication. Expert in strategic planning and team leadership.",
            skills: ["Leadership", "Strategic Planning", "Team Management", "Public Speaking"],
            achievements: ["Led 5+ successful events", "Increased membership by 40%", "Established industry partnerships"]
        },
        teves: {
            name: "Teves",
            role: "Vice President",
            bio: "Operations specialist ensuring smooth execution of all CSO activities. Master of project management and coordination.",
            skills: ["Project Management", "Operations", "Event Planning", "Communication"],
            achievements: ["Managed 10+ tech workshops", "Coordinated hackathons", "Streamlined internal processes"]
        },
        fundador: {
            name: "Fundador",
            role: "External Secretary",
            bio: "Building bridges between the organization and external partners. Expert in networking and relationship management.",
            skills: ["Networking", "Partnership Development", "External Relations", "Negotiation"],
            achievements: ["Secured 3 industry partnerships", "Organized guest speaker series", "Expanded alumni network"]
        },
        millares: {
            name: "Millares",
            role: "Internal Secretary",
            bio: "Managing internal affairs and documentation. Ensuring smooth internal operations and record-keeping.",
            skills: ["Documentation", "Internal Affairs", "Organization", "Data Management"],
            achievements: ["Digitized all organizational records", "Implemented efficient filing system", "Maintained comprehensive member database"]
        },
        cepe: {
            name: "Cepe",
            role: "Treasurer",
            bio: "Financial steward managing the organization's budget and resources with precision and accountability.",
            skills: ["Financial Management", "Budgeting", "Accounting", "Resource Allocation"],
            achievements: ["Optimized budget by 25%", "Implemented digital financial tracking", "Managed 50+ transactions"]
        },
        dinawanao: {
            name: "Dinawanao",
            role: "Auditor",
            bio: "Detail-oriented auditor ensuring financial transparency and compliance with organizational standards.",
            skills: ["Financial Auditing", "Compliance", "Risk Assessment", "Reporting"],
            achievements: ["Conducted 10+ audits", "Identified cost-saving opportunities", "Maintained 100% compliance"]
        },
        dano: {
            name: "Daño",
            role: "PRO",
            bio: "Public relations specialist managing the organization's image and communication with stakeholders.",
            skills: ["Public Relations", "Communication", "Media Relations", "Event Promotion"],
            achievements: ["Increased social media following by 200%", "Organized 15+ media appearances", "Created brand guidelines"]
        },
        tradio: {
            name: "Tradio",
            role: "PRO",
            bio: "Creative communications expert driving engagement and building the organization's public presence.",
            skills: ["Digital Marketing", "Content Creation", "Social Media", "Brand Management"],
            achievements: ["Achieved 500K+ social media impressions", "Created viral content campaigns", "Built community of 10K+ followers"]
        },
        lomente: {
            name: "Lomente",
            role: "1st Representative",
            bio: "Student advocate representing member interests and ensuring student voice is heard in decision-making.",
            skills: ["Student Advocacy", "Leadership", "Communication", "Policy Development"],
            achievements: ["Implemented 5 student initiatives", "Increased student participation by 40%", "Established feedback systems"]
        },
        arteza: {
            name: "Arteza",
            role: "2nd Representative",
            bio: "Dedicated representative bridging the gap between students and organizational leadership.",
            skills: ["Student Representation", "Conflict Resolution", "Community Building", "Event Coordination"],
            achievements: ["Resolved 20+ student concerns", "Organized 8 student forums", "Improved student satisfaction by 35%"]
        },
        nazarino: {
            name: "Nazarino",
            role: "3rd Representative",
            bio: "Passionate advocate for student welfare and organizational transparency.",
            skills: ["Student Welfare", "Transparency", "Project Management", "Team Coordination"],
            achievements: ["Launched 3 welfare programs", "Increased transparency scores", "Coordinated 12+ student projects"]
        },
        villegas: {
            name: "Villegas",
            role: "4th Year Representative",
            bio: "Senior representative bringing years of experience and wisdom to guide the organization and mentor junior members.",
            skills: ["Senior Leadership", "Mentorship", "Strategic Planning", "Experience Sharing"],
            achievements: ["Mentored 25+ students", "Led major organizational initiatives", "Established senior mentorship program"]
        }
    };

    memberButtons.forEach(button => {
        button.addEventListener('click', function() {
            const member = this.getAttribute('data-member');
            const details = memberDetails[member];

            modalTitle.textContent = `${details.name} - ${details.role}`;

            modalContent.innerHTML = `
                <div class="mb-4">
                    <img src="assets/images/${details.name}.png" alt="${details.name}" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-cyan-400 object-cover">
                </div>
                <p class="text-sm mb-4 text-left">${details.bio}</p>
                <div class="text-left mb-4">
                    <h4 class="text-cyan-400 font-semibold mb-2">Skills:</h4>
                    <div class="flex flex-wrap gap-2">
                        ${details.skills.map(skill => `<span class="bg-cyan-900 text-cyan-300 px-2 py-1 rounded text-xs">${skill}</span>`).join('')}
                    </div>
                </div>
                <div class="text-left">
                    <h4 class="text-green-400 font-semibold mb-2">Key Achievements:</h4>
                    <ul class="text-sm space-y-1">
                        ${details.achievements.map(achievement => `<li class="flex items-center"><span class="text-green-400 mr-2">✓</span>${achievement}</li>`).join('')}
                    </ul>
                </div>
            `;

            modal.classList.remove('hidden');
        });
    });

    // Close modal functionality
    closeModal.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // View Full Team functionality
    const viewFullTeamBtn = document.querySelector('section#members .btn-custom');
    const additionalMembers = document.querySelectorAll('.additional-member');

    viewFullTeamBtn.addEventListener('click', function() {
        const isExpanded = additionalMembers[0].classList.contains('hidden');

        if (isExpanded) {
            // Show additional members
            additionalMembers.forEach((member, index) => {
                setTimeout(() => {
                    member.classList.remove('hidden');
                    member.style.animation = 'fadeInUp 0.6s ease-out';
                }, index * 100);
            });
            this.textContent = 'Show Less';
        } else {
            // Hide additional members
            additionalMembers.forEach(member => {
                member.classList.add('hidden');
            });
            this.textContent = 'View Full Team';
        }
    });
});