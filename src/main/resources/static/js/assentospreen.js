
// Função para preencher os assentos no layout
function preencherAssentos(assentos, placaOnibus) {
    const columns = document.querySelectorAll('.bus-layout .seat-container .column');
    
    columns.forEach(column => {
        column.innerHTML = ''; // Limpa a coluna para preenchê-la novamente
    });

    // Filtra os assentos pelo 'onibusPlaca' selecionado
    const assentosFiltrados = assentos.filter(assento => assento.onibusPlaca === placaOnibus)
        .sort((a, b) => a.numeroAssento - b.numeroAssento);

    // Organiza os assentos em um array para cada coluna (Esquerda, Interna Esquerda, Interna Direita, Direita)
    const assentosPorColuna = {
        esquerda: [],
        internaEsquerda: [],
        internaDireita: [],
        direita: []
    };

    // Distribui os assentos nas colunas corretas
    assentosFiltrados.forEach(assento => {
        // A lógica abaixo organiza os assentos nas colunas corretas com base no número do assento
        if (assento.numeroAssento % 4 === 1) {
            assentosPorColuna.esquerda.push(assento);
        } else if (assento.numeroAssento % 4 === 2) {
            assentosPorColuna.internaEsquerda.push(assento);
        } else if (assento.numeroAssento % 4 === 3) {
            assentosPorColuna.internaDireita.push(assento);
        } else if (assento.numeroAssento % 4 === 0) {
            assentosPorColuna.direita.push(assento);
        }
    });

    // Função para preencher uma coluna com assentos
    const preencherColuna = (coluna, assentos) => {
        assentos.forEach(assento => {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');
            seatDiv.dataset.seat = assento.numeroAssento;

            // Define o estado do assento (disponível, ocupado)
            switch (assento.status) {
                case 'disponivel':
                    seatDiv.classList.add('available');
                    break;
                case 'ocupado':
                    seatDiv.classList.add('sold');
                    break;
            }

            // Define o texto do número do assento
            seatDiv.textContent = assento.numeroAssento;

            // Adiciona evento de clique para alterar o status do assento
            seatDiv.onclick = () => alterarStatusAssento(seatDiv, assento);

            // Adiciona o elemento do assento na coluna correspondente
            coluna.appendChild(seatDiv);
        });
    };

    // Preenche as colunas
    preencherColuna(columns[0], assentosPorColuna.esquerda); // Fileira Esquerda
    preencherColuna(columns[1], assentosPorColuna.internaEsquerda); // Fileira Interna Esquerda
    preencherColuna(columns[2], assentosPorColuna.internaDireita); // Fileira Interna Direita
    preencherColuna(columns[3], assentosPorColuna.direita); // Fileira Direita
}

// Função para alterar o status de um assento
function alterarStatusAssento(seatDiv, assento) {
    // Pergunta de confirmação antes de atualizar o status
    const confirmaAtualizacao = confirm(`Você tem certeza que deseja atualizar o status do assento ${assento.numeroAssento}?`);

    if (!confirmaAtualizacao) {
        return; // Se o usuário cancelar, não faz nada
    }

    // Define as opções de status possíveis
    const novosStatus = {
        "disponivel": "ocupado",
        "ocupado": "disponivel"
    };

    // Verifica se o status atual é válido para transição
    if (novosStatus[assento.status]) {
        // Atualiza o status do assento
        assento.status = novosStatus[assento.status];

        // Atualiza as classes CSS do assento
        seatDiv.classList.remove("available", "sold");
        switch (assento.status) {
            case "disponivel":
                seatDiv.classList.add("available");
                break;
            case "ocupado":
                seatDiv.classList.add("sold");
                break;
        }

        // Atualiza no servidor (se necessário)
        atualizarAssentoNoServidor(assento);
    } else {
        alert("Status inválido para atualização.");
    }
}

// Função para atualizar o status do assento no servidor
function atualizarAssentoNoServidor(assento) {
    fetch(`http://localhost:8080/assentos/${assento.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: assento.status })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao atualizar o assento no servidor");
        }
        console.log(`Assento ${assento.numeroAssento} atualizado para ${assento.status}`);
    })
    .catch(error => {
        console.error("Erro ao atualizar o assento:", error);
    });
}

// Função para buscar os assentos de um ônibus específico
function fetchAssentos(placaOnibus) {
    fetch(`http://localhost:8080/assentos?onibusPlaca=${placaOnibus}`)
        .then(response => response.json())
        .then(data => {
            preencherAssentos(data, placaOnibus);  // Passa o 'placaOnibus' para o preenchimento
        })
        .catch(error => console.error('Erro ao carregar assentos:', error));
}

// Função para preencher o select com os ônibus disponíveis
function preencherSelectOnibus() {
    fetch('http://localhost:8080/assentos')
        .then(response => response.json())
        .then(data => {
            const select = document.getElementById('onibus-select');
            const onibusSet = new Set();

            // Adiciona as placas dos ônibus no select
            data.forEach(assento => {
                onibusSet.add(assento.onibusPlaca);
            });

            onibusSet.forEach(placa => {
                const option = document.createElement('option');
                option.value = placa;
                option.textContent = placa;
                select.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar ônibus:', error));
}

// Evento para carregar assentos quando um ônibus for selecionado
document.getElementById('onibus-select').addEventListener('change', function() {
    const placaOnibus = this.value;
    if (placaOnibus) {
        fetchAssentos(placaOnibus);
    }
});

// Inicializa a página com o select de ônibus e preenche os assentos
window.onload = function() {
    preencherSelectOnibus();
};


///////////////////////////////////////////////


// Função para buscar o coordenador pela placa do ônibus
function buscarCoordenador(placaOnibus) {
    fetch(`http://localhost:8080/coordenadores`)
        .then(response => response.json())
        .then(data => {
            const coordenador = data.find(coordenador => coordenador.onibus_placa === placaOnibus);
            
            if (coordenador) {
                exibirCoordenador(coordenador);
            } else {
                console.log('Coordenador não encontrado para o ônibus selecionado');
            }
        })
        .catch(error => console.error('Erro ao carregar coordenador:', error));
}

// Função para exibir o nome do coordenador na tela
function exibirCoordenador(coordenador) {
    const coordenadorNomeElement = document.getElementById('coordenador-nome');
    const coordenadorFotoElement = document.getElementById('coordenador-foto');
    
    // Atualiza o nome do coordenador na tela
    coordenadorNomeElement.textContent = `Coordenador: ${coordenador.nomeco}`;
    
    // Atualiza a foto do coordenador
    coordenadorFotoElement.src = coordenador.foto;

    // Exibe o número de contato do coordenador (se necessário)
    // const coordenadorContatoElement = document.getElementById('coordenador-contato');
    // coordenadorContatoElement.textContent = `Contato: ${coordenador.numero_contato}`;
}

// Evento para carregar o coordenador quando um ônibus for selecionado
document.getElementById('onibus-select').addEventListener('change', function() {
    const placaOnibus = this.value;
    if (placaOnibus) {
        buscarCoordenador(placaOnibus);
    }
});