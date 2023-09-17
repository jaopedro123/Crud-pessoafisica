// Mascáras do Formulário de Cadastro Pessoa Física
function formatCPF() {
    let cpfInput = document.getElementById("cpf");
    let cpfValue = cpfInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (cpfValue.length > 0) {
        cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
        cpfValue = cpfValue.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
        cpfValue = cpfValue.replace(/(\d{3})(\d{2})$/, "$1-$2"); // Adiciona o traço
    }
    cpfInput.value = cpfValue;
}

// Adiciona um listener para chamar a função de formatação quando o usuário digitar no campo CPF
let cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", formatCPF);

// Código JavaScript para Aplicar a Máscara para o Telefone            
const telInput = document.getElementById('tel');
                            
telInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = '(' + value.substring(0, 2) + ')';

        if (value.length > 2) {
            formattedValue += ' ' + value.substring(2, 7);

            if (value.length >= 7) {
                formattedValue += '-' + value.substring(7, 11);
            }
        }
    }

    e.target.value = formattedValue;
});
