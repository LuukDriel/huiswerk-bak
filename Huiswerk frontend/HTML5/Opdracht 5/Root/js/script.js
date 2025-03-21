document.addEventListener("DOMContentLoaded", function() {
    const koffieGebieden = document.querySelectorAll('.koffie_gebied');
    koffieGebieden.forEach((element, index) => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = 'opacity 1s';
            element.style.opacity = 1;
        }, index * 500); // Stagger the animation by 500ms for each element
    });
});
