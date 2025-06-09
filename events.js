// Events page data and functionality
document.addEventListener('DOMContentLoaded', function() {
    const eventsData = {
        upcoming: [
            {
                id: 1,
                title: "Elegant Garden Wedding",
                category: "wedding",
                date: "June 15, 2024",
                time: "4:00 PM",
                location: "Beverly Hills Garden Estate",
                guests: 150,
                image: "https://www.happywedding.app/blog/wp-content/uploads/2020/04/Wedding-Lighting-Idea.jpg",
                description: "A romantic outdoor ceremony with lush garden backdrop and elegant reception."
            },
            {
                id: 2,
                title: "Corporate Gala Night",
                category: "corporate",
                date: "July 8, 2024",
                time: "7:00 PM",
                location: "Downtown Convention Center",
                guests: 300,
                image: "https://www.shutterstock.com/image-photo/christmas-lights-decorations-party-event-600nw-757904983.jpg",
                description: "Annual corporate celebration with awards ceremony and networking."
            },
            {
                id: 3,
                title: "Golden Anniversary Celebration",
                category: "anniversary",
                date: "August 12, 2024",
                time: "2:00 PM",
                location: "Sunset Terrace Club",
                guests: 80,
                image: "https://www.oyorooms.com/blog/wp-content/uploads/2018/03/Go-with-a-particular-theme.jpg",
                description: "50th anniversary celebration with family and friends in an intimate setting."
            },
            {
                id: 4,
                title: "Charity Fundraising Dinner",
                category: "social",
                date: "September 5, 2024",
                time: "6:30 PM",
                location: "Grand Ballroom Hotel",
                guests: 200,
                image: "https://s17585.pcdn.co/wp-content/uploads/2018/10/crystalclear_fb.jpg",
                description: "Elegant dinner event to raise funds for local children's charities."
            },
            {
                id: 5,
                title: "Tech Innovation Summit",
                category: "corporate",
                date: "October 15, 2024",
                time: "9:00 AM",
                location: "Silicon Valley Conference Center",
                guests: 500,
                image: "https://www.amchamchina.org/wp-content/uploads/2022/10/AAA_4631small-scaled.jpg",
                description: "Annual technology conference featuring industry leaders and innovation showcases."
            },
            {
                id: 6,
                title: "Autumn Wedding Celebration",
                category: "wedding",
                date: "November 20, 2024",
                time: "5:00 PM",
                location: "Countryside Manor",
                guests: 120,
                image: "https://thegardensofcastlerock.com/wp-content/uploads/2021/05/Becca-John-at-The-Gardens-Enchanting-MN-Fall-Wedding-16.jpg",
                description: "Rustic autumn wedding with warm colors and cozy outdoor reception."
            }
        ],
        
        past: [
            {
                id: 7,
                title: "Winter Wonderland Wedding",
                category: "wedding",
                date: "December 20, 2023",
                location: "Mountain Lodge Resort",
                guests: 120,
                rating: 5,
                testimonial: "Absolutely magical! Every detail was perfect and exceeded our expectations.",
                client: "Sarah & Michael Thompson",
                image: "https://wp-media-partyslate.imgix.net/2022/10/winter-wedding-at-the-waterfront-beach-resort-a-hilton-hotel_1712817-scaled.jpg?auto=compress%2Cformat&fit=scale&h=841&ixlib=php-3.3.1&w=1260&wpsize=huge"
            },
            {
                id: 8,
                title: "Tech Conference 2023",
                category: "corporate",
                date: "November 15, 2023",
                location: "Silicon Valley Center",
                guests: 500,
                rating: 5,
                testimonial: "Flawless execution and incredible attention to detail. Our attendees were impressed!",
                client: "TechCorp Industries",
                image: "https://www.eventbookings.com/upload/orgs/4f478e4e610aeab97811c3b42745c04a/34e28abcb46bb03ba78eed1c6efc240b/events/407f936e-3591-4201-bb68-9927906a2d92.jpg?q=100&s=bb5fb094d0bfdf8a63410d52948d4246"
            },
            {
                id: 9,
                title: "Diamond Anniversary Gala",
                category: "anniversary",
                date: "October 10, 2023",
                location: "Grand Ballroom Hotel",
                guests: 200,
                rating: 5,
                testimonial: "A truly memorable celebration of 60 years of love. Thank you for making it special!",
                client: "Robert & Elizabeth Johnson",
                image: "https://www.portlandsocietypage.com/wp-content/uploads/2018/04/Bridlemile.60th.2018-DeSomer-108.jpg"
            },
            {
                id: 10,
                title: "Charity Auction Evening",
                category: "social",
                date: "September 25, 2023",
                location: "Riverside Convention Center",
                guests: 300,
                rating: 5,
                testimonial: "Exceeded our fundraising goals thanks to the amazing organization and atmosphere!",
                client: "Children's Hope Foundation",
                image: "https://www.sovereignartfoundation.com/wp-content/uploads/2024/03/TZ8_2727-scaled.jpg"
            }
        ]
    };

    // Render upcoming events
    function renderUpcomingEvents(events = eventsData.upcoming) {
        const container = document.getElementById('events-grid');
        if (!container) return;

        container.innerHTML = events.map(event => `
            <div class="event-card" data-category="${event.category}">
                <div class="event-image" style="background-image: url('${event.image}')">
                    <span class="event-category">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                </div>
                
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                    
                    <div class="event-details">
                        <div class="event-detail">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                            <span>${event.date}</span>
                        </div>
                        <div class="event-detail">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="12" r="10"/>
                                <polyline points="12,6 12,12 16,14"/>
                            </svg>
                            <span>${event.time}</span>
                        </div>
                        <div class="event-detail">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                <circle cx="12" cy="10" r="3"/>
                            </svg>
                            <span>${event.location}</span>
                        </div>
                        <div class="event-detail">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                            </svg>
                            <span>${event.guests} guests</span>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary event-button" onclick="learnMore(${event.id})">
                        Learn More
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Render past events
    function renderPastEvents() {
        const container = document.getElementById('past-events-grid');
        if (!container) return;

        container.innerHTML = eventsData.past.map(event => `
            <div class="past-event-card">
                <div class="past-event-content">
                    <div class="past-event-image" style="background-image: url('${event.image}')"></div>
                    <div class="past-event-info">
                        <div class="past-event-header">
                            <span class="past-event-category">${event.category.charAt(0).toUpperCase() + event.category.slice(1)}</span>
                            <div class="rating">
                                ${Array(event.rating).fill().map(() => `
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                `).join('')}
                            </div>
                        </div>
                        
                        <h3>${event.title}</h3>
                        
                        <div class="past-event-details">
                            <div class="past-event-detail">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                <span>${event.date}</span>
                            </div>
                            <div class="past-event-detail">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span>${event.location}</span>
                            </div>
                            <div class="past-event-detail">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                                </svg>
                                <span>${event.guests} guests</span>
                            </div>
                        </div>
                        
                        <p class="testimonial">"${event.testimonial}"</p>
                        <p class="client-name">- ${event.client}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Filter functionality
    const filterSelect = document.getElementById('event-filter');
    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            const selectedCategory = this.value;
            let filteredEvents = eventsData.upcoming;
            
            if (selectedCategory !== 'all') {
                filteredEvents = eventsData.upcoming.filter(event => event.category === selectedCategory);
            }
            
            renderUpcomingEvents(filteredEvents);
        });
    }

    // Initial render
    renderUpcomingEvents();
    renderPastEvents();
});

// Learn more function
function learnMore(eventId) {
    showNotification(`Thank you for your interest! We'll contact you with more details about event #${eventId}.`, 'success');
}