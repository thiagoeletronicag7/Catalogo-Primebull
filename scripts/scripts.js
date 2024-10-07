const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
let currentIndex = 0;
const autoSlideInterval = 4500; // Intervalo de 3 segundos

// Função para atualizar o carrossel
function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

// Próxima imagem ao clicar no botão "next"
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
    resetAutoSlide();
});

// Imagem anterior ao clicar no botão "prev"
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
    resetAutoSlide();
});

// Função para trocar imagens automaticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

// Inicia a troca automática de imagens
let autoSlideTimer = setInterval(autoSlide, autoSlideInterval);

// Função para reiniciar o temporizador ao interagir manualmente
function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
}
