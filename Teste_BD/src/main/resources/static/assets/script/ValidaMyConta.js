	var inputNomeCompleto = document.getElementById("nomeCompleto");
	var botaoAtualizar = document.querySelector(".atualizaDados");
	var erroNomeCompleto = document.getElementById("erroNomeCompleto");
	
	erroNomeCompleto.classList.remove("erro-mensagem-nome");
	
	inputNomeCompleto.addEventListener("input", function() {
	    var valor = inputNomeCompleto.value;
	    valor = valor.replace(/[^a-zA-ZÀ-ÖØ-öø-ÿ\s]/g, '');
	
	    if (valor.length < 3) {
	        valor = valor.substring(0, 3);
	        erroNomeCompleto.textContent = "O seu nome deve ter pelo menos 3 caracteres.";
	        erroNomeCompleto.classList.add("erro-mensagem-nome");
	    } else {
	        erroNomeCompleto.textContent = "";
	        erroNomeCompleto.classList.remove("erro-mensagem-nome");
	    }
	
	    inputNomeCompleto.value = valor;
	    botaoAtualizar.disabled = valor.length < 3;
	    
	});
	var telefoneInput = document.getElementById("telefone");
	var erroTelefone = document.getElementById("erroTelefone");
	
	erroTelefone.classList.remove("erro-mensagem-telefone");
	
	telefoneInput.addEventListener("input", function() {
	    var telefone = this.value.replace(/\D/g, ""); 
	    var maxLength = 11;
	
	    if (telefone.length > maxLength) {
	        telefone = telefone.slice(0, maxLength);
	    }
	    if (telefone.length <= 10) {
	        telefone = telefone.replace(/(\d{2})(\d{0,4})(\d{0,4})/, "($1) $2-$3");
	        erroTelefone.textContent = "O número de telefone deve ter pelo menos 11 dígitos.";
	        erroTelefone.classList.add("erro-mensagem-telefone");
	    } 
	    else {
	        erroTelefone.textContent = "";
	        erroTelefone.classList.remove("erro-mensagem-telefone");
	        telefone = telefone.replace(/(\d{2})(\d{0,5})(\d{0,4})/, "($1) $2-$3");
	    }
    if (event.inputType === 'deleteContentBackward' || event.inputType === 'deleteContentForward') {
    }
     else {  
        this.value = telefone;
    }
	    botaoAtualizar.disabled = telefone.length < 15;
	});
	
inputNomeCompleto.addEventListener("input", validarCampos);
telefoneInput.addEventListener("input", validarCampos);

function validarCampos() {
    var nomeCompleto = inputNomeCompleto.value.trim();
    var telefone = telefoneInput.value.replace(/\D/g, '');

    botaoAtualizar.disabled = nomeCompleto.length < 3 || telefone.length < 11;
}
