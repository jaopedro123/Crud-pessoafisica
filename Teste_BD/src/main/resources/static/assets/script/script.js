//Menu Lateral
//ITENS
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");

//CLICOU NO BOTÃO "X"
closeBtn.onclick = function () {
    closeSidebar();
  };
  
//CLICOU NO MENU
menuBtn.onclick = function () {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("hidden");
  document.body.style.overflowY = "hidden"; // Adiciona o overflow-y: hidden;
};

//CLICOU NO OVERLAY
overlay.onclick = function () {
  closeSidebar();
};

//EVENTO DE CLIQUE NA TELA
document.onclick = function (event) {
  const targetElement = event.target;
};

function closeSidebar() {
  overlay.classList.add("hidden");
  sidebar.classList.remove("active");
  document.body.style.overflowY = "auto"; // Remove o overflow-y: hidden;
}
// Fim do Menu Lateral

document.addEventListener("DOMContentLoaded", function () {
    const carousel1 = document.querySelector(".scroll-left-1");
    const carousel2 = document.querySelector(".scroll-left-2");
    const carousel3 = document.querySelector(".scroll-left-3");
    const items1 = document.querySelector(".divprod:nth-child(1) .items");
    const items2 = document.querySelector(".divprod:nth-child(2) .items");
    const items3 = document.querySelector(".divprod:nth-child(3) .items");
    const itemWidth = 220; // Largura de cada item, incluindo margens

    carousel1.addEventListener("click", function () {
        // Move os itens do Carrossel 1 para a esquerda
        items1.style.transform = `translateX(-${itemWidth}px)`;
        items1.style.transition = "transform 0.3s ease-in-out";
        // Remove o primeiro item e o adiciona no final
        setTimeout(() => {
            items1.appendChild(items1.firstElementChild);
            items1.style.transition = "none";
            items1.style.transform = "translateX(0)";
        }, 300); // Tempo igual à duração da transição
    });

    carousel2.addEventListener("click", function () {
        // Move os itens do Carrossel 2 para a esquerda
        items2.style.transform = `translateX(-${itemWidth}px)`;
        items2.style.transition = "transform 0.3s ease-in-out";
        // Remove o primeiro item e o adiciona no final
        setTimeout(() => {
            items2.appendChild(items2.firstElementChild);
            items2.style.transition = "none";
            items2.style.transform = "translateX(0)";
        }, 300); // Tempo igual à duração da transição
    });

    carousel3.addEventListener("click", function () {
        // Move os itens do Carrossel 3 para a esquerda
        items3.style.transform = `translateX(-${itemWidth}px)`;
        items3.style.transition = "transform 0.3s ease-in-out";
        // Remove o primeiro item e o adiciona no final
        setTimeout(() => {
            items3.appendChild(items3.firstElementChild);
            items3.style.transition = "none";
            items3.style.transform = "translateX(0)";
        }, 300); // Tempo igual à duração da transição
    });

    const carouselRight1 = document.querySelector(".scroll-right-1");
    const carouselRight2 = document.querySelector(".scroll-right-2");
    const carouselRight3 = document.querySelector(".scroll-right-3");

    carouselRight1.addEventListener("click", function () {
        // Move os itens do Carrossel 1 para a direita
        items1.insertBefore(items1.lastElementChild, items1.firstElementChild);
        items1.style.transition = "none";
        items1.style.transform = `translateX(-${itemWidth}px)`;
        setTimeout(() => {
            items1.style.transition = "transform 0.3s ease-in-out";
            items1.style.transform = "translateX(0)";
        }, 50);
    });

    carouselRight2.addEventListener("click", function () {
        // Move os itens do Carrossel 2 para a direita
        items2.insertBefore(items2.lastElementChild, items2.firstElementChild);
        items2.style.transition = "none";
        items2.style.transform = `translateX(-${itemWidth}px)`;
        setTimeout(() => {
            items2.style.transition = "transform 0.3s ease-in-out";
            items2.style.transform = "translateX(0)";
        }, 50);
    });

    carouselRight3.addEventListener("click", function () {
        // Move os itens do Carrossel 3 para a direita
        items3.insertBefore(items3.lastElementChild, items3.firstElementChild);
        items3.style.transition = "none";
        items3.style.transform = `translateX(-${itemWidth}px)`;
        setTimeout(() => {
            items3.style.transition = "transform 0.3s ease-in-out";
            items3.style.transform = "translateX(0)";
        }, 50);
    });
});

/*SLIDESHOW ABAIXO*/

let slideIndex = 1;

function showSlides(n) {
    let slides = document.getElementsByClassName("my-slides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

showSlides(slideIndex);
/*SLIDESHOW ACIMA*/

/*tema claro e escuro*/
function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode"); // Alterna o modo do corpo
  
    // Aplica o modo aos elementos específicos
    const elementsToToggle = document.querySelectorAll(".content");
    elementsToToggle.forEach(element => {
      element.classList.toggle("dark-mode");
    });
}

  