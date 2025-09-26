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



let slideIndex = 1;
showSlides(slideIndex);

// Função para avançar ou retroceder os slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Função para mostrar um slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Volta ao primeiro slide se passar do último
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Vai para o último slide se for antes do primeiro
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Esconde todos os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove a classe "active" de todos os pontos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostra o slide atual e adiciona a classe "active" ao ponto correspondente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}