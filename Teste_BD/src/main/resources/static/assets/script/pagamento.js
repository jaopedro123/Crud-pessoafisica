document.addEventListener("DOMContentLoaded", function () {
// Função para alternar a exibição do conteúdo da barra

function toggleBarContent(barId) {
    const barContent = document.getElementById(barId + '-content');
    if (barContent) {
        const isVisible = window.getComputedStyle(barContent).display !== 'none';
        barContent.style.display = isVisible ? 'none' : 'block';
    }
}

// Adicione um evento de clique aos títulos das barras
document.getElementById('bar1-title').addEventListener('click', function () {
    toggleBarContent('bar1');
});

document.getElementById('bar2-title').addEventListener('click', function () {
    toggleBarContent('bar2');
});

document.getElementById('bar3-title').addEventListener('click', function () {
    toggleBarContent('bar3');
});

// Impedir o comportamento padrão do clique em "Produtos no Carrinho"
document.querySelector('.product-list h2').addEventListener('click', function (e) {
    e.stopPropagation();
});

// Evitar que o clique em "Produtos no Carrinho" afete o tamanho das barras
document.querySelector('.product-list h2').addEventListener('click', function () {
    const barContent = document.getElementById('bar1-content');
    if (barContent) {
        barContent.style.display = 'none';
    }
});






// script.js


    const tipoPessoa = document.getElementById("tipo-pessoa");
    const nomeLabel = document.querySelector('[for="nome"]');
    const cpfCnpjLabel = document.querySelector('[for="cpf-cnpj"]');
    const cpfCnpjInput = document.getElementById("cpf-cnpj");
    const dataNascimentoLabel = document.querySelector('[for="data-nascimento"]');
    const dataNascimentoInput = document.getElementById("data-nascimento");
    const nomeFantasiaLabel = document.querySelector('[for="nome-fantasia"]');
    const nomeFantasiaInput = document.getElementById("nome-fantasia");

    // Inicialmente, ocultar campos de Pessoa Jurídica
    nomeFantasiaLabel.style.display = "none";
    nomeFantasiaInput.style.display = "none";

    tipoPessoa.addEventListener("change", function () {
        if (tipoPessoa.value === "fisica") {
            nomeLabel.textContent = "Nome:";
            cpfCnpjLabel.textContent = "CPF:";
            cpfCnpjInput.placeholder = "CPF";
            dataNascimentoLabel.style.display = "block";
            dataNascimentoInput.style.display = "block";
            nomeFantasiaLabel.style.display = "none";
            nomeFantasiaInput.style.display = "none";
        } else if (tipoPessoa.value === "juridica") {
            nomeLabel.textContent = "Razão Social:";
            cpfCnpjLabel.textContent = "CNPJ:";
            cpfCnpjInput.placeholder = "CNPJ";
            dataNascimentoLabel.style.display = "none";
            dataNascimentoInput.style.display = "none";
            nomeFantasiaLabel.style.display = "block";
            nomeFantasiaInput.style.display = "block";
        }
    });
});

// script.js

    const cardNumberInput = document.getElementById("card-number");

    cardNumberInput.addEventListener("input", function () {
        // Remove todos os caracteres não numéricos
        const cardNumber = cardNumberInput.value.replace(/\D/g, "");
        
        // Formata o número do cartão com traços
        const formattedCardNumber = formatCardNumber(cardNumber);

        // Define o valor formatado de volta no campo
        cardNumberInput.value = formattedCardNumber;
    });

    function formatCardNumber(cardNumber) {
        const formattedParts = [];

        for (let i = 0; i < cardNumber.length; i += 4) {
            const part = cardNumber.slice(i, i + 4);
            formattedParts.push(part);
        }

        return formattedParts.join("-");
    }


// Seu código JavaScript existente...


    // Seu código JavaScript existente...

    const expirationInput = document.getElementById("expiration");

    expirationInput.addEventListener("input", function () {
        let value = expirationInput.value;

        // Remove todos os caracteres não numéricos
        value = value.replace(/\D/g, "");

        // Limita o tamanho máximo para 4 caracteres
        if (value.length > 4) {
            value = value.slice(0, 4);
        }

        // Formata o valor com uma barra após os dois primeiros números
        if (value.length >= 2) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        }

        // Define o valor formatado de volta no campo
        expirationInput.value = value;
    });

    // Seu código JavaScript existente...

function limitNumberLength(input, maxLength) {
    const value = input.valueAsNumber || parseInt(input.value, 10);
    
    if (isNaN(value)) {
        input.value = "";
    } else {
        const valueString = value.toString().slice(0, maxLength);
        input.value = valueString;
    }
}
function formatDateInput(input) {
    const value = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length >= 2) {
        const day = value.substring(0, 2);
        const month = value.substring(2, 4);
        const year = value.substring(4, 8);
        input.value = day + "/" + month + "/" + year;
    } else if (value.length >= 4) {
        const day = value.substring(0, 2);
        const month = value.substring(2, 4);
        input.value = day + "/" + month + "/";
    } else {
        input.value = value;
    }
}


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
