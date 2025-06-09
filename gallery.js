// Gallery page data and functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryData = [
        {
            id: 1,
            title: "Elegant Garden Wedding",
            category: "wedding",
            description: "A romantic outdoor ceremony with lush garden backdrop",
            image: "https://www.happywedding.app/blog/wp-content/uploads/2020/04/Wedding-Lighting-Idea.jpg"
        },
        {
            id: 2,
            title: "Corporate Gala Night",
            category: "corporate",
            description: "Annual corporate celebration with awards ceremony",
            image: "https://www.shutterstock.com/image-photo/christmas-lights-decorations-party-event-600nw-757904983.jpg"
        },
        {
            id: 3,
            title: "Golden Anniversary Celebration",
            category: "anniversary",
            description: "50th anniversary celebration with family and friends",
            image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/03/Go-with-a-particular-theme.jpg"
        },
        {
            id: 4,
            title: "Sweet 16 Birthday Party",
            category: "birthday",
            description: "Glamorous sweet sixteen with Hollywood theme",
            image: "https://robynsfrenchnest.com/wp-content/uploads/2024/01/Sweet-bar-6-scaled.jpeg"
        },
        {
            id: 5,
            title: "Tech Innovation Summit",
            category: "corporate",
            description: "Technology conference with industry leaders",
            image: "https://www.amchamchina.org/wp-content/uploads/2022/10/AAA_4631small-scaled.jpg"
        },
        {
            id: 6,
            title: "Autumn Wedding Reception",
            category: "wedding",
            description: "Rustic autumn wedding with warm colors",
            image: "https://thegardensofcastlerock.com/wp-content/uploads/2021/05/Becca-John-at-The-Gardens-Enchanting-MN-Fall-Wedding-16.jpg"
        },
        {
            id: 7,
            title: "Charity Fundraising Dinner",
            category: "social",
            description: "Elegant dinner event for children's charities",
            image: "https://s17585.pcdn.co/wp-content/uploads/2018/10/crystalclear_fb.jpg"
        },
        {
            id: 8,
            title: "Diamond Anniversary Gala",
            category: "anniversary",
            description: "60 years of love celebration",
            image: "https://www.portlandsocietypage.com/wp-content/uploads/2018/04/Bridlemile.60th.2018-DeSomer-108.jpg"
        },
        {
            id: 9,
            title: "Milestone Birthday Celebration",
            category: "birthday",
            description: "50th birthday party with close friends",
            image: "https://tickets.kidzania.qa/images/bd13.webp"
        },
        {
            id: 10,
            title: "Winter Wonderland Wedding",
            category: "wedding",
            description: "Magical winter ceremony at mountain lodge",
            image: "https://wp-media-partyslate.imgix.net/2022/10/winter-wedding-at-the-waterfront-beach-resort-a-hilton-hotel_1712817-scaled.jpg?auto=compress%2Cformat&fit=scale&h=841&ixlib=php-3.3.1&w=1260&wpsize=huge"
        },
        {
            id: 11,
            title: "Product Launch Event",
            category: "corporate",
            description: "Exclusive product unveiling for VIP clients",
            image: "https://cdn.prod.website-files.com/64ad227a3e66387fc5d89320/661f6111486dd7b78954b200_product-launch-events-management-service.png"
        },
        {
            id: 12,
            title: "Family Reunion Picnic",
            category: "social",
            description: "Multi-generational family gathering",
            image: "https://www.adventurebook.com/connect/wp-content/uploads/sites/2/2023/04/family-picnic.jpg"
        }
    ];

    // Render gallery items
    function renderGallery(items = galleryData) {
        const container = document.getElementById('gallery-grid');
        if (!container) return;

        container.innerHTML = items.map(item => `
            <div class="gallery-item filter-item" data-category="${item.category}" data-title="${item.title}" data-description="${item.description}">
                <span class="gallery-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                <img src="${item.image}" alt="${item.title}">
                <div class="gallery-overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');

        // Add click event listeners to gallery items
        const galleryItems = container.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const title = this.dataset.title;
                const description = this.dataset.description;
                
                openLightbox(img.src, img.alt, title, description);
            });
        });
    }

    // Lightbox functionality
    function openLightbox(src, alt, title, description) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxDesc = document.getElementById('lightbox-desc');
        
        if (lightbox && lightboxImg && lightboxTitle && lightboxDesc) {
            lightboxImg.src = src;
            lightboxImg.alt = alt;
            lightboxTitle.textContent = title;
            lightboxDesc.textContent = description;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Close lightbox event listeners
    const closeLightboxBtn = document.getElementById('close-lightbox');
    const lightbox = document.getElementById('lightbox');
    
    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Escape key to close lightbox
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
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
            let filteredItems = galleryData;
            if (filter !== 'all') {
                filteredItems = galleryData.filter(item => item.category === filter);
            }
            
            renderGallery(filteredItems);
        });
    });

    // Initial render
    renderGallery();
});