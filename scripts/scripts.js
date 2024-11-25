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

// Seleciona todos os carrosséis de produtos
const productCarousels = document.querySelectorAll('.product-carousel');

productCarousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.product-images img');
    const totalImages = images.length;
    let currentIndex = 0;

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const carouselImages = carousel.querySelector('.product-images');
        const offset = -currentIndex * 100; // Alinha as imagens
        carouselImages.style.transform = `translateX(${offset}%)`;
    }

    // Botão "Next" para o próximo slide
    const nextButton = carousel.querySelector('.next');
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    // Botão "Prev" para o slide anterior
    const prevButton = carousel.querySelector('.prev');
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });
});
