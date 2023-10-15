document.addEventListener("DOMContentLoaded", function () {
    const typeFilter = document.getElementById("type-filter");
    const brandFilter = document.getElementById("brand-filter");
    const RamFilter = document.getElementById("ram");
    const velRamFilter = document.getElementById("velram");
    const armazenamentoFilter = document.getElementById("armazenamento");
    const priceFilter = document.getElementById("price-filter");
    const priceValue = document.getElementById("price-value");
    const productGrid = document.getElementById("product-grid");
    const filterButton = document.querySelector(".filter-button");

    // Atualiza o valor do preço exibido
    priceFilter.addEventListener("input", function () {
        priceValue.textContent = priceFilter.value;
    });

    // Função para filtrar produtos com base nas seleções
    function filterProducts() {
        const selectedType = typeFilter.value;
        const selectedBrand = brandFilter.value;
        const selectedPrice = parseInt(priceFilter.value);
        const selectedRam = RamFilter.value;
        const selectedvelRam = velRamFilter.value;
        const selectedarmazenamento = armazenamentoFilter.value;
        const products = document.querySelectorAll(".product-item");

        products.forEach(function (product) {
            const productType = product.getAttribute("data-type");
            const productBrand = product.getAttribute("data-brand");
            const productRam = product.getAttribute("data-ram");
            const productvelRam = product.getAttribute("data-velram");
            const productarmazenamento = product.getAttribute("data-armazenamento");
            const productPrice = parseInt(product.getAttribute("data-price"));
            if (
                (selectedType === "all" || selectedType === productType) &&
                (selectedBrand === "all" || selectedBrand === productBrand) &&
                (selectedRam === "all" || selectedRam === productRam) &&
                (selectedvelRam === "all" || selectedvelRam === productvelRam) &&
                (selectedarmazenamento=== "all" || selectedarmazenamento=== productarmazenamento) &&
                productPrice <= selectedPrice
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Adiciona um evento de clique ao botão de filtro
    filterButton.addEventListener("click", filterProducts);

    // Exibe todos os produtos inicialmente
    filterProducts();
});


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
