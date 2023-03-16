const nav = document.querySelector('nav');
const work = document.querySelector('.work-container');

let scrollValue = 0;
window.addEventListener('scroll', () => {
    let width = window.innerWidth;

    if (width > 500) {
        if (scrollValue > window.scrollY) {
            nav.style.transform = 'translateX(0)';
            nav.style.transition = '0.5s';
            if (width > 1080) {
                work.style.width = '80vw';
            } else {
                work.style.width = '70vw';
            }
            work.style.transition = '0.5s'
        } else {
            nav.style.transform = 'translateX(-30vw)';
            nav.style.transition = '0.5s';
            work.style.width = '100vw';
            work.style.transition = '0.5s'
        }
    scrollValue = window.scrollY;
    }
}, false);