const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkEmail()
    checkPassword()
})

    email.addEventListener('input', checkEmail);
    password.addEventListener('input', checkPassword);

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


// Função da Validação do Formulário de Login
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