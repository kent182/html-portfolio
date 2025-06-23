
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');
let currentIndex = 0;
let autoSlide;

slides.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
        resetAutoplay();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateSlider(){
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () =>{
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
    resetAutoplay();
});

prevBtn.addEventListener('click', () =>{
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
    resetAutoplay();
});

let startX = 0;
track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
track.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextBtn.click();
    else if (endX -startX > 50) prevBtn.click();
});

function startAutoplay(){
    autoSlide = setInterval(() => {
        nextBtn.click();
    }, 4000);
}

function resetAutoplay(){
    clearInterval(autoSlide);
    startAutoplay();
}

startAutoplay();
