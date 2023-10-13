package com.Ecommerce.controlador;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.Ecommerce.modelo.PessoaFisica;
import com.Ecommerce.repositorio.PessoaFisicaRepositorio;

@Controller
@RequestMapping("/user")
public class UsuarioControlador {
	
	@Autowired
	private PessoaFisicaRepositorio pessoaFisicaRepositorio;

	@ModelAttribute
	private void userDetails(Model m, Principal p) {
		String email = p.getName();
		PessoaFisica pessoaFisica = pessoaFisicaRepositorio.findByEmail(email);
		m.addAttribute("user", pessoaFisica);
	}
	
	@GetMapping("/Conta")
	public String conta() {
		return "user/Conta";
	}

	@GetMapping("/Conta/edit")
	public String editarConta(Model model, Principal principal) {
	    String email = principal.getName();
	    PessoaFisica pessoaFisica = pessoaFisicaRepositorio.findByEmail(email);
	    model.addAttribute("user", pessoaFisica);
	    return "user/editarConta";
	}
	
	@PostMapping("/Conta/edit")
	public String atualizarConta(@ModelAttribute("user") PessoaFisica pessoaFisica) {
	    pessoaFisicaRepositorio.save(pessoaFisica);
	    return "redirect:";
	}
	
	@PostMapping("/Conta/inativar")
	public String inativarConta(Model model, Principal principal) {
	    String email = principal.getName();
	    PessoaFisica pessoaFisica = pessoaFisicaRepositorio.findByEmail(email);
	    pessoaFisica.setSenha("usuario inativo");
	    pessoaFisicaRepositorio.save(pessoaFisica);
	    return "redirect:/logout";
	}

	@GetMapping("/") 
	public String home() {
		return "user/home";
	}
	
}

//Deleçao do usuario do BD

//JAVA

/*	
@PostMapping("/Conta/delete")
public String excluirConta(Principal principal) {
    String email = principal.getName();
    PessoaFisica pessoaFisica = pessoaFisicaRepositorio.findByEmail(email);
    pessoaFisicaRepositorio.delete(pessoaFisica);
    return "redirect:/logout"; 
}
*/

//HTML

/*
<form method="post" action="/user/Conta/delete">	
<button type="submit" class="delete-button">Deletar Usuário</button>
</form>
*/



//JAVASCRIPT

/*
    document.addEventListener("DOMContentLoaded", function () {
        const deleteButton = document.querySelector(".delete-button");
        deleteButton.addEventListener("click", function (event) {
            const confirmDelete = confirm('Tem certeza que deseja excluir sua conta?');
            if (!confirmDelete) {
                event.preventDefault();
            }
        });
    });
 */