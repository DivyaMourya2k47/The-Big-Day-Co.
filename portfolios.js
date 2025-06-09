// Portfolios page data and functionality
document.addEventListener('DOMContentLoaded', function() {
    const portfolioData = [
        {
            id: 1,
            title: "Enchanted Garden Wedding",
            category: "wedding",
            description: "A breathtaking outdoor wedding with lush garden landscapes and elegant floral arrangements.",
            image: "https://www.happywedding.app/blog/wp-content/uploads/2020/04/Wedding-Lighting-Idea.jpg",
            date: "June 15, 2023",
            budget: "$75,000",
            client: "Sarah & Michael Thompson",
            venue: "Beverly Hills Garden Estate",
            guests: 150,
            highlights: [
                "Custom floral archway with over 500 white roses",
                "Elegant outdoor ceremony with garden backdrop",
                "Reception under twinkling string lights",
                "Live jazz quartet for ceremony and cocktail hour",
                "Gourmet farm-to-table dining experience"
            ]
        },
        {
            id: 2,
            title: "Corporate Innovation Summit",
            category: "corporate",
            description: "A high-profile technology conference featuring industry leaders and innovation showcases.",
            image: "https://db2qe5a14kw0j.cloudfront.net/wp-content/uploads/sites/85/2024/08/14094515/53602865615_4c65c0621d_k.jpg",
            date: "September 20, 2023",
            budget: "$120,000",
            client: "TechCorp Industries",
            venue: "Silicon Valley Convention Center",
            guests: 500,
            highlights: [
                "Multi-stage conference setup",
                "Interactive technology demonstrations",
                "Networking lounges with modern décor",
                "Professional lighting and AV systems",
                "Gourmet catering and cocktail reception"
            ]
        },
        {
            id: 3,
            title: "Golden Anniversary Celebration",
            category: "social",
            description: "An intimate 50th anniversary celebration honoring decades of love and commitment.",
            image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/03/Go-with-a-particular-theme.jpg",
            date: "August 12, 2023",
            budget: "$25,000",
            client: "Robert & Elizabeth Johnson",
            venue: "Sunset Terrace Club",
            guests: 80,
            highlights: [
                "Vintage-themed décor with gold accents",
                "Memory lane photo displays",
                "Live string quartet performance",
                "Custom anniversary cake design",
                "Intimate dinner with family and friends"
            ]
        },
        {
            id: 4,
            title: "Luxury Rooftop Gala",
            category: "luxury",
            description: "An exclusive charity gala featuring panoramic city views and premium entertainment.",
            image: "https://www.therooftopguide.com/rooftop-news/Bilder/Romantic-SeenBangkok-1.jpg",
            date: "October 5, 2023",
            budget: "$200,000",
            client: "Children's Hope Foundation",
            venue: "Downtown Skyline Hotel",
            guests: 300,
            highlights: [
                "Panoramic city skyline backdrop",
                "Celebrity guest appearances",
                "Silent auction with luxury items",
                "Premium champagne and caviar service",
                "Professional entertainment and live band"
            ]
        },
        {
            id: 5,
            title: "Winter Wonderland Wedding",
            category: "wedding",
            description: "A magical winter ceremony with snow-inspired décor and cozy mountain lodge atmosphere.",
            image: "https://wp-media-partyslate.imgix.net/2022/10/winter-wedding-at-the-waterfront-beach-resort-a-hilton-hotel_1712817-scaled.jpg?auto=compress%2Cformat&fit=scale&h=841&ixlib=php-3.3.1&w=1260&wpsize=huge",
            date: "December 20, 2023",
            budget: "$85,000",
            client: "Emma & James Wilson",
            venue: "Mountain Lodge Resort",
            guests: 120,
            highlights: [
                "Snow-white floral arrangements",
                "Cozy fireplace ceremony backdrop",
                "Winter-themed cocktail hour",
                "Hot chocolate and s'mores station",
                "Rustic elegant reception décor"
            ]
        },
        {
            id: 6,
            title: "Product Launch Spectacular",
            category: "corporate",
            description: "An innovative product launch event with interactive displays and immersive experiences.",
            image: "https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/661f6111486dd7b78954b200_product-launch-events-management-service.png",
            date: "November 8, 2023",
            budget: "$95,000",
            client: "Innovation Labs Inc.",
            venue: "Modern Art Gallery",
            guests: 250,
            highlights: [
                "Interactive product demonstration zones",
                "Immersive brand experience areas",
                "Professional photography and videography",
                "Influencer and media coordination",
                "Premium networking reception"
            ]
        },
        {
            id: 7,
            title: "Milestone Birthday Celebration",
            category: "social",
            description: "A sophisticated 50th birthday party with elegant décor and personalized touches.",
            image: "https://tickets.kidzania.qa/images/bd13.webp",
            date: "July 22, 2023",
            budget: "$35,000",
            client: "Patricia Martinez",
            venue: "Private Estate",
            guests: 100,
            highlights: [
                "Personalized party favors and décor",
                "Live jazz band performance",
                "Gourmet dinner and cocktail service",
                "Photo booth with custom backdrop",
                "Surprise video messages from friends"
            ]
        },
        {
            id: 8,
            title: "Exclusive VIP Gala",
            category: "luxury",
            description: "An ultra-exclusive gala event for high-profile clients with luxury amenities.",
            image: "https://media.licdn.com/dms/image/v2/C5112AQGgQ5cSVi-Ong/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520219786460?e=2147483647&v=beta&t=l9dxN1rCSsG-WASeXuznDILXH-SWulhQmlXvPnJy_3E",
            date: "May 15, 2023",
            budget: "$300,000",
            client: "Elite Society Foundation",
            venue: "Grand Ballroom Hotel",
            guests: 200,
            highlights: [
                "Red carpet entrance with paparazzi",
                "Michelin-star chef catering",
                "Premium wine and champagne selection",
                "Live orchestra performance",
                "Luxury gift bags for all guests"
            ]
        }
    ];

    // Render portfolio items
    function renderPortfolio(items = portfolioData) {
        const container = document.getElementById('portfolio-grid');
        if (!container) return;

        container.innerHTML = items.map(item => `
            <div class="portfolio-item filter-item" data-category="${item.category}" onclick="openPortfolioModal(${item.id})">
                <div class="portfolio-image" style="background-image: url('${item.image}')">
                    <span class="portfolio-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                    <div class="portfolio-overlay">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
                
                <div class="portfolio-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="portfolio-meta">
                        <span class="portfolio-date">${item.date}</span>
                        <span class="portfolio-budget">${item.budget}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Portfolio modal functionality
    function openPortfolioModal(itemId) {
        const item = portfolioData.find(p => p.id === itemId);
        if (!item) return;

        const modal = document.getElementById('portfolioModal');
        const modalBody = document.getElementById('modalBody');
        
        if (modal && modalBody) {
            modalBody.innerHTML = `
                <div class="modal-portfolio-content">
                    <div class="modal-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    
                    <div class="modal-info">
                        <div class="project-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
                        <h2>${item.title}</h2>
                        <p class="project-description">${item.description}</p>
                        
                        <div class="project-details">
                            <div class="detail-item">
                                <span class="detail-label">Client:</span>
                                <span class="detail-value">${item.client}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Date:</span>
                                <span class="detail-value">${item.date}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Venue:</span>
                                <span class="detail-value">${item.venue}</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Guests:</span>
                                <span class="detail-value">${item.guests} attendees</span>
                            </div>
                            <div class="detail-item">
                                <span class="detail-label">Budget:</span>
                                <span class="detail-value">${item.budget}</span>
                            </div>
                        </div>
                        
                        <div class="project-highlights">
                            <h4>Project Highlights</h4>
                            <ul>
                                ${item.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Make function globally available
    window.openPortfolioModal = openPortfolioModal;

    // Close modal functionality
    const modal = document.getElementById('portfolioModal');
    const closeModal = document.querySelector('.close-modal');
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.dataset.filter;
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            let filteredItems = portfolioData;
            if (filter !== 'all') {
                filteredItems = portfolioData.filter(item => item.category === filter);
            }
            
            renderPortfolio(filteredItems);
        });
    });

    // Initial render
    renderPortfolio();
});