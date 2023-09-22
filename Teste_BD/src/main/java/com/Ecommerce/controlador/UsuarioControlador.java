package com.Ecommerce.controlador;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
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

	
	@GetMapping("/") 
	public String home() {
		return "user/home";
	}
	
}
