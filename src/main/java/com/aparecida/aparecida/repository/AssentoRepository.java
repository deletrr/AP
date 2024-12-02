package com.aparecida.aparecida.repository;

import com.aparecida.aparecida.model.Assento;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AssentoRepository extends MongoRepository<Assento, String> {
    
    List<Assento> findByOnibusPlaca(String onibusPlaca);
    List<Assento> findByNumeroAssento(Integer numeroAssento);

    Optional<Assento> findByOnibusPlacaAndNumeroAssento(String onibusPlaca, int numeroAssento);
}
