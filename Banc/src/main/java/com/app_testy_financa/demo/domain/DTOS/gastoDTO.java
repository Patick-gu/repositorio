package com.app_testy_financa.demo.domain.DTOS;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;

public class gastoDTO implements Serializable {
    private final long SerialversionUID= 1L;

    private Long id;
    private String descricao;
    private Double valor;
    @JsonFormat(pattern = "dd/MM")
    private String data;

    public gastoDTO() {
    }

    public gastoDTO(Double valor, String descricao, Long id, String data) {
        this.valor = valor;
        this.descricao = descricao;
        this.id = id;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
