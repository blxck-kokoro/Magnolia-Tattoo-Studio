const images = work.childNodes;
const filter = document.getElementsByClassName('view-filter')[0];
const exitViewModeBtn = filter.firstChild;
let viewMode = false;

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', () => {
        if (viewMode == false) {
            images[i].classList.add('view-mode');
            filter.classList.add('filter');
            exitViewModeBtn.style.display = 'block';
            viewMode = true;
        }
    }, false);
}

filter.addEventListener('click', () => {
    if (viewMode == true) {
        let currentImg = document.querySelector('.view-mode');
        currentImg.classList.remove('view-mode');
        filter.classList.remove('filter');
        exitViewModeBtn.style.display = 'none';
        viewMode = false;
    }
}, false);

exitViewModeBtn.addEventListener('click', () => {
    if (viewMode == true) {
        let currentImg = document.querySelector('.view-mode');
        currentImg.classList.remove('view-mode');
        filter.classList.remove('filter');
        exitViewModeBtn.style.display = 'none';
        viewMode = false;
    }
}, false);