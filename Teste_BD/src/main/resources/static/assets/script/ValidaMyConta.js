var inputNomeCompleto = document.getElementById("nomeCompleto");

    inputNomeCompleto.addEventListener("input", function() {
        var valor = inputNomeCompleto.value;

        valor = valor.replace(/[0-9]/g, '');

        inputNomeCompleto.value = valor;
    });
	
	
document.getElementById('cpf').addEventListener('input', function (e) {
  let value = e.target.value;
  value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (value.length > 11) {
    value = value.slice(0, 11); // Limita a 11 dígitos
  }
  if (value.length >= 3 && value.length <= 6) {
    value = value.replace(/(\d{3})(\d{0,3})/, '$1.$2');
  } else if (value.length >= 7 && value.length <= 9) {
    value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
  } else if (value.length >= 10) {
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  e.target.value = value;
});



// Máscara para o telefone
document.getElementById('telefone').addEventListener('input', function (e) {
  let value = e.target.value;
  value = value.replace(/\D/g, ''); // Remove caracteres não numéricos
  if (value.length > 11) {
    value = value.slice(0, 11); // Limita a 11 dígitos
  }
  if (value.length > 2) {
    value = '(' + value.substring(0, 2) + ') ' + value.substring(2); // Formata o DDD
  }
  if (value.length > 8) {
    value = value.slice(0, 9) + '-' + value.slice(9); // Adiciona hífen
  }
  e.target.value = value;
});


    document.addEventListener("DOMContentLoaded", function () {
        const deleteButton = document.querySelector(".delete-button");
        deleteButton.addEventListener("click", function (event) {
            const confirmDelete = confirm('Tem certeza que deseja excluir sua conta?');
            if (!confirmDelete) {
                event.preventDefault(); // Prevent form submission if not confirmed
            }
        });
    });