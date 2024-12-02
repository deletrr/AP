package com.aparecida.aparecida.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.aparecida.aparecida.model.Contato;
import com.aparecida.aparecida.repository.ContatoRepository;

@Service
public class ContatoService {

    private final ContatoRepository repository;

    public ContatoService(ContatoRepository repository) {
        this.repository = repository;
    }

    public Contato saveContato(String name, String email, String message) {
       
        Contato contato = new Contato();
        contato.setName(name);
        contato.setEmail(email);
        contato.setMessage(message);

        
        return repository.save(contato);
    }

    public List<Contato> getAllContatos() {
        return repository.findAll();
    }

    public static boolean deleteContatoById(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteContatoById'");
    }


    
}