package com.aparecida.aparecida.controller;

import com.aparecida.aparecida.model.Onibus;
import com.aparecida.aparecida.service.OnibusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/onibus")
public class OnibusController {

    @Autowired
    private OnibusService onibusService;

    // POST - Criação de um novo ônibus
    @PostMapping
    public ResponseEntity<Onibus> createOnibus(@RequestBody Onibus onibus) {
        Onibus savedOnibus = onibusService.createOnibus(onibus);
        return ResponseEntity.ok(savedOnibus);
    }

    // GET - Obter todos os ônibus
    @GetMapping("/onibus")
    public ResponseEntity<List<Onibus>> getAllOnibus() {
        List<Onibus> onibusList = onibusService.getAllOnibus();
        return ResponseEntity.ok(onibusList);
    }

    // GET - Obter ônibus por ID
    @GetMapping("/{id}")
    public ResponseEntity<Onibus> getOnibusById(@PathVariable Long id) {
        Optional<Onibus> onibus = onibusService.getOnibusById(id);
        return onibus.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    // PUT - Atualizar um ônibus existente
    @PutMapping("/{id}")
    public ResponseEntity<Onibus> updateOnibus(@PathVariable Long id, @RequestBody Onibus onibusDetails) {
        Optional<Onibus> updatedOnibus = onibusService.updateOnibus(id, onibusDetails);
        return updatedOnibus.map(ResponseEntity::ok)
                            .orElse(ResponseEntity.notFound().build());
    }

    // DELETE - Excluir um ônibus
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOnibus(@PathVariable Long id) {
        boolean deleted = onibusService.deleteOnibus(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
