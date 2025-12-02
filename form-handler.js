// Form handling for all forms
document.addEventListener('DOMContentLoaded', function() {
    // Handle booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                // Show success message
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
                alertDiv.innerHTML = `
                    <strong>Success!</strong> Your booking has been submitted. We will contact you shortly.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                `;
                this.appendChild(alertDiv);
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    this.reset();
                    alertDiv.remove();
                }, 3000);
            } else {
                // Show error message
                const alertDiv = document.createElement('div');
                alertDiv.className = 'alert alert-danger alert-dismissible fade show mt-3';
                alertDiv.innerHTML = `
                    <strong>Error!</strong> Please fill in all required fields.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                `;
                this.appendChild(alertDiv);
            }
        });
    }

    // Handle itinerary form submission
    const itineraryForm = document.getElementById('itineraryForm');
    if (itineraryForm) {
        itineraryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
            alertDiv.innerHTML = `
                <strong>Thank you!</strong> Your custom itinerary request has been received. We will email it within 24 hours.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            this.appendChild(alertDiv);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                this.reset();
                alertDiv.remove();
            }, 3000);
        });
    }

    // Handle survey form submission
    const surveyForm = document.getElementById('surveyForm');
    if (surveyForm) {
        surveyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success alert-dismissible fade show mt-3';
            alertDiv.innerHTML = `
                <strong>Thank you!</strong> Your survey responses have been recorded.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;
            this.appendChild(alertDiv);
            
            // Reset form after 3 seconds
            setTimeout(() => {
                this.reset();
                alertDiv.remove();
            }, 3000);
        });
    }
});
