package com.app_testy_financa.demo.Repository;

import com.app_testy_financa.demo.Model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<user, Long> {

}
