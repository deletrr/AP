package com.aparecida.aparecida.repository;

import com.aparecida.aparecida.model.Onibus;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OnibusRepository extends MongoRepository<Onibus, String> {
    Onibus findByPlaca(String placa);
}
