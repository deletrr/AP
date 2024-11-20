package com.aparecida.aparecida.repository;

import com.aparecida.aparecida.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraRepository extends JpaRepository<Compra, Long> {
    // Métodos adicionais de consulta podem ser adicionados aqui, se necessário
}
