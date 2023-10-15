const images = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const imageButtons = document.querySelectorAll('.image-button');

let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Adicione um evento de clique para cada botão de imagem
imageButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});

// Mostrar a primeira imagem ao carregar a página
showImage(currentIndex);
// avaliação 
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

let currentRating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-rating"));
    currentRating = rating;
    updateRating();
  });

  star.addEventListener("mouseover", () => {
    const rating = parseInt(star.getAttribute("data-rating"));
    highlightStars(rating);
  });

  star.addEventListener("mouseout", () => {
    resetStars();
  });
});

function highlightStars(rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = "#ffcc00";
    } else {
      star.style.color = "#ccc";
    }
  });
}

function resetStars() {
  stars.forEach((star, index) => {
    if (index < currentRating) {
      star.style.color = "#ffcc00";
    } else {
      star.style.color = "#ccc";
    }
  });
}

function updateRating() {
  ratingValue.textContent = `Avaliação: ${currentRating} estrelas`;
}

// Função para verificar se o CEP é válido e gerar um valor de frete
function verificarCEP() {
  const cepInput = document.getElementById("cepInput");
  const cep = cepInput.value;

  // Verifique se o campo CEP está preenchido
  if (cep.length === 8) {
    // O CEP é válido, agora gere um valor aleatório de 0 a 50 reais para o frete
    const valorAleatorio = (Math.random() * 50).toFixed(2);

    // Exiba o valor do frete
    const freteResult = document.getElementById("freteResult");
    const freteValue = document.getElementById("freteValue");
    freteValue.textContent = valorAleatorio;
    freteResult.style.display = "block";
  } else {
    alert("Por favor, insira um CEP válido.");
  }
}
// Função para verificar se o CEP é válido e gerar um valor de frete
function verificarCEP() {
  const cepInput = document.getElementById("cepInput");
  const cep = cepInput.value;

  // Verifique se o campo CEP está preenchido
  if (cep.length === 8) {
    // O CEP é válido, agora gere um valor aleatório de 0 a 50 reais para o frete
    const valorAleatorio = (Math.random() * 50).toFixed(2);

    // Exiba o valor do frete
    const freteResult = document.getElementById("freteResult");
    const freteValue = document.getElementById("freteValue");
    freteValue.textContent = valorAleatorio;
    freteResult.style.display = "block";
  } else {
    alert("Por favor, insira um CEP válido.");
  }
}



function createCircularCarousel() {
  const container = document.querySelector('.container652');
  const carousel = document.querySelector('.carousel52');
  const items = document.querySelector('.itemsPRODUTOS');
  const productItems = document.querySelectorAll('.productPRODUTO');
  const scrollLeftButton = document.querySelector('.scroll-left-1');
  const scrollRightButton = document.querySelector('.scroll-right-1');

  let currentIndex = 0;
  const itemWidth = productItems[0].offsetWidth;
  const numVisibleItems = Math.floor(container.offsetWidth / itemWidth);

  scrollLeftButton.addEventListener('click', () => {
      currentIndex -= numVisibleItems;
      if (currentIndex < 0) {
          currentIndex = productItems.length - numVisibleItems;
      }
      updateCarousel();
  });

  scrollRightButton.addEventListener('click', () => {
      currentIndex += numVisibleItems;
      if (currentIndex >= productItems.length) {
          currentIndex = 0;
      }
      updateCarousel();
  });

  function updateCarousel() {
      const translateX = -currentIndex * itemWidth;
      items.style.transform = `translateX(${translateX}px)`;
  }

  // Inicialize o carrossel com os produtos alinhados corretamente
  updateCarousel();
}

// Chame a função para criar o carrossel circular
createCircularCarousel();
