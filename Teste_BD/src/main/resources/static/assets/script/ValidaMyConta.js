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
            botao.addEventListener("click", function() {
                const targetInputId = botao.getAttribute("data-target");
                const input = document.getElementById(targetInputId);

                // Verifica se o campo está preenchido antes de enviar
                if (input.value.trim() !== "") {
                    input.closest("form").submit();
                } else {
                    alert("Por favor, preencha o campo antes de atualizar.");
                }
            });
        });
    });