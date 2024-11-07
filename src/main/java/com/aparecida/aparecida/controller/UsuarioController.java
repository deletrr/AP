package com.aparecida.aparecida.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aparecida.aparecida.model.Usuario;
import com.aparecida.aparecida.service.UsuarioService;

@RestController
@RequestMapping("/Usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@RequestBody Usuario usuario) {
        Usuario usuarioSalvo = usuarioService.salvar(usuario);
        URI location = URI.create("/usuario/" + usuarioSalvo.getId());
        return ResponseEntity.created(location).body(usuarioSalvo);
    }
    @PostMapping("/login")
public ResponseEntity<String> login(@RequestBody Usuario usuario) {
    boolean autenticado = usuarioService.autenticar(usuario.getEmail(), usuario.getSenha());
    if (autenticado) {
        return ResponseEntity.ok("Login successful");
    } else {
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}
}
