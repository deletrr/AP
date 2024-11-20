package com.aparecida.aparecida.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Onibus {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_onibus;
    private String nome;
    private String placa;
    

    // Getters e Setters
    public Long getId_onibus() {
        return id_onibus;
    }

    public void setId_onibus(Long id_onibus) {
        this.id_onibus = id_onibus;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

   
    public String getPlaca() {
		return placa;
	}

	public void setPlaca(String placa) {
		this.placa = placa;
	}
    
    public String readOnibus() {
        return "ID: " + id_onibus + ", Nome: " + nome + ", placa:" + placa;
    }

    // UPDATE
    public void updateOnibus(String nome) {
        if (nome != null) this.nome = nome;
        
    }

    // DELETE
    public void deleteOnibus() {
        this.id_onibus = null;
        this.nome = null;
        this.placa = null;        
    }

	
}
