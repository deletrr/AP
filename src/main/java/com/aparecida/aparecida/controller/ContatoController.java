package com.aparecida.aparecida.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.aparecida.aparecida.model.Contato;
import com.aparecida.aparecida.service.ContatoService;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;



@RestController
@RequestMapping("/contato")
@Validated
public class ContatoController {

    private final ContatoService service;

    public ContatoController(ContatoService service) {
        this.service = service;
    }

    
    public static class ContatoRequest {
        @NotBlank(message = "O nome é obrigatório.")
        private String name;

        @NotBlank(message = "O e-mail é obrigatório.")
        @Email(message = "O e-mail deve ser válido.")
        private String email;

        @NotBlank(message = "A mensagem é obrigatória.")
        private String message;

        // Getters e Setters
        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }

    
    @PostMapping
    public ResponseEntity<String> receiveContatoData(@RequestBody @Validated ContatoRequest request) {
        
        service.saveContato(request.getName(), request.getEmail(), request.getMessage());

        
        return ResponseEntity.ok("Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.");
    }
    
    @GetMapping
public ResponseEntity<List<Contato>> getAllContatos() {
    List<Contato> contatos = service.getAllContatos();
    if (contatos.isEmpty()) {
        return ResponseEntity.noContent().build(); 
    }
    return ResponseEntity.ok(contatos);
}

@DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContato(@PathVariable String id) {
        boolean isDeleted = ContatoService.deleteContatoById(id);
        if (isDeleted) {
            return ResponseEntity.noContent().build(); // retorna 204 se a exclusão for bem-sucedida
        } else {
            return ResponseEntity.notFound().build(); // retorna 404 se o ID não existir
        }

    
    
}}