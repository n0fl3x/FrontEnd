let images = document.querySelectorAll('.single-slide');
let current = 0;

function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0')
    };
    images[current].classList.remove('opacity0');
};

slider();

function showNext() {
    if (current + 1 == images.length) {
        current = 0;
    } else {
    current++;
    };
    slider();
};

function showPrev() {
    if (current - 1 == -1) {
        current = images.length - 1;
    } else {
    current--;
    };
    slider();
};
