const formvalidationtwo = document.getElementById('formvalidationtwo')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkNomeFantasia()
    checkRazaosocial()
    checkInscricaoestadual()
    checkCnpj()
    checkTelefone()
    checkEmail()
    checkPassword()
    checkPasswordtwo()
    checkCheckbox()
})
// Adicione eventos de entrada (input) para todos os campos
nomeFantasia.addEventListener('input', checkNomeFantasia);
razaosocial.addEventListener('input', checkRazaosocial);
inscricaoestadual.addEventListener('input', checkInscricaoestadual);
cnpj.addEventListener('input', checkCnpj);
telefone.addEventListener('input', checkTelefone);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);
passwordtwo.addEventListener('input', checkPasswordtwo);
inputcheckbox.addEventListener('input', checkCheckbox);

function checkNomeFantasia() {
    const nomeFantasiaValue = nomeFantasia.value.trim()
    if(nomeFantasiaValue === '') {
        setErrorFor(nomeFantasia, 'Preencha esse campo')
    }else if (nomeFantasiaValue.length < 3) {
        setErrorFor(nomeFantasia, 'O campo deve ter no mínimo 3 caracteres');
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(nomeFantasia)
    }
}

function checkRazaosocial() {
    const razaosocialValue = razaosocial.value.trim()
    if(razaosocialValue === '') {
        setErrorFor(razaosocial, 'Preencha esse campo')
    }else if (razaosocialValue.length < 3) {
        setErrorFor(razaosocial, 'O campo deve ter no mínimo 3 caracteres');
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(razaosocial)
    }
}

function checkInscricaoestadual() {
    const inscricaoestadualValue = inscricaoestadual.value.trim()
    if(inscricaoestadualValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(inscricaoestadual, 'Preencha esse campo')
    } else if (inscricaoestadualValue.length < 14) {
        setErrorFor(inscricaoestadual, 'Inscrição Estadual inválida')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(inscricaoestadual)
    }
}

function checkCnpj() {
    const cnpjValue = cnpj.value.trim()
    if(cnpjValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(cnpj, 'Preencha esse campo')
    }else if (!isCnpj(cnpjValue)) {
        setErrorFor(cnpj, 'CNPJ inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(cnpj)
    }
}

function checkTelefone() {
    const telefoneValue = telefone.value.trim()
    if(telefoneValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(telefone, 'Preencha esse campo')
    }else if (!isTel(telefoneValue)) {
        setErrorFor(telefone, 'Telefone inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(telefone)
    }
}

function checkEmail() {
    const emailValue = email.value.trim()
    if(emailValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(email, 'Preencha esse campo')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(email)
    }
}

function checkPassword() {
    const passwordValue = password.value.trim()
    if(passwordValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(password, 'Preencha esse campo')

    } else if(passwordValue.length < 8) { 
        setErrorFor(password, 'Senha deve ter mais que 8 caracteres')
    } else if (!containsUpperCase(passwordValue)) {
        setErrorFor(password, 'A senha deve conter uma letra maiúscula')
    } else if (!containsLowerCase(passwordValue)) {
        setErrorFor(password, 'A senha deve conter uma letra minúscula')
    } else if (!containsNumber(passwordValue)) {
        setErrorFor(password, 'A senha deve conter um número')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(password)
    }
}

function checkPasswordtwo() {
    const passwordValue = password.value.trim()
    const passwordtwoValue = passwordtwo.value.trim()
    if(passwordtwoValue === '') {
        // mostrar erro
        // add classe
        setErrorFor(passwordtwo, 'Preencha esse campo')

    } else if(passwordValue !== passwordtwoValue) { 
        setErrorFor(passwordtwo, 'Senhas não tão iguais')
    } else {
        // adicionar a classe de sucesso
        setSuccessFor(passwordtwo)
    }
}

function checkCheckbox() {
    const inputcheckbox = document.getElementById("inputcheckbox");
    const small = document.querySelector('small');
    if (!inputcheckbox.checked) {
        setErrorFor(inputcheckbox.parentElement, 'Você deve concordar com os Termos de Uso e a Política de Privacidade');
    } else {
        clearErrorFor(inputcheckbox.parentElement);
    }
}


// Função da Validação do Formulário de Cadastro Jurídico
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'input-box error'
}
function clearErrorFor(inputcheckbox) {
    const small = document.querySelector('small');
    const formControl = inputcheckbox.parentElement;
    formControl.className = 'input-box success'; // Define a classe de sucesso
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'input-box success'
}


// Função de Validação do E-mail
function isEmail(email) {
    return /^(?:[A-Z a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email)
}
// Função de Validação do CNPJ
function isCnpj(cnpj) {
    return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(cnpj);
}
function isCnpj(cnpj) {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
    
}

// Função de Validação do Telefone
function isTel(telefone) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$|^\(\d{2}\) \d{4}-\d{4}$/.test(telefone);
}
// Funções de Validações da Senha
function containsUpperCase(str) {
    return /[A-Z]/.test(str)
}

function containsLowerCase(str) {
    return /[a-z]/.test(str)
}

function containsNumber(str) {
    return /[0-9]/.test(str)
}


// Script para Validar o Checkbox Não Costa do Input Inscrição Estadual
// Adiciona um evento de alteração ao checkbox
var inputcheckboxnaoCosta = document.getElementById('inputcheckboxnaoCosta');
var inputInscricaoEstadual = document.getElementById('inscricaoestadual');
var mensagemErro = document.querySelector('#small');
var mensagemSucesso = document.querySelector('#success-message');
var imgError = document.querySelector('#img-errorIE');
var imgSuccess = document.querySelector('#img-successIE');
var inputBox = document.querySelector('.input-box'); // Elemento que contém o campo de entrada

function mostrarMensagemDeErro(mensagem) {
    console.log(mensagem);
}

// Adiciona um evento de alteração ao checkbox
inputcheckboxnaoCosta.addEventListener('change', function () {
    if (inputcheckboxnaoCosta.checked) {
        // Se o checkbox estiver marcado, desativa o input, remove qualquer valor,
        // oculta as mensagens de erro e sucesso e os ícones de erro e sucesso
        inputInscricaoEstadual.disabled = true;
        inputInscricaoEstadual.value = ""; // Limpa o valor
        ocultarMensagemDeErro();
        ocultarIconeDeErro();
        ocultarIconeDeSucesso();
        removerCorDaBorda();
    } else {
        // Se o checkbox estiver desmarcado, ativa o input e adiciona novamente a classe "error"
        inputInscricaoEstadual.disabled = false;
        inputBox.classList.add('.error'); // Adiciona a classe "error"
    }
});

function ocultarMensagemDeErro() {
    mensagemErro.style.display = "none";
}

function ocultarIconeDeErro() {
    imgError.style.display = "none";
}

function ocultarIconeDeSucesso() {
    imgSuccess.style.display = "none";
}

function removerCorDaBorda() {
    inputBox.classList.remove('.success'); // Remove a classe "success"
    inputBox.classList.remove('.error'); // Remove a classe "error"
}



/* Sistema de Ocultar/Mostar Senha*/
const passwordicon = document.getElementById('password');
const icon = document.getElementById('icon');

function showHide(){
    if(passwordicon.type === 'password'){
        passwordicon.setAttribute('type','text');
        icon.classList.add('hide')
    }
    else{
        passwordicon.setAttribute('type', 'password');
        icon.classList.remove('hide')
    }
    
} 

/* Sistema de Ocultar/Mostar no Confirmar Senha*/
const password2 = document.getElementById('passwordtwo');
const icon2 = document.getElementById('icon2');

function showHide2(){
    if(password2.type === 'password'){
        password2.setAttribute('type','text');
        icon2.classList.add('hide')
    }
    else{
        password2.setAttribute('type', 'password');
        icon2.classList.remove('hide')
    }
    
} 