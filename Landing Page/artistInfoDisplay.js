const artistPortrait = document.querySelectorAll('.artist-portrait');

function displayArtistInfo() {
    if (this.parentNode.classList.contains('artist-odd')) {
        this.style.transform = 'translateX(1rem)'  
    } else if (this.parentNode.classList.contains('artist-even')) {
        this.style.transform = 'translateX(-1rem)'
    }
    this.style.transition = '0.5s'
    this.firstChild.style.opacity = '0.7';
    this.firstChild.style.transition = '0.5s';
}

function hideArtistInfo() {
    if (this.parentNode.classList.contains('artist-odd')) {
        this.style.transform = 'translateX(-1rem)'  
    } else if (this.parentNode.classList.contains('artist-even')) {
        this.style.transform = 'translateX(1rem)'
    }
    this.style.transition = '0.5s'
    this.firstChild.style.opacity = '0';
    this.firstChild.style.transition = '0.5s';
}

for (let i = 0; i < artistPortrait.length; i++) {
    artistPortrait[i].addEventListener('mouseover', displayArtistInfo, false);
    artistPortrait[i].addEventListener('mouseout', hideArtistInfo, false)
    artistPortrait[i].addEventListener('click', displayArtistInfo, false);
};