const form = document.getElementById('form1');
const username = document.getElementById('username');
const cpf = document.getElementById('cpf');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('passwordtwo');
const inputcheckbox = document.getElementById("inputcheckbox");

form.addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});

username.addEventListener('input', checkUsername);
cpf.addEventListener('input', checkCpf);
tel.addEventListener('input', checkTel);
email.addEventListener('input', checkEmail);
password.addEventListener('input', checkPassword);
passwordtwo.addEventListener('input', checkPasswordTwo);
inputcheckbox.addEventListener('change', checkCheckbox);

function validateForm() {
    let isValid = true;
    clearErrors(); 
    
    if (!checkUsername()) {
        isValid = false;
    }
    if (!checkCpf()) {
        isValid = false;
    }
    if (!checkTel()) {
        isValid = false;
    }
    if (!checkEmail()) {
        isValid = false;
    }
    if (!checkPassword()) {
        isValid = false;
    }
    if (!checkPasswordTwo()) {
        isValid = false;
    }
    if (!checkCheckbox()) {
        isValid = false;
    }
    
    return isValid;
}

function clearErrors() {
}

function checkUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === '') {
        setErrorFor(username, 'Preencha esse campo');
        return false;
    } else if (usernameValue.length < 3) {
        setErrorFor(username, 'O campo deve ter no mínimo 3 caracteres');
        return false;
    } else {
        setSuccessFor(username);
        return true;
    }
}

function checkCpf() {
    const cpfValue = cpf.value.trim();
    if (cpfValue === '') {
        setErrorFor(cpf, 'Preencha esse campo');
        return false;
    } else if (!isCpf(cpfValue)) {
        setErrorFor(cpf, 'CPF inválido');
        return false;
    } else {
        setSuccessFor(cpf);
        return true;
    }
}

function checkTel() {
    const telValue = tel.value.trim();
    if (telValue === '') {
        setErrorFor(tel, 'Preencha esse campo');
        return false;
    } else if (!isTel(telValue)) {
        setErrorFor(tel, 'Telefone inválido');
        return false;
    } else {
        setSuccessFor(tel);
        return true;
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    if (emailValue === '') {
        setErrorFor(email, 'Preencha esse campo');
        return false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido');
        return false;
    } else {
        setSuccessFor(email);
        return true;
    }
}

function checkPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue === '') {
        setErrorFor(password, 'Preencha esse campo');
        return false;
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'Senha deve conter mais que 8 caracteres');
        return false;
    } else if (!containsUpperCase(passwordValue)) {
        setErrorFor(password, 'A senha deve conter uma letra maiúscula');
        return false;
    } else if (!containsLowerCase(passwordValue)) {
        setErrorFor(password, 'A senha deve conter uma letra minúscula');
        return false;
    } else if (!containsNumber(passwordValue)) {
        setErrorFor(password, 'A senha deve conter um número');
        return false;
    } else {
        setSuccessFor(password);
        return true;
    }
}

function checkPasswordTwo() {
    const passwordValue = password.value.trim();
    const passwordtwoValue = passwordtwo.value.trim();
    if (passwordtwoValue === '') {
        setErrorFor(passwordtwo, 'Preencha esse campo');
        return false;
    } else if (passwordValue !== passwordtwoValue) {
        setErrorFor(passwordtwo, 'Senhas não são iguais');
        return false;
    } else {
        setSuccessFor(passwordtwo);
        return true;
    }
}

function checkCheckbox() {
    if (!inputcheckbox.checked) {
        setErrorFor(inputcheckbox.parentElement, 'Você deve concordar com os Termos de Uso e a Política de Privacidade');
        return false;
    } else {
        clearErrorFor(inputcheckbox.parentElement);
        return true;
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'input-box error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-box success';
}

function clearErrorFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'input-box';
}

function isEmail(email) {
    return /^(?:[A-Z a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}

function isCpf(cpf) {
   return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf);
}
function isCpf(cpf){
  cpf = cpf.replace(/\D/g, '');
  if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  var result = true;
  [9,10].forEach(function(j){
      var soma = 0, r;
      cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
          soma += parseInt(e) * ((j+2)-(i+1));
      });        r = soma % 11;
      r = (r <2)?0:11-r;
      if(r != cpf.substring(j, j+1)) result = false;
  });    return result;
}

function isTel(tel) {
   return /^\(\d{2}\) \d{4,5}-\d{4}$/.test(tel);
}

function containsUpperCase(str) {
   return /[A-Z]/.test(str)
}

function containsLowerCase(str) {
    return /[A-Z]/.test(str)
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