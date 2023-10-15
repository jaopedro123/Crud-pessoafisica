document.addEventListener("DOMContentLoaded", function () {
    // Seu código JavaScript aqui


    // Configuração do Menu Lateral
    const menuBtn = document.getElementById("menuBtn");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");

    closeBtn.onclick = function () {
        closeSidebar();
    };

    menuBtn.onclick = function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("hidden");
        document.body.style.overflowY = "hidden";
    };

    overlay.onclick = function () {
        closeSidebar();
    };

    function closeSidebar() {
        overlay.classList.add("hidden");
        sidebar.classList.remove("active");
        document.body.style.overflowY = "auto";
    }

    
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
        const vRamFilter = getElementByIdSafely("vram");
        const pvFilter = getElementByIdSafely("pv");
        const armazenamentoFilter = getElementByIdSafely("armazenamento");
        const precessadorFilter = getElementByIdSafely("processador");
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
            const selectedvRam = vRamFilter ? vRamFilter.value : "all";
            const selectedpv = pvFilter ? pvFilter.value : "all";
            const selectedarmazenamento = armazenamentoFilter ? armazenamentoFilter.value : "all";
            const selectedprecessador = precessadorFilter ? precessadorFilter.value : "all";
            const products = document.querySelectorAll(".product66");
    
            products.forEach(function (product) {
                const productType = product.getAttribute("data-type");
                const productBrand = product.getAttribute("data-brand");
                const productram = product.getAttribute("data-ram");
                const productvelRam = product.getAttribute("data-velram");
                const productvRam = product.getAttribute("data-vram");
                const productpv = product.getAttribute("data-pv");
                const productarmazenamento = product.getAttribute("data-armazenamento");
                const productprocesador = product.getAttribute("data-processador");
                const productPrice = parseInt(product.getAttribute("data-price"));
    
                if (
                    (selectedType === "all" || selectedType === productType) &&
                    (selectedBrand === "all" || selectedBrand === productBrand) &&
                    (selectedram === "all" || selectedram === productram) &&
                    (selectedvelRam === "all" || selectedvelRam === productvelRam) &&
                    (selectedvRam === "all" || selectedvRam === productvRam) &&
                    (selectedpv === "all" || selectedpv === productpv) &&
                    (selectedarmazenamento === "all" || selectedarmazenamento === productarmazenamento) &&
                    (selectedprecessador === "all" || selectedprecessador === productprocesador) &&
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
 
    



        const carousel1 = document.querySelector(".scroll-left-1");
        const carousel2 = document.querySelector(".scroll-left-2");
        const carousel3 = document.querySelector(".scroll-left-3");
        const items1 = document.querySelector(".divprod:nth-child(1) .items");
        const items2 = document.querySelector(".divprod:nth-child(2) .items");
        const items3 = document.querySelector(".divprod:nth-child(3) .items");
        const itemWidth = 500; // Largura de cada item, incluindo margens
        let isAnimating1 = false;
        let isAnimating2 = false;
        let isAnimating3 = false;
        
        carousel1.addEventListener("click", function () {
            if (!isAnimating1) {
                isAnimating1 = true;
                // Mova os itens do Carrossel 1 para a esquerda
                items1.style.transition = "transform 0.3s ease-in-out";
                items1.style.transform = `translateX(-${itemWidth}px)`;
                // Após a transição, reorganize os itens
                items1.addEventListener("transitionend", function () {
                    items1.style.transition = "none";
                    items1.style.transform = "translateX(0)";
                    items1.appendChild(items1.firstElementChild);
                    isAnimating1 = false;
                }, { once: true });
            }
        });
        
        carousel2.addEventListener("click", function () {
            if (!isAnimating2) {
                isAnimating2 = true;
                // Mova os itens do Carrossel 2 para a esquerda
                items2.style.transition = "transform 0.3s ease-in-out";
                items2.style.transform = `translateX(-${itemWidth}px)`;
                // Após a transição, reorganize os itens
                items2.addEventListener("transitionend", function () {
                    items2.style.transition = "none";
                    items2.style.transform = "translateX(0)";
                    items2.appendChild(items2.firstElementChild);
                    isAnimating2 = false;
                }, { once: true });
            }
        });
        
        carousel3.addEventListener("click", function () {
            if (!isAnimating3) {
                isAnimating3 = true;
                // Mova os itens do Carrossel 3 para a esquerda
                items3.style.transition = "transform 0.3s ease-in-out";
                items3.style.transform = `translateX(-${itemWidth}px)`;
                // Após a transição, reorganize os itens
                items3.addEventListener("transitionend", function () {
                    items3.style.transition = "none";
                    items3.style.transform = "translateX(0)";
                    items3.appendChild(items3.firstElementChild);
                    isAnimating3 = false;
                }, { once: true });
            }
        });
        
        const carouselRight1 = document.querySelector(".scroll-right-1");
        const carouselRight2 = document.querySelector(".scroll-right-2");
        const carouselRight3 = document.querySelector(".scroll-right-3");
        
        carouselRight1.addEventListener("click", function () {
            if (!isAnimating1) {
                isAnimating1 = true;
                // Mova os itens do Carrossel 1 para a direita
                items1.style.transition = "none";
                items1.insertBefore(items1.lastElementChild, items1.firstElementChild);
                items1.style.transform = `translateX(-${itemWidth}px)`;
                // Force uma reflow antes de aplicar a transição
                void items1.offsetWidth;
                items1.style.transition = "transform 0.3s ease-in-out";
                items1.style.transform = "translateX(0)";
                // Após a transição, reorganize os itens
                items1.addEventListener("transitionend", function () {
                    isAnimating1 = false;
                }, { once: true });
            }
        });
        
        carouselRight2.addEventListener("click", function () {
            if (!isAnimating2) {
                isAnimating2 = true;
                // Mova os itens do Carrossel 2 para a direita
                items2.style.transition = "none";
                items2.insertBefore(items2.lastElementChild, items2.firstElementChild);
                items2.style.transform = `translateX(-${itemWidth}px)`;
                // Force uma reflow antes de aplicar a transição
                void items2.offsetWidth;
                items2.style.transition = "transform 0.3s ease-in-out";
                items2.style.transform = "translateX(0)";
                // Após a transição, reorganize os itens
                items2.addEventListener("transitionend", function () {
                    isAnimating2 = false;
                }, { once: true });
            }
        });
        
        carouselRight3.addEventListener("click", function () {
            if (!isAnimating3) {
                isAnimating3 = true;
                // Mova os itens do Carrossel 3 para a direita
                items3.style.transition = "none";
                items3.insertBefore(items3.lastElementChild, items3.firstElementChild);
                items3.style.transform = `translateX(-${itemWidth}px)`;
                // Force uma reflow antes de aplicar a transição
                void items3.offsetWidth;
                items3.style.transition = "transform 0.3s ease-in-out";
                items3.style.transform = "translateX(0)";
                // Após a transição, reorganize os itens
                items3.addEventListener("transitionend", function () {
                    isAnimating3 = false;
                }, { once: true });
            }
        });
        
    });
  




    // Código do tema claro/escuro aqui

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



