package com.Ecommerce.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Ecommerce.modelo.PessoaFisica;

public interface PessoaFisicaRepositorio extends JpaRepository<PessoaFisica, Long>{
	
	public boolean existsByEmail(String email);

	public PessoaFisica findByEmail(String email);
	
}
