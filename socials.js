// Socials page data and functionality
document.addEventListener('DOMContentLoaded', function() {
    const recentSocialsData = [
        {
            id: 1,
            title: "Golden Anniversary Celebration",
            type: "Anniversary",
            date: "March 15, 2024",
            location: "Sunset Terrace Club",
            guests: 80,
            image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/03/Go-with-a-particular-theme.jpg",
            description: "A beautiful 50th anniversary celebration with family and friends in an elegant garden setting."
        },
        {
            id: 2,
            title: "Sweet 16 Birthday Bash",
            type: "Birthday",
            date: "February 28, 2024",
            location: "Grand Ballroom Hotel",
            guests: 120,
            image: "https://robynsfrenchnest.com/wp-content/uploads/2024/01/Sweet-bar-6-scaled.jpeg",
            description: "A glamorous sweet sixteen party with a Hollywood theme and red carpet entrance."
        },
        {
            id: 3,
            title: "College Graduation Party",
            type: "Graduation",
            date: "January 20, 2024",
            location: "Family Estate",
            guests: 60,
            image: "https://curatedevents.com/wp-content/uploads/2023/01/Graduation-party-crowd-celebrating.jpg",
            description: "An intimate graduation celebration honoring academic achievement with close family and friends."
        },
        {
            id: 4,
            title: "Johnson Family Reunion",
            type: "Family Reunion",
            date: "December 10, 2023",
            location: "Riverside Park Pavilion",
            guests: 150,
            image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800",
            description: "A multi-generational family reunion bringing together relatives from across the country."
        },
        {
            id: 5,
            title: "Holiday Christmas Gala",
            type: "Holiday",
            date: "December 22, 2023",
            location: "Winter Lodge Resort",
            guests: 200,
            image: "https://wp-media-partyslate.imgix.net/2022/08/corporate-holiday-gala_272516-scaled.jpg?auto=compress%2Cformat&ixlib=php-3.3.1",
            description: "A magical Christmas celebration with winter wonderland décor and festive entertainment."
        },
        {
            id: 6,
            title: "New Home Housewarming",
            type: "Housewarming",
            date: "November 18, 2023",
            location: "Private Residence",
            guests: 40,
            image: "https://i.etsystatic.com/15321481/r/il/2c5c3e/2670714964/il_570xN.2670714964_j8p5.jpg",
            description: "An elegant housewarming party showcasing the beautiful new home with garden tours and cocktails."
        }
    ];

    // Render recent social events
    function renderRecentSocials() {
        const container = document.getElementById('recent-socials-grid');
        if (!container) return;

        container.innerHTML = recentSocialsData.map(event => `
            <div class="recent-social-card">
                <div class="recent-social-image" style="background-image: url('${event.image}')">
                    <span class="social-event-type">${event.type}</span>
                </div>
                
                <div class="recent-social-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    
                    <div class="social-details">
                        <div class="social-detail">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>${event.date}</span>
                        </div>
                        <div class="social-detail">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>${event.location}</span>
                        </div>
                        <div class="social-detail">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <span>${event.guests} guests</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Social Event Inquiry Form Handler
    const socialInquiryForm = document.getElementById('socialInquiryForm');
    if (socialInquiryForm) {
        socialInquiryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(socialInquiryForm);
            const socialEventData = {};
            
            for (let [key, value] of formData.entries()) {
                socialEventData[key] = value;
            }
            
            // Store data (in real app, this would go to a server)
            console.log('Social Event Inquiry Data:', socialEventData);
            
            // Store in localStorage for demo purposes
            let socialInquiries = JSON.parse(localStorage.getItem('socialInquiries') || '[]');
            socialEventData.id = Date.now();
            socialEventData.submittedAt = new Date().toISOString();
            socialInquiries.push(socialEventData);
            localStorage.setItem('socialInquiries', JSON.stringify(socialInquiries));
            
            // Show success message
            showNotification('Thank you for your social event inquiry! We will contact you soon to discuss your celebration details.', 'success');
            
            // Reset form
            socialInquiryForm.reset();
        });
    }

    // Initial render
    renderRecentSocials();
});