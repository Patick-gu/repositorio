package com.app_testy_financa.demo.Repository;

import com.app_testy_financa.demo.Model.Gasto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GastoRepository extends JpaRepository<Gasto, Long> {

}
