// Main JavaScript for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize modals with background images
    const modalImages = {
        'palawanModal': 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'boracayModal': 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        'cebuModal': 'https://images.unsplash.com/photo-1552465011-b4e30bf7349d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        // Add more modal images as needed
    };

    // Set modal background images
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('show.bs.modal', function (e) {
            const modalId = e.target.id;
            if (modalImages[modalId]) {
                const modalHeader = e.target.querySelector('.modal-header');
                if (modalHeader) {
                    modalHeader.style.backgroundImage = `url(${modalImages[modalId]})`;
                }
            }
        });
    });

    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            document.querySelectorAll('.testimonial-dot').forEach(dot => dot.classList.remove('active'));
            
            testimonials[index].classList.add('active');
            if (document.querySelectorAll('.testimonial-dot')[index]) {
                document.querySelectorAll('.testimonial-dot')[index].classList.add('active');
            }
            currentTestimonial = index;
        }

        document.querySelectorAll('.testimonial-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => showTestimonial(index));
        });

        // Auto-rotate testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
});
