const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function () {
    moveCarousel(20);
});

btnLeft.addEventListener('click', function () {
    moveCarousel(-20);
});

function moveCarousel(amount) {
    pixels += amount;
    elements.style.transition = 'transform 0.3s ease-in-out';
    elements.style.transform = `translateX(${pixels}px)`;

    const elementWidth = elements.scrollWidth;
    const visibleWidth = document.querySelector('.items').clientWidth;

    if (pixels > visibleWidth) {
        // Reposiciona o elemento que está saindo para o início do carrossel
        elements.style.transition = 'transform 0s';
        pixels = -elementWidth + amount;
        elements.style.transform = `translateX(${pixels}px)`;
    } else if (pixels < -elementWidth) {
        // Reposiciona o elemento que está saindo para o final do carrossel
        elements.style.transition = 'transform 0s';
        pixels = visibleWidth - amount;
        elements.style.transform = `translateX(${pixels}px)`;
    }

    setTimeout(() => {
        elements.style.transition = 'transform 0.3s ease-in-out';
    }, 50);
}




