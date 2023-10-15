// Aguarda até que o DOM esteja pronto
document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todas as setas de expansão
    const setasExpansao = document.querySelectorAll(".seta-expandir");
    
    // Adiciona um ouvinte de evento para cada seta de expansão
    setasExpansao.forEach(seta => {
        seta.addEventListener("click", function() {
            const descricao = this.nextElementSibling; // A descrição completa após a seta
            descricao.classList.toggle("mostrar-descricao");
            this.classList.toggle("expandida");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os ícones de favoritos
    const iconesFavoritos = document.querySelectorAll(".icone-favoritos");
    
    // Adiciona um ouvinte de evento para cada ícone de favoritos
    iconesFavoritos.forEach(function(iconeFavoritos) {
        iconeFavoritos.addEventListener("click", function() {
            this.classList.toggle("clicado");
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os ícones de favoritos
    const iconesFavoritos = document.querySelectorAll(".iconeHardware");
    
    // Adiciona um ouvinte de evento para cada ícone de favoritos
    iconesFavoritos.forEach(function(iconeFavoritos) {
        iconeFavoritos.addEventListener("click", function() {
            this.classList.toggle("clicado");
        });
    });
});