// Mascáras do Formulário de Cadastro Pessoa Jurídica
function formatCNPJ() {
    let cnpjInput = document.getElementById("cnpj");
    let cnpjValue = cnpjInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (cnpjValue.length > 0, 14) {
        cnpjValue = cnpjValue.replace(/(\d{2})(\d)/, "$1.$2"); // Adiciona o primeiro ponto
        cnpjValue = cnpjValue.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
        cnpjValue = cnpjValue.replace(/(\d{3})(\d)/, "$1/$2"); // Adiciona a barra
        cnpjValue = cnpjValue.replace(/(\d{4})(\d{2})$/, "$1-$2"); // Adiciona o traço
    }
    cnpjInput.value = cnpjValue;
}
// Adiciona um listener para chamar a função de formatação quando o usuário digitar no campo CNPJ
let cnpjInput = document.getElementById("cnpj");
cnpjInput.addEventListener("input", formatCNPJ);


// Adiciona um listener para chamar a função de formatação quando o usuário digitar no campo Inscrição Estadual
function formatIE() {
    let inscricaoestadualInput = document.getElementById("inscricaoestadual");
    let inscricaoestadualValue = inscricaoestadualInput.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    inscricaoestadualInput.value = inscricaoestadualValue;
}
// Adiciona um listener para chamar a função de formatação quando o usuário digitar no campo Inscrição Estadual
let inscricaoestadualInput = document.getElementById("inscricaoestadual");
inscricaoestadualInput.addEventListener("input", formatIE);


// Código JavaScript para Aplicar a Máscara para Telefone de Contato           
const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue = '(' + value.substring(0, 2) + ')';

        if (value.length > 2) {
                formattedValue += ' ' + value.substring(2, 6);

            if (value.length >= 7) {
                formattedValue += '-' + value.substring(6, 10);
            }
        }
    }

    e.target.value = formattedValue;
});
