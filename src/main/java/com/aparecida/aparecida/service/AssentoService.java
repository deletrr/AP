package com.aparecida.aparecida.service;

import com.aparecida.aparecida.model.Assento;
import com.aparecida.aparecida.repository.AssentoRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AssentoService {

    @Autowired
    private AssentoRepository assentoRepository;

    // Método para criar os assentos para um ônibus
    public void criarAssentos(String onibusPlaca, int numeroAssentos) {
        for (int i = 1; i <= numeroAssentos; i++) {
            Assento assento = new Assento();
            assento.setOnibusPlaca(onibusPlaca);
            assento.setNumeroAssento(i);
            assento.setStatus("disponivel"); // Status inicial é "disponível"
            // Salvar o assento no banco de dados
            assentoRepository.save(assento);
        }
    }
          
          
        
    // Outros métodos relacionados a assentos, como reservar, finalizar reserva, etc.


        public List<Assento> findByOnibusPlaca(String onibusPlaca) {
            // TODO Auto-generated method stub
            throw new UnsupportedOperationException("Unimplemented method 'findByOnibusPlaca'");
        }
        public List<Assento> obterAssentosPorOnibus(String onibusPlaca) {
            return assentoRepository.findByOnibusPlaca(onibusPlaca);  // Chama o repositório para buscar os assentos
        }
}
