package com.Ecommerce.servico;

import com.Ecommerce.modelo.PessoaFisica;

public interface PessoaFisicaServico {
	
	public PessoaFisica createUser(PessoaFisica pessoaFisica);
	
	public boolean checkEmail(String email);
	
	public boolean checkCpf(String cpf);
	
	

}
