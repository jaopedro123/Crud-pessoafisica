package com.Ecommerce.controlador;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.Ecommerce.modelo.PessoaFisica;
import com.Ecommerce.servico.PessoaFisicaServico;

@Controller
public class HomeControlador {
	
	
	@Autowired
	private PessoaFisicaServico pessoaFisicaServico;

	@GetMapping("/Atendimento")
	public String atendimento() {
		return "Atendimento";
	}
	
	@GetMapping("/FaleConosco")
	public String faleConosco() {
		return "FaleConosco";
	}

	@GetMapping("/Config")
	public String config() {
		return "Config";
	}

	@GetMapping("/Favoritos")
	public String favoritos() {
		return "Favoritos";
	}

	@GetMapping("/Carrinho")
	public String carrinho() {
		return "Carrinho";
	}
	
	@GetMapping("/Pagamento")
	public String pagamento() {
		return "Pagamento";
	}

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/Politica-De-Privacidade")
	public String politicaDePrivacidade() {
		return "Politica-De-Privacidade";
	}

	@GetMapping("/TermosDeUso")
	public String termosDeUso() {
		return "TermosDeUso";
	}

	@GetMapping("/SobreNos")
	public String sobreNos() {
		return "SobreNos";
	}

	@GetMapping("/Cadastro")
	public String cadastro() {
		return "Cadastro";
	}

	@GetMapping("/CadastroJurídico")
	public String cadastroJurídico() {
		return "CadastroJurídico";
	}

	@GetMapping("/signin")
	public String login() {
		return "login";
	}

	@GetMapping("/Esqueci-a-Senha")
	public String esqueciASenha() {
		return "Esqueci-a-Senha";
	}
	
	//CADASTRO

	
	@PostMapping("/createUser")
	public String createuser(@ModelAttribute PessoaFisica pessoaFisica, HttpSession session) {
		
		//System.out.println(pessoaFisica);
		
		boolean f = pessoaFisicaServico.checkEmail(pessoaFisica.getEmail());
		boolean f1 = pessoaFisicaServico.checkCpf(pessoaFisica.getCpf());
				
		if(f) {
			session.setAttribute("msg", "E-mail já Cadastrado");
			return "redirect:/Cadastro";
		}
		if(f1) {
			session.setAttribute("msg", "CPF já Cadastrado");
			return "redirect:/Cadastro";
		}
		else {
			pessoaFisica = pessoaFisicaServico.createUser(pessoaFisica);	
		}
		return "redirect:/signin";
	}

}
