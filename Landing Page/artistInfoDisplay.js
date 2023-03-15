const artistPortrait = document.querySelectorAll('.artist-portrait');
const artistPortraitContent = document.querySelectorAll('.artist-portrait-content');

for (let i = 0; i < artistPortrait .length; i++) {
    artistPortrait [i].addEventListener('mouseover', () => {
        if (artistPortrait[i].parentNode.classList.contains('artist-odd')) {
            artistPortrait[i].style.transform = 'translateX(1rem)'  
        } else if (artistPortrait[i].parentNode.classList.contains('artist-even')) {
            artistPortrait[i].style.transform = 'translateX(-1rem)'
        }
        artistPortrait[i].style.transition = '0.5s'
        artistPortraitContent[i].style.opacity = '0.7';
        artistPortraitContent[i].style.transition = '0.5s';
    }, false)

    artistPortrait [i].addEventListener('mouseout', () => {
        if (artistPortrait[i].parentNode.classList.contains('artist-odd')) {
            artistPortrait[i].style.transform = 'translateX(-1rem)'  
        } else if (artistPortrait[i].parentNode.classList.contains('artist-even')) {
            artistPortrait[i].style.transform = 'translateX(1rem)'
        }
        artistPortrait[i].style.transition = '0.5s'
        artistPortraitContent[i].style.opacity = '0';
        artistPortraitContent[i].style.transition = '0.5s';
    }, false)
};