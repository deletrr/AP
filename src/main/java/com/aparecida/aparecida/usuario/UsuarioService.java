package com.aparecida.aparecida.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {
    @Autowired

    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario){

        String senhaCriptografada = new BCryptPasswordEncoder().encode(usuario.getSenha());

        usuario.setSenha(senhaCriptografada);
        return usuarioRepository.save(usuario);
    }

}
