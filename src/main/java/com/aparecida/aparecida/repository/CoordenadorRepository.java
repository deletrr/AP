package com.aparecida.aparecida.repository;

import com.aparecida.aparecida.model.Coordenador;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CoordenadorRepository extends MongoRepository<Coordenador, String> {
    
}
