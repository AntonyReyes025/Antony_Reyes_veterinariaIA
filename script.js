document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (name && emailRegex.test(email) && message) {
            const modal = new bootstrap.Modal(document.getElementById('successModal'));
            modal.show();
            form.reset();
            
            // Simulación de envío asíncrono
            setTimeout(() => {
                console.log('Mensaje enviado:', { name, email, message });
            }, 1000);
        } else {
            alert('Por favor, completa todos los campos correctamente');
        }
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Animación de entrada para cards
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});