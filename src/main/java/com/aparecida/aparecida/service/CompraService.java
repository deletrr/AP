package com.aparecida.aparecida.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aparecida.aparecida.model.Compra;
import com.aparecida.aparecida.repository.CompraRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CompraService {

    @Autowired
    private CompraRepository compraRepository;

    public List<Compra> listarCompras() {
        return compraRepository.findAll();
    }

    public Optional<Compra> buscarCompraPorId(Long id) {
        return compraRepository.findById(id);
    }

    public Compra salvarCompra(Compra compra) {
        return compraRepository.save(compra);
    }

    public void deletarCompra(Long id) {
        compraRepository.deleteById(id);
    }

    public Compra atualizarCompra(Long id, Compra compra) {
        if (compraRepository.existsById(id)) {
            compra.setId(id);
            return compraRepository.save(compra);
        }
        return null;  // ou pode lançar uma exceção
    }
}
