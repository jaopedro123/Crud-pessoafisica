document.addEventListener("DOMContentLoaded", function () {
    // Função para verificar se um elemento HTML existe
    function getElementByIdSafely(id) {
        return document.getElementById(id) || null;
    }

    // Função para adicionar eventos apenas se os elementos existirem
    function addEventIfExists(element, event, handler) {
        if (element) {
            element.addEventListener(event, handler);
        }
    }

    // Configuração do Filtro de Produtos
    const typeFilter = getElementByIdSafely("type-filter");
    const brandFilter = getElementByIdSafely("brand-filter");
    const ramFilter = getElementByIdSafely("ram");
    const velRamFilter = getElementByIdSafely("velram");
    const armazenamentoFilter = getElementByIdSafely("armazenamento");
    const priceFilter = getElementByIdSafely("price-filter");
    const priceValue = getElementByIdSafely("price-value");
    const productGrid = getElementByIdSafely("product-grid");
    const filterButton = document.querySelector(".filter-button");

    addEventIfExists(priceFilter, "input", function () {
        priceValue.textContent = priceFilter.value;
    });

    function filterProducts() {
        const selectedType = typeFilter ? typeFilter.value : "all";
        const selectedBrand = brandFilter ? brandFilter.value : "all";
        const selectedPrice = parseInt(priceFilter ? priceFilter.value : 0);
        const selectedram = ramFilter ? ramFilter.value : "all";
        const selectedvelRam = velRamFilter ? velRamFilter.value : "all";
        const selectedarmazenamento = armazenamentoFilter ? armazenamentoFilter.value : "all";
        const products = document.querySelectorAll(".product-item");

        products.forEach(function (product) {
            const productType = product.getAttribute("data-type");
            const productBrand = product.getAttribute("data-brand");
            const productram = product.getAttribute("data-ram");
            const productvelRam = product.getAttribute("data-velram");
            const productarmazenamento = product.getAttribute("data-armazenamento");
            const productPrice = parseInt(product.getAttribute("data-price"));

            if (
                (selectedType === "all" || selectedType === productType) &&
                (selectedBrand === "all" || selectedBrand === productBrand) &&
                (selectedram === "all" || selectedram === productram) &&
                (selectedvelRam === "all" || selectedvelRam === productvelRam) &&
                (selectedarmazenamento === "all" || selectedarmazenamento === productarmazenamento) &&
                productPrice <= selectedPrice
            ) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    addEventIfExists(filterButton, "click", filterProducts);

    filterProducts(); // Exibe todos os produtos inicialmente
});
