const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentIndex = 0;

function showSlide(index) {
    // Quitar clase activa de la imagen actual
    slides[currentIndex].classList.remove('active');
    
    // Calcular el nuevo índice
    currentIndex = (index + slides.length) % slides.length;
    
    // Mostrar la nueva imagen
    slides[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

// Opcional: Cambio automático cada 5 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
