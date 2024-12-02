package com.aparecida.aparecida.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.aparecida.aparecida.service.NewsletterService;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@RestController
@RequestMapping("/newsletter")
@Validated
public class NewsletterController {

    private final NewsletterService service;

    public NewsletterController(NewsletterService service) {
        this.service = service;
    }

    // Classe para receber os dados da requisição
    public static class NewsletterRequest {
        @NotBlank(message = "O e-mail é obrigatório.")
        @Email(message = "O e-mail deve ser válido.")
        private String email;

        @NotBlank(message = "O QR Code é obrigatório.")
        private String qrCode;

        // Getters e Setters
        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getQrCode() {
            return qrCode;
        }

        public void setQrCode(String qrCode) {
            this.qrCode = qrCode;
        }
    }

    // Endpoint para receber os dados
    @PostMapping
    public ResponseEntity<String> receiveNewsletterData(@RequestBody @Validated NewsletterRequest request) {
        // Salvar os dados usando o serviço
        service.saveNewsletter(request.getEmail(), request.getQrCode());

        // Retorna uma resposta de sucesso
        return ResponseEntity.ok("Dados recebidos e salvos com sucesso!");
    }
}