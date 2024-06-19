window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;

// Changez le fond et la couleur du texte en fonction de la position de défilement
    if (scrollPosition > 100) {
        hero.style.backgroundColor = '#892FFF'; // Changez la couleur de fond
        hero.style.color = '#fff'; // Changez la couleur du texte
        localStorage.color = '#F2FF46'
    } else {
        hero.style.backgroundColor = 'transparent';
        hero.style.color = '#000';
        }

// Ajoutez des animations aux images
    const images = document.querySelectorAll('.product-card img');
        images.forEach((img, index) => {
            img.style.transition = `transform 0.5s ease ${index * 0.1}s`;
            img.style.transform = 'translateY(0)'; // Effet de flottement initial
    });
});

