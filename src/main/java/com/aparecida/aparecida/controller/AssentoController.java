package com.aparecida.aparecida.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.aparecida.aparecida.model.Assento;
import com.aparecida.aparecida.repository.AssentoRepository;
import com.aparecida.aparecida.service.AssentoService;

import java.util.List;



@RestController
@RequestMapping("/assentos")
public class AssentoController {

    @Autowired
    private AssentoRepository assentoRepository;

    @Autowired
    private AssentoService assentoService;

    // Endpoint para listar todos os assentos
    @GetMapping
    public List<Assento> listarAssentos() {
        return assentoRepository.findAll();
    }

  @PutMapping("/{id}")
public ResponseEntity<String> atualizarAssento(@PathVariable String id, @RequestBody Assento assentoAtualizado) {
    try {
        // Tenta buscar o assento no banco de dados
        Assento assento = assentoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Assento não encontrado"));
        
        // Atualiza as propriedades do assento
        assento.setStatus(assentoAtualizado.getStatus());  // Exemplo de atualização
        assentoRepository.save(assento);
        
        return ResponseEntity.ok("Assento atualizado com sucesso.");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body("Erro ao atualizar o assento: " + e.getMessage());
    }
}

    // Endpoint para reservar um assento
    @PostMapping("/{id}/reservar")
    public void reservarAssento(@PathVariable("id") String id_assento) {
        Assento assento = assentoRepository.findById(id_assento)
                .orElseThrow(() -> new RuntimeException("Assento não encontrado"));

        // Atualizar disponibilidade
        assento.setDisponivel(false);
        assentoRepository.save(assento);
    }

    @PostMapping("/criar")
    public String criarAssentos(@RequestBody Assento assentoRequest) {
        assentoService.criarAssentos(assentoRequest.getOnibusPlaca(), assentoRequest.getNumeroAssento());
        return "Assentos criados com sucesso para o ônibus " + assentoRequest.getOnibusPlaca();
    }
    

    @GetMapping("/assentos/{onibusPlaca}")
public ResponseEntity<List<Assento>> getAssentos(@PathVariable String onibusPlaca) {
    List<Assento> assentos = assentoService.findByOnibusPlaca(onibusPlaca);
    if (assentos.isEmpty()) {
        return ResponseEntity.noContent().build();
    }
    return ResponseEntity.ok(assentos);
    }

    @GetMapping("/assentos/{id}")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }

    @PutMapping("/{onibusPlaca}/{numeroAssento}")
public ResponseEntity<String> atualizarAssento(@PathVariable String onibusPlaca, @PathVariable int numeroAssento, @RequestBody Assento assentoAtualizado) {
    try {
        // Tenta buscar o assento no banco de dados com base no ônibus e número do assento
        Assento assento = assentoRepository.findByOnibusPlacaAndNumeroAssento(onibusPlaca, numeroAssento)
            .orElseThrow(() -> new RuntimeException("Assento não encontrado"));
        
        // Atualiza o status do assento
        assento.setStatus(assentoAtualizado.getStatus());  
        assentoRepository.save(assento);  // Salva a atualização no banco

        return ResponseEntity.ok("Assento atualizado com sucesso!");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao atualizar o assento.");
    }
}
@DeleteMapping("/excluir")
public ResponseEntity<String> excluirAssentos(@RequestParam String placa) {
    try {
        // Exclui todos os assentos do ônibus com a placa fornecida
        List<Assento> assentosExistentes = assentoRepository.findByOnibusPlaca(placa);
        if (assentosExistentes.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum assento encontrado para o ônibus com a placa: " + placa);
        }

        assentoRepository.deleteAll(assentosExistentes);  // Deleta todos os assentos encontrados
        return ResponseEntity.ok("Assentos excluídos com sucesso para o ônibus " + placa);
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body("Erro ao excluir os assentos: " + e.getMessage());
    }
}



    

}

