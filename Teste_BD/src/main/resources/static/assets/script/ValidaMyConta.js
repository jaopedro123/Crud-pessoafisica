var inputNomeCompleto = document.getElementById("nomeCompleto");

inputNomeCompleto.addEventListener("input", function() {
    var valor = inputNomeCompleto.value;
    valor = valor.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');

    inputNomeCompleto.value = valor;
});





/*
    document.addEventListener("DOMContentLoaded", function () {
        const deleteButton = document.querySelector(".delete-button");
        deleteButton.addEventListener("click", function (event) {
            const confirmDelete = confirm('Tem certeza que deseja excluir sua conta?');
            if (!confirmDelete) {
                event.preventDefault(); // Prevent form submission if not confirmed
            }
        });
    });
 */

document.addEventListener("DOMContentLoaded", function() {
    const atualizaCampos = document.querySelectorAll(".atualizaCampo");

    atualizaCampos.forEach(botao => {
        botao.addEventListener("click", function(e) {
            const targetInputId = botao.getAttribute("data-target");
            const input = document.getElementById(targetInputId);

            // Verifica se o campo está preenchido antes de enviar
            if (input.value.trim() === "") {
                alert("Por favor, preencha o campo antes de atualizar.");
                e.preventDefault(); // Impede o envio do formulário
            } else {
                // Verifica se o número de dígitos é correto (11 dígitos)
                const telefone = input.value.replace(/\D/g, "");
                if (telefone.length !== 11) {
                    alert("Por favor, insira um número de telefone válido.");
                    e.preventDefault(); // Impede o envio do formulário
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var telefoneInput = document.getElementById("telefone");
    telefoneInput.addEventListener("input", function () {
        var telefone = this.value.replace(/\D/g, ""); 
        var maxLength = 11;       
        if (telefone.length > maxLength) {
            telefone = telefone.slice(0, maxLength); 
        } 
        if (telefone.length <= 10) {
            telefone = telefone.replace(/(\d{2})(\d{0,4})(\d{0,4})/, "($1) $2-$3");
        } 
        else {
            telefone = telefone.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1) $2-$3");
        }
        this.value = telefone; 
    });
});