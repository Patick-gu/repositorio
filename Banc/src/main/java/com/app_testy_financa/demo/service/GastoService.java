package com.app_testy_financa.demo.service;

import com.app_testy_financa.demo.Model.Gasto;
import com.app_testy_financa.demo.Repository.GastoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class GastoService {

    @Autowired
    private GastoRepository gastoRepository;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    Gasto gasto = new Gasto();

    public Gasto criarGasto( Gasto gsto){
        String sql= "INSERT INTO gasto ( descricao, valor, data) VALUES ( ?, ?, ?)";
        jdbcTemplate.update(sql,
                gasto.getDescricao(),
                gasto.getData(),
                gasto.getValor()
                );
        return gasto;
    }
}
