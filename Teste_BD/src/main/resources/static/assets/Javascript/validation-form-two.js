const form = document.getElementById('form')
const nomeFantasia = document.getElementById('nomeFantasia')
const razaosocial = document.getElementById('razaosocial')
const inscricaoestadual = document.getElementById('inscricaoestadual')
const cnpj = document.getElementById('cnpj')
const telefone = document.getElementById('telefone')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')
const inputcheckbox = document.getElementById("inputcheckbox");

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
        // mostrar erro
        // add classe
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
        setErrorFor(telefone, 'Telefone de Contato inválido')
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
// Função de Validação do Telefone de Contato
function isTel(telefone) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(telefone);
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


// Obtém o elemento do checkbox e o input de inscrição estadual
var checkboxNaoCostaIE = document.getElementById('inputcheckboxnaoCosta');
var inputInscricaoEstadual = document.getElementById('inscricaoestadual');

// Adiciona um evento de alteração ao checkbox
checkboxNaoCostaIE.addEventListener('change', function () {
    if (checkboxNaoCostaIE.checked) {
        // Se o checkbox estiver marcado, desativa o input, remove qualquer valor e classes de estilo
        inputInscricaoEstadual.disabled = true;
        inputInscricaoEstadual.value = ""; // Limpa o valor
        inputInscricaoEstadual.classList.remove('disabled-input');
        // Remova a mensagem de erro, se houver
        var errorSmall = document.querySelector('.small');
        if (errorSmall) {
            errorSmall.style.display = 'none';
        }
    } else {
        // Se o checkbox estiver desmarcado, ativa o input
        inputInscricaoEstadual.disabled = false;
    }
});


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