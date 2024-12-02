package com.aparecida.aparecida.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "onibus")
public class Onibus {

    @Id
    private String id_onibus; 

    private String nome;
    private String placa;

    // Getters e Setters
    public String getId_onibus() {
        return id_onibus;
    }

    public void setId_onibus(String id_onibus) {
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
        return "ID: " + id_onibus + ", Nome: " + nome + ", Placa: " + placa;
    }

    // Atualiza os dados do ônibus
    public void updateOnibus(String nome) {
        if (nome != null) this.nome = nome;
    }

    // Exclui os dados do ônibus (marcando como nulo)
    public void deleteOnibus() {
        this.id_onibus = null;
        this.nome = null;
        this.placa = null;
    }
}
