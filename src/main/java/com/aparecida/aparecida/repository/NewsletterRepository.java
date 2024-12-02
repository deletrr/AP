package com.aparecida.aparecida.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.aparecida.aparecida.model.Newsletter;

@Repository
public interface NewsletterRepository extends MongoRepository<Newsletter, String> {
    // Métodos customizados, se necessário
}