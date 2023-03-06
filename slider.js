NodeList.prototype.indexOf = Array.prototype.indexOf;

const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const navButtons = document.querySelectorAll('.slider-indicator');

const leftButton = document.querySelector('.left-btn');
const rightButton = document.querySelector('.right-btn');    

const slideWidth = slides[0].getBoundingClientRect().width;

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

    const currentNavButton = document.getElementsByClassName('current-slide-button')[0];
    const targetNavButton = navButtons[slides.indexOf(targetSlide)];
    currentNavButton.classList.remove('current-slide-button');
    targetNavButton.classList.add('current-slide-button');
}

const moveToNextSlide = (callback) => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;

    if(!nextSlide) {
        nextSlide = track.querySelectorAll('.slider-slide')[0];
    }
    callback(track, currentSlide, nextSlide);
}

const moveToPrevSlide = (callback) => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;

    if(!prevSlide) {
        prevSlide = track.querySelectorAll('.slider-slide')[2];
    }
    callback(track, currentSlide, prevSlide);
}

rightButton.addEventListener('click', e => {
    moveToNextSlide(moveToSlide)
}, false);

leftButton.addEventListener('click', e => {
    moveToPrevSlide(moveToSlide);
}, false);

for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const targetSlide = slides[i];

        moveToSlide(track, currentSlide, targetSlide);
    }, false);
}

moveToNextSlide(moveToSlide);
setInterval(() => moveToNextSlide(moveToSlide), 5000);