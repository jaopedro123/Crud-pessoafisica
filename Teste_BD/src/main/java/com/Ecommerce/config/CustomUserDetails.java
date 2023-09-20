package com.Ecommerce.config;

import java.util.Arrays;
import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.Ecommerce.modelo.PessoaFisica;

public class CustomUserDetails implements UserDetails{

	private PessoaFisica pessoaFisica;

	public CustomUserDetails(PessoaFisica pessoaFisica) {
		super();
		this.pessoaFisica = pessoaFisica;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		SimpleGrantedAuthority simpleGrantedAuthority = new SimpleGrantedAuthority(pessoaFisica.getRole());
		return Arrays.asList(simpleGrantedAuthority);
	}

	@Override
	public String getPassword() {

		return pessoaFisica.getSenha();
	}

	@Override
	public String getUsername() {

		return pessoaFisica.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {

		return true;
	}

	@Override
	public boolean isAccountNonLocked() {

		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {

		return true;
	}

	@Override
	public boolean isEnabled() {

		return true;
	}
	
	

}
