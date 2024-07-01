window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.scrollY;


//Animation compteurs
const counters = document.querySelectorAll(".number");

counters.forEach((counter) => {
    counter.innerText = "0";
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 200; // Ajustez la vitesse d'incrémentation si nécessaire
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 10); // Ajustez l'intervalle de mise à jour si nécessaire
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});
