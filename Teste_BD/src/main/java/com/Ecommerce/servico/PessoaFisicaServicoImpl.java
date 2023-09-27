package com.Ecommerce.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.Ecommerce.modelo.PessoaFisica;
import com.Ecommerce.repositorio.PessoaFisicaRepositorio;

@Service
public class PessoaFisicaServicoImpl implements PessoaFisicaServico{

	@Autowired
	private PessoaFisicaRepositorio pessoaFRepo;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public PessoaFisica createUser(PessoaFisica pessoaFisica) {
		pessoaFisica.setSenha(passwordEncoder.encode(pessoaFisica.getSenha()));
		pessoaFisica.setRole("ATIVO");
		return pessoaFRepo.save(pessoaFisica);
	}
	

	@Override
	public boolean checkEmail(String email) {
	
		return pessoaFRepo.existsByEmail(email);
	}

}
