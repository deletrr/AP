package com.aparecida.aparecida.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.aparecida.aparecida.model.Usuario;
import com.aparecida.aparecida.repository.UsuarioRepository;

@Service
public class UsuarioService {
    @Autowired

    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario) {
        String senhaCriptografada = new BCryptPasswordEncoder().encode(usuario.getSenha());
        usuario.setSenha(senhaCriptografada);
        return usuarioRepository.save(usuario);
    }
    public boolean autenticar(String email, String senha) {
        Usuario usuario = usuarioRepository.findByEmail(email);
        if (usuario != null) {
            return new BCryptPasswordEncoder().matches(senha, usuario.getSenha());
        }
        return false;
    }
    

    }