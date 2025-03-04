const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

document.getElementById('prevBtn').addEventListener('click', () => {
    changeImage(-1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    changeImage(1);
});

// Automatically change image every 5 seconds
setInterval(() => {
    changeImage(1);
}, 5000);

function changeImage(direction) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
}