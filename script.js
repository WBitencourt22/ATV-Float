/**function Mudaimagem() {
    let imagem = Maath.floor(Math.random() * 100);
    const img = document.querySelector('#muda');
    img.src = `https://picsum.photos/id/${imagem}/300/200`;
}*/
function trocaimagem() {
    const imagens = document.querySelectorAll('.troca-automatica');
    imagens.forEach(img => {
        let novaimagem = Math.floor(Math.random() * 100);
        img.src = `https://picsum.photos/id/${novaimagem}/300/200`;
    });
}
setInterval(trocaimagem, 2000,);
trocaimagem();



let imageSources = [
    'https://picsum.photos/id/1018/1000/600/',
    'https://picsum.photos/id/1015/1000/600/',
    'https://picsum.photos/id/1019/1000/600/'
];
let slideIndex = 1;
showSlides(slideIndex);

// Função para obter um índice aleatório
function getRandomImageIndex() {
    return Math.floor(Math.random() * imageSources.length);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Lógica original para loop dos slides
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // --- PARTE DA GERAÇÃO ALEATÓRIA ---

    // Encontra o elemento <img> dentro do slide atual
    let currentSlideElement = slides[slideIndex - 1];
    let imageElement = currentSlideElement.querySelector(".slider-fade");

    if (imageElement) {
        // 2. Obtém um índice aleatório
        let randomIndex = getRandomImageIndex();

        // 3. Define a URL da imagem aleatória
        imageElement.src = imageSources[randomIndex];
    }

    // --- FIM DA PARTE ALEATÓRIA ---

    // Mostra o slide atual e adiciona a classe "active" ao ponto correspondente (mantido)
    currentSlideElement.style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Funções para avançar ou retroceder os slides (mantidas)
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
setInterval(function () {
    plusSlides(1);
}, 5000);