// Fazer esta função 2° (Troca a imagem do sorvete)

function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything;
}

// Fazer esta função 3° (Trocar a cor do círculo)
function changeCircleColor(color) {
    const circulo = document.querySelector('.circulo');
    circulo.style.background = color;
}

// Fazer esta função 1° (Altera o estado Ativo/Desativo)

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle'); // Cria uma variável para selecionar a classe ()
    var links = document.querySelector('.links'); // Cria uma variável para selecionar a classe (.links)
    menuToggle.classList.toggle('active'); // Troca o estado da classe (.toggle) para ativo
}