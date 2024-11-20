package com.aparecida.aparecida.repository;

import com.aparecida.aparecida.model.Assento;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssentoRepository extends JpaRepository<Assento, Long> {
    // Você pode adicionar consultas personalizadas aqui, se necessário
    List<Assento> findByOnibusPlaca(String onibusPlaca);
    
}
