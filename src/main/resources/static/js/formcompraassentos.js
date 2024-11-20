fetch("http://localhost:8080/assentos")
      .then(response => response.json())
      .then(assentos => {
        const onibusSelect = document.getElementById('onibus');
        // Extrai as placas únicas dos ônibus
        const placas = [...new Set(assentos.map(assento => assento.onibusPlaca))];
        
        // Preenche o select de ônibus com as placas
        placas.forEach(placa => {
          const option = document.createElement('option');
          option.value = placa;
          option.textContent = placa;
          onibusSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error('Erro ao carregar os ônibus:', error);
      });

    // Preenche o select de assentos quando um ônibus é selecionado
    document.getElementById('onibus').addEventListener('change', function() {
      const onibusPlaca = this.value; // Pega a placa do ônibus selecionado
      const assentoSelect = document.getElementById('assento'); // Referência para o campo de assentos
      
      assentoSelect.innerHTML = ''; // Limpa a lista de assentos antes de preenchê-la
      const defaultOption = document.createElement('option');
      defaultOption.value = '';
      defaultOption.textContent = 'Selecione um assento';
      assentoSelect.appendChild(defaultOption);

      // Verifica se uma placa foi selecionada
      if (!onibusPlaca) return;

      // Chamada ao backend para obter os assentos disponíveis para o ônibus selecionado
      fetch(`http://localhost:8080/assentos`)
        .then(response => response.json()) // Converte a resposta para JSON
        .then(assentos => {
          // Filtra os assentos pelo 'onibusPlaca' selecionado
          const assentosFiltrados = assentos.filter(assento => assento.onibusPlaca === onibusPlaca);

          if (assentosFiltrados.length === 0) {
            // Se não houver assentos para o ônibus, exibe uma opção informativa
            const option = document.createElement('option');
            option.value = '';
            option.textContent = 'Nenhum assento disponível';
            assentoSelect.appendChild(option);
          } else {
            // Caso haja assentos, preenche o select com os números dos assentos
            assentosFiltrados.forEach(assento => {
              const option = document.createElement('option');
              option.value = assento.numeroAssento; // Atribui o número do assento como valor
              option.textContent = `Assento ${assento.numeroAssento}`; // Exibe "Assento [número]" na opção
              assentoSelect.appendChild(option);
            });
          }
        })
        .catch(error => {
          console.error('Erro ao carregar os assentos:', error);
        });
    });