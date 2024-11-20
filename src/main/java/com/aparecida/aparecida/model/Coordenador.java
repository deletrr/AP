package com.aparecida.aparecida.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "coordenador")
public class Coordenador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "nomeco", nullable = false)
    private String nomeco;

    public String getNomeco() {
        return nomeco;
    }

    public void setNomeco(String nomeco) {
        this.nomeco = nomeco;
    }

    @Column(name = "numero_contato", nullable = false, length = 15)
    private String numero_contato;

    public String getNumero_contato() {
        return numero_contato;
    }

    public void setNumero_contato(String numero_contato) {
        this.numero_contato = numero_contato;
    }

    @Column(name = "foto", nullable = false)
    private String foto;

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    @Column(name = "modelo", nullable = false, length = 50)
    private String modelo;

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    @Column(name = "onibus_placa", nullable = false, unique = true, length = 20)
    private String onibus_placa;

    public String getOnibus_placa() {
        return onibus_placa;
    }

    public void setOnibus_placa(String onibus_placa) {
        this.onibus_placa = onibus_placa;
    }

    @Column(name = "numero_assentos", nullable = false)
    private Integer numero_assentos;

    public Integer getNumero_assentos() {
        return numero_assentos;
    }

    public void setNumero_assentos(Integer numero_assentos) {
        this.numero_assentos = numero_assentos;
    }

}
