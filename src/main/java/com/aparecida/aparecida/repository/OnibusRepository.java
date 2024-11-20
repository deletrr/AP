package com.aparecida.aparecida.repository;

import com.aparecida.aparecida.model.Onibus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnibusRepository extends JpaRepository<Onibus, Long> {
    Onibus findByPlaca(String placa);
}
