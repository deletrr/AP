package com.aparecida.aparecida.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aparecida.aparecida.model.Newsletter;
import com.aparecida.aparecida.repository.NewsletterRepository;

@Service
public class NewsletterService {

    private final NewsletterRepository repository;

    public NewsletterService(NewsletterRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Newsletter saveNewsletter(String email, String qrCode) {
        // Cria uma nova instância do modelo
        Newsletter newsletter = new Newsletter();
        newsletter.setEmail(email);
        newsletter.setQrCode(qrCode);

        // Salva no banco de dados MongoDB
        return repository.save(newsletter);
    }
}