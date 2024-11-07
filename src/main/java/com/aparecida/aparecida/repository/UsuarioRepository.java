package com.aparecida.aparecida.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aparecida.aparecida.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);

}
