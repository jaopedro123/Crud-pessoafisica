const form = document.getElementById('form')
const username = document.getElementById('username')
const cpf = document.getElementById('cpf')
const tel = document.getElementById('tel')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordtwo = document.getElementById('passwordtwo')
const inputcheckbox = document.getElementById("inputcheckbox");

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkUsername()
    checkCpf()
    checkTel()
    checkEmail()
    checkPassword()
    checkPasswordTwo()
    checkCheckbox()
})

// Adicione eventos de entrada (input) para todos os campos
username.addEventListener('input', checkUsername);
cpf.addEventListener('input', checkCpf);
tel.addEventListener('input', checkTel);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);
passwordtwo.addEventListener('input', checkPasswordTwo);
inputcheckbox.addEventListener('input', checkCheckbox);

function checkUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo');
    } else if (usernameValue.length < 3) {
        setErrorFor(username, 'O campo deve ter no mínimo 3 caracteres');
    } else {
        setSuccessFor(username);
    }
}

function checkCpf() {
    const cpfValue = cpf.value.trim();
    if (cpfValue === '') {
        setErrorFor(cpf, 'Preencha esse campo');
    } else if (!isCpf(cpfValue)) {
        setErrorFor(cpf, 'CPF inválido');
    } else {
        setSuccessFor(cpf);
    }
}

function checkTel() {
    const telValue = tel.value.trim();
    if (telValue === '') {
        setErrorFor(tel, 'Preencha esse campo');
    } else if (!isTel(telValue)) {
        setErrorFor(tel, 'Telefone inválido');
    } else {
        setSuccessFor(tel);
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Preencha esse campo');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido');
    } else {
        setSuccessFor(email);
    }
}

function checkPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setErrorFor(password, 'Preencha esse campo');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Senha deve conter mais que 8 caracteres');
    } else if (!containsUpperCase(passwordValue)) {
        setErrorFor(password, 'A senha deve conter uma letra maiúscula');
    } else if (!containsLowerCase(passwordValue)) {
        setErrorFor(password, 'A senha deve conter uma letra minúscula');
    } else if (!containsNumber(passwordValue)) {
        setErrorFor(password, 'A senha deve conter um número');
    } else {
        setSuccessFor(password);
    }
}

function checkPasswordTwo() {
    const passwordValue = password.value.trim();
    const passwordtwoValue = passwordtwo.value.trim();
    if (passwordtwoValue === '') {
        setErrorFor(passwordtwo, 'Preencha esse campo');
    } else if (passwordValue !== passwordtwoValue) {
        setErrorFor(passwordtwo, 'Senhas não tão iguais');
    } else {
        setSuccessFor(passwordtwo);
    }
}

function checkCheckbox() {
    if (!inputcheckbox.checked) {
        setErrorFor(inputcheckbox.parentElement, 'Você deve concordar com os Termos de Uso e a Política de Privacidade');
    } else {
        clearErrorFor(inputcheckbox.parentElement);
    }
}


// Função da Validação do Formulário de Cadastro para Pessoa Física
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
// Função de Validação do CPF
function isCpf(cpf) {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}
// Função de Validação do Telefone celular
function isTel(tel) {
    return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(tel);
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

