package com.aparecida.aparecida.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests()
                // Permite acesso a todos os arquivos estáticos (CSS, JS, Imagens, Vídeos)
                .requestMatchers("/css/**", "/js/**", "/imagens/**", "/videos/**").permitAll()  
                // Permite acesso à página de login, recuperação de senha e outras páginas sem autenticação
                .requestMatchers("/login.html", "/Cadastro.html", "/RecuperarSenha.html", "/", "/index.html").permitAll()  
                // Exige autenticação para todas as outras rotas
                .anyRequest().authenticated()  
            .and()
            .formLogin()
                .loginPage("/login.html")  // Define a página de login
                .permitAll()  // Permite acesso à página de login
            .and()
            .logout()
                .permitAll();  // Permite logout para todos os usuários

        return http.build();
    }
}