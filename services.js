// Services page functionality
document.addEventListener('DOMContentLoaded', function() {
    const serviceModal = document.getElementById('serviceModal');
    const closeModal = document.querySelector('.close-modal');
    const serviceForm = document.getElementById('serviceInquiryForm');
    
    // Close modal functionality
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            serviceModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close modal when clicking outside
    if (serviceModal) {
        serviceModal.addEventListener('click', function(e) {
            if (e.target === serviceModal) {
                serviceModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Service form submission
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = new FormData(serviceForm);
            const serviceData = {};
            
            for (let [key, value] of formData.entries()) {
                serviceData[key] = value;
            }
            
            // Store data (in real app, this would go to a server)
            console.log('Service Inquiry Data:', serviceData);
            
            // Store in localStorage for demo purposes
            let serviceInquiries = JSON.parse(localStorage.getItem('serviceInquiries') || '[]');
            serviceData.id = Date.now();
            serviceData.submittedAt = new Date().toISOString();
            serviceInquiries.push(serviceData);
            localStorage.setItem('serviceInquiries', JSON.stringify(serviceInquiries));
            
            // Show success message
            showNotification('Thank you for your service inquiry! We will contact you soon with a detailed quote.', 'success');
            
            // Reset form and close modal
            serviceForm.reset();
            serviceModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
            serviceModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});

// Open service inquiry modal
function openServiceInquiry(serviceType) {
    const serviceModal = document.getElementById('serviceModal');
    const serviceTypeInput = document.getElementById('serviceType');
    
    if (serviceModal && serviceTypeInput) {
        serviceTypeInput.value = serviceType;
        serviceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}