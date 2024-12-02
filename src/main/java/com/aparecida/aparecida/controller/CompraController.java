package com.aparecida.aparecida.controller;

import com.aparecida.aparecida.model.Compra;
import com.aparecida.aparecida.service.CompraService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/compras")
public class CompraController {

    @Autowired
    private CompraService compraService;

    @GetMapping
    public List<Compra> listarCompras() {
        return compraService.listarCompras();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Compra> buscarCompraPorId(@PathVariable String id) {
        Optional<Compra> compra = compraService.buscarCompraPorId(id);
        return compra.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Compra salvarCompra(@RequestBody Compra compra) {
        return compraService.salvarCompra(compra);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Compra> atualizarCompra(@PathVariable String id, @RequestBody Compra compra) {
        Compra compraAtualizada = compraService.atualizarCompra(id, compra);
        return compraAtualizada != null ? ResponseEntity.ok(compraAtualizada) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarCompra(@PathVariable String id) {
        if (compraService.buscarCompraPorId(id).isPresent()) {
            compraService.deletarCompra(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}