package com.aparecida.aparecida.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aparecida.aparecida.model.Contato;

@Repository
public interface ContatoRepository extends MongoRepository<Contato, String> {
    // Métodos customizados, se necessário
}