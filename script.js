const slides = document.querySelectorAll('.slide'); 
const buttonArrowLeft = document.querySelector('.button_arrow_left'); 
const buttonArrowRight = document.querySelector('.button_arrow_right'); 
let currentIndex = 0; 

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function startAutoSlide() {
    return setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000); // troca a cada 3 segundos
}

showSlide(currentIndex);
let slideInterval = startAutoSlide();

// função para reiniciar o auto-slide quando o usuário interagir
function resetAutoSlide() {
    clearInterval(slideInterval); 
    slideInterval = startAutoSlide();
}

buttonArrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
});

buttonArrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    resetAutoSlide();
});