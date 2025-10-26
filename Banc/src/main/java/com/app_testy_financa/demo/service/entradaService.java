package com.app_testy_financa.demo.service;
import com.app_testy_financa.demo.Model.Entradas;
import com.app_testy_financa.demo.Repository.EntradaRepository;
import com.app_testy_financa.demo.domain.DTOS.entradasDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class entradaService {
    @Autowired
    private EntradaRepository entradaRepository;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    Entradas entradas =new Entradas();

    public Entradas entradaCreate( Entradas entradas) {
        String sql = "INSERT INTO entradas ( descricao, valor, data) VALUES ( ?, ?, ?)";
        jdbcTemplate.update(sql,
                entradas.getDescricao(),
                entradas.getValor(),
                entradas.getData()
        );
        return entradas;
    }
    public Double CalcularSaldo(Entradas entradas){
        String sql="SELECT SUM(valor) FROM entradas";
        return jdbcTemplate.queryForObject(sql, Double.class);
    }
}
