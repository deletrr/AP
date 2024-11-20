package com.aparecida.aparecida.service;

import com.aparecida.aparecida.model.Coordenador;
import com.aparecida.aparecida.repository.CoordenadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoordenadorService {

    @Autowired
    private CoordenadorRepository coordenadorRepository;

    // Get all coordenadores
    public List<Coordenador> getAllCoordenadores() {
        return coordenadorRepository.findAll();
    }

    // Get coordenador by id
    public Optional<Coordenador> getCoordenadorById(Long id) {
        return coordenadorRepository.findById(id);
    }

    // Create a new coordenador
    public Coordenador createCoordenador(Coordenador coordenador) {
        Coordenador savedCoordenador = coordenadorRepository.save(coordenador);
        System.out.println("Coordenador criado: " + savedCoordenador);
        return savedCoordenador;
    }

    // Update an existing coordenador
    public Coordenador updateCoordenador(Long id, Coordenador coordenador) {
        if (coordenadorRepository.existsById(id)) {
            coordenador.setId(id);
            return coordenadorRepository.save(coordenador);
        }
        return null;
    }

    // Delete coordenador by id
    public boolean deleteCoordenador(Long id) {
        if (coordenadorRepository.existsById(id)) {
            coordenadorRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
