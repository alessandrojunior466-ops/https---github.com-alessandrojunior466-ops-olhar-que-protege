const reveals = document.querySelectorAll('.desaparecer');
    function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150
        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {

        }
    }
}

    window.addEventListener('load', revealOnScroll);
    window.addEventListener('scroll', revealOnScroll);