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

/* ----------------------------------------------Video POP UP--------------------------------------------*/

<script>
// Ouvrir le modal vidéo
document.getElementById('demoBtn').addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('videoIframe');
    // Remplace par l'URL de la vidéo YouTube que tu veux afficher
    iframe.src = "https://www.youtube.com/watch?v=EottUVUXehw"; // Exemple de lien YouTube
    modal.style.display = "flex"; // Afficher le modal
});

// Fermer le modal vidéo
document.getElementById('closeModal').addEventListener('click', function() {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('videoIframe');
    iframe.src = ""; // Supprime l'iframe pour arrêter la vidéo
    modal.style.display = "none"; // Cacher le modal
});

// Fermer le modal si on clique en dehors de la zone de contenu
window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        var iframe = document.getElementById('videoIframe');
        iframe.src = "";
        modal.style.display = "none";
    }
}
</script>
