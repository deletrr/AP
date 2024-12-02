package com.aparecida.aparecida.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "assentos")
public class Assento {

    @Id
    private String id;

    private String onibusPlaca;

    private Integer numeroAssento;

    private String status;

    // Getters e Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOnibusPlaca() {
        return onibusPlaca;
    }

    public void setOnibusPlaca(String onibusPlaca) {
        this.onibusPlaca = onibusPlaca;
    }

    public Integer getNumeroAssento() {
        return numeroAssento;
    }

    public void setNumeroAssento(Integer numeroAssento) {
        this.numeroAssento = numeroAssento;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setDisponivel(boolean disponivel) {
        this.status = disponivel ? "disponível" : "indisponível";
    }

    public Assento orElseThrow(Object object) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'orElseThrow'");
    }
    
}
