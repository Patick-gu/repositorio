package com.app_testy_financa.demo.domain.DTOS;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotNull;


import java.io.Serializable;
import java.time.LocalDate;

public class entradasDTO implements Serializable {
    private static final long SerialVersionUID= 1L;

    private Long id;
    @JsonFormat(pattern = "dd/MM")
    private String data;
    @NotNull(message="o campo nao pode ser vazio")
    private Double valor;
    @NotNull(message="o campo nao pode ser vazio")
    private String descricao;

    public entradasDTO() {
    }

    public entradasDTO(Long id, String data, Double valor, String descricao) {
        this.id = id;
        this.data = data;
        this.valor = valor;
        this.descricao = descricao;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
