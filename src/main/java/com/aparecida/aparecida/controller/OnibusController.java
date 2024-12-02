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

    
    @PostMapping
    public ResponseEntity<Onibus> createOnibus(@RequestBody Onibus onibus) {
        Onibus savedOnibus = onibusService.createOnibus(onibus);
        return ResponseEntity.ok(savedOnibus);
    }

    
    @GetMapping("/onibus")
    public ResponseEntity<List<Onibus>> getAllOnibus() {
        List<Onibus> onibusList = onibusService.getAllOnibus();
        return ResponseEntity.ok(onibusList);
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<Onibus> getOnibusById(@PathVariable String id) {
        Optional<Onibus> onibus = onibusService.getOnibusById(id);
        return onibus.map(ResponseEntity::ok)
                     .orElse(ResponseEntity.notFound().build());
    }

    // PUT 
    @PutMapping("/{id}")
    public ResponseEntity<Onibus> updateOnibus(@PathVariable String id, @RequestBody Onibus onibusDetails) {
        Optional<Onibus> updatedOnibus = onibusService.updateOnibus(id, onibusDetails);
        return updatedOnibus.map(ResponseEntity::ok)
                            .orElse(ResponseEntity.notFound().build());
    }

    // DELETE 
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOnibus(@PathVariable String id) {
        boolean deleted = onibusService.deleteOnibus(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
