package com.Ecommerce.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.Ecommerce.modelo.PessoaFisica;
import com.Ecommerce.repositorio.PessoaFisicaRepositorio;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	private PessoaFisicaRepositorio pessoaFisicaRepositorio;
	
	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
		PessoaFisica pessoaFisica = pessoaFisicaRepositorio.findByEmail(email);
		
		if(pessoaFisica != null) {
			return new CustomUserDetails(pessoaFisica);
		}
		
		 throw new UsernameNotFoundException("Usuario nao encontrado");
	}

}
