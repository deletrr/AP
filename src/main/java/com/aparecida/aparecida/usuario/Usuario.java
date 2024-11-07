package com.aparecida.aparecida.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private String tipo_usuario;

@GetMapping
    
    public CharSequence getSenha() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getSenha'");
    }
    public void setSenha(String senhaCriptografada) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setSenha'");
    }
}



