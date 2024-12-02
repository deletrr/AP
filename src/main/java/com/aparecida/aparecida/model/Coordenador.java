package com.aparecida.aparecida.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "coordenador")
public class Coordenador {

    @Id
    private String id; 

    private String nomeco;

    private String numero_contato;

    private String foto;

    private String modelo;

    private String onibus_placa;

    private Integer numero_assentos;

    // Getters e Setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNomeco() {
        return nomeco;
    }

    public void setNomeco(String nomeco) {
        this.nomeco = nomeco;
    }

    public String getNumero_contato() {
        return numero_contato;
    }

    public void setNumero_contato(String numero_contato) {
        this.numero_contato = numero_contato;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getOnibus_placa() {
        return onibus_placa;
    }

    public void setOnibus_placa(String onibus_placa) {
        this.onibus_placa = onibus_placa;
    }

    public Integer getNumero_assentos() {
        return numero_assentos;
    }

    public void setNumero_assentos(Integer numero_assentos) {
        this.numero_assentos = numero_assentos;
    }
}
