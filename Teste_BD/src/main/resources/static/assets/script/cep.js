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


// Inicializações
let valorProdutos = 0;
let valorFrete = 0;
let descontoCupom = 0;

function calcularTotalGlobal() {
  const produtos = document.querySelectorAll('.produtoeae');
  let valorTotalProdutos = 0;

  produtos.forEach((produto, index) => {
      const totalPriceSpan = document.getElementById(`total-price-${index + 1}`);
      const precoTexto = totalPriceSpan.getAttribute('data-preco');
      const quantidade = parseInt(totalPriceSpan.getAttribute('data-quantidade'));
      const preco = parseFloat(precoTexto);
      valorTotalProdutos += preco * quantidade;
  });

  const total = valorTotalProdutos + valorFrete - descontoCupom;
  document.getElementById('valor-total').textContent = total.toFixed(2);
}

// Função para atualizar o total de um produto
function atualizarTotal(produtoIndex) {
    const quantidadeSelect = document.getElementById(`quantity-${produtoIndex}`);
    const totalPriceSpan = document.getElementById(`total-price-${produtoIndex}`);
    const preco = parseFloat(totalPriceSpan.getAttribute('data-preco'));
    const quantidadeNova = parseInt(quantidadeSelect.value);

    const novoTotal = (preco * quantidadeNova).toFixed(2);
    totalPriceSpan.textContent = novoTotal;
    totalPriceSpan.setAttribute('data-quantidade', quantidadeNova);

    // Atualize o valor total global
    calcularTotalGlobal();
}

// Atualizar valor do frete ao selecionar opção
document.getElementById('frete').addEventListener('change', function () {
    valorFrete = parseFloat(this.value);
    calcularTotalGlobal();
});

// Atualizar valor do desconto ao aplicar cupom
document.getElementById('aplicar-cupom').addEventListener('click', function () {
    // Lógica para verificar e aplicar desconto do cupom
    // descontoCupom = ...; // Defina o valor do desconto do cupom
    calcularTotalGlobal();
});

// Extrair os valores dos preços dos produtos e somá-los
const produtos = document.querySelectorAll('.produtoeae');
produtos.forEach((produto, index) => {
    const precoTexto = produto.querySelector('p').textContent;
    const preco = parseFloat(precoTexto.replace('R$', '').trim());
    const quantidade = parseInt(document.getElementById(`quantity-${index + 1}`).value);
    valorProdutos += preco * quantidade;
    const totalPriceSpan = document.getElementById(`total-price-${index + 1}`);
    totalPriceSpan.setAttribute('data-preco', preco);
    totalPriceSpan.setAttribute('data-quantidade', quantidade);
});

// Calcular o valor total inicial
calcularTotalGlobal();


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


// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  const quantitySelects = document.querySelectorAll("select[name^='quantity-']");
  
  quantitySelects.forEach(select => {
      select.addEventListener("change", function() {
          const productId = this.getAttribute("name").split("-")[1];
          const totalPriceElement = document.getElementById(`total-price-${productId}`);
          
          const price = parseFloat(document.querySelector(`.produtoeae:nth-child(${productId}) p`).innerText.replace("R$ ", ""));
          const quantity = parseInt(this.value);
          
          const totalPrice = price * quantity;
          totalPriceElement.innerText = totalPrice.toFixed(2);
      });
  });
});

// Função para mostrar/ocultar campos de endereço
function toggleEnderecoFields() {
  const enderecoFields = document.querySelectorAll('.endereco-field');
  enderecoFields.forEach(field => {
      field.classList.toggle('hidden');
  });
}

let enderecoSalvo = false;

    // Função para desabilitar os campos de entrada
   // Função para desabilitar os campos de entrada
   function desabilitarCampos() {
    document.getElementById('cep').disabled = true;
    document.getElementById('endereco').disabled = true;
    document.getElementById('cidade').disabled = true;
    document.getElementById('estado').disabled = true;
    document.getElementById('numero').disabled = true;
    document.getElementById('complemento').disabled = true;
    document.getElementById('referencia').disabled = true;
    document.getElementById('buscar-cep').style.display = 'none'; // Ocultar o botão "Buscar"
}

// Função para habilitar os campos de entrada
function habilitarCampos() {
    document.getElementById('cep').disabled = false;
    document.getElementById('endereco').disabled = false;
    document.getElementById('cidade').disabled = false;
    document.getElementById('estado').disabled = false;
    document.getElementById('numero').disabled = false;
    document.getElementById('complemento').disabled = false;
    document.getElementById('referencia').disabled = false;
    document.getElementById('buscar-cep').style.display = 'inline-block'; // Mostrar o botão "Buscar"
}


    document.getElementById('adicionar-endereco').addEventListener('click', function() {
        if (!enderecoSalvo) {
            // Verifique se todos os campos estão preenchidos
            const cep = document.getElementById('cep').value;
            const endereco = document.getElementById('endereco').value;
            const cidade = document.getElementById('cidade').value;
            const estado = document.getElementById('estado').value;
            const numero = document.getElementById('numero').value;

            if (cep && endereco && cidade && estado && numero) {
                // Todos os campos estão preenchidos, pode salvar o endereço
                alert('Endereço salvo com sucesso!');
                // Desabilitar campos
                desabilitarCampos();
                // Ocultar o botão "Adicionar Endereço" e mostrar o botão "Modificar Endereço" e "Destravar"
                document.getElementById('adicionar-endereco').style.display = 'none';
                document.getElementById('modificar-endereco').style.display = 'inline-block';
                document.getElementById('destravar').style.display = 'none';
                document.getElementById('salvar-endereco').style.display = 'none';
                enderecoSalvo = true;
            } else {
                // Algum campo está faltando, exibir mensagem de aviso
                alert('Por favor, preencha todos os campos antes de salvar o endereço.');
            }
        }
    });

    // Botão "Modificar Endereço"
    document.getElementById('modificar-endereco').addEventListener('click', function() {
        // Habilitar campos
        habilitarCampos();
        // Ocultar o botão "Modificar Endereço" e mostrar o botão "Adicionar Endereço" e "Destravar"
        document.getElementById('modificar-endereco').style.display = 'none';
        document.getElementById('adicionar-endereco').style.display = 'inline-block';
        document.getElementById('destravar').style.display = 'inline-block';
        document.getElementById('salvar-endereco').style.display = 'none';
        enderecoSalvo = false;
    });

    // Botão "Destravar"
    document.getElementById('destravar').addEventListener('click', function() {
        // Habilitar campos
        habilitarCampos();
        // Ocultar o botão "Destravar" e mostrar o botão "Salvar Endereço"
        document.getElementById('destravar').style.display = 'none';
        document.getElementById('salvar-endereco').style.display = 'inline-block';
    });




    

    