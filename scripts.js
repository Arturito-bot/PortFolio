document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]'); // Sélectionne tous les liens dont l'href commence par "#"

    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.getAttribute('href') !== '#') { // Exclut les liens "#" vides
                event.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 60, // Ajuste si nécessaire
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

