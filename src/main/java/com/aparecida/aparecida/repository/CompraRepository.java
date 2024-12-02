package com.aparecida.aparecida.repository;

import com.aparecida.aparecida.model.Compra;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompraRepository extends MongoRepository<Compra, String> {

}