var btn = document.getElementsByClassName("BtnDet-pedidos");
var i;
    
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            this.classList.toggle("active");
            this.parentElement.classList.toggle("active");

            var detalhes = this.nextElementSibling;
            if(detalhes.style.display === "block") {
                detalhes.style.display = "none";
            }
            else {
                detalhes.style.display = "block";
            }
        })
}


function mostrarDiv(id) {
    // Oculta todas as divs de conteúdo
    var divs = document.querySelectorAll(".conteudo, .conteudo2");
    
    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }
    
    // Mostra a div específica com o ID passado como parâmetro
    var div = document.getElementById(id);
    if (div) {
        div.style.display = "block";
    }
}



// Substitua "SUA_CHAVE_API" pela sua chave de API real
const apiKey = "LuDI7yMIp6jUtIrBaieNKtvgb2ZqM1RsyJlEaAcutdZAPoDuaCVjTlyr9JONXcjW";

// Função para buscar informações de endereço pelo CEP
function buscarEnderecoPorCep() {
  const cep = document.getElementById("cep").value;
  const enderecoInput = document.getElementById("endereco");
  const cidadeInput = document.getElementById("cidade");
  const estadoInput = document.getElementById("estado");

  // Verifique se o campo CEP está preenchido
  if (cep.length === 8) {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    // Faça uma solicitação à API ViaCEP
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          enderecoInput.value = data.logradouro;
          cidadeInput.value = data.localidade;
          estadoInput.value = data.uf;
        } else {
          alert("CEP não encontrado. Por favor, verifique o CEP digitado.");
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar CEP:", error);
      });
  } else {
    alert("Por favor, insira um CEP válido.");
  }
}

// Adicione um evento de clique ao botão para buscar o endereço
const buscarCepButton = document.getElementById("buscar-cep");
buscarCepButton.addEventListener("click", buscarEnderecoPorCep);

// Seleciona o campo de entrada de CEP
const cepInput = document.getElementById("cep");

// Adiciona um ouvinte de evento de entrada para o campo de entrada
cepInput.addEventListener("input", function () {
  // Remove qualquer "-" da entrada do usuário
  this.value = this.value.replace(/-/g, "");
});



document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("confirmar-endereco").addEventListener("click", function () {
        // Lógica para salvar o endereço
        alert("Endereço salvo");
        // Atualize a página
        location.reload();
    });

    document.getElementById("apagar-endereco").addEventListener("click", function () {
        // Limpe os campos de entrada
        document.getElementById("cep").value = "";
        document.getElementById("endereco").value = "";
        document.getElementById("cidade").value = "";
        document.getElementById("estado").value = "";
    });
});
