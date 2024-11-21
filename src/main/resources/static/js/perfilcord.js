document.addEventListener('DOMContentLoaded', () => {
    const coordenadorSelect = document.getElementById('coordenadorSelect');
    const nomeco = document.getElementById('nomeco');
    const numero_contato = document.getElementById('numero_contato');
    const foto = document.getElementById('foto');
    const modelo = document.getElementById('modelo');
    const placa = document.getElementById('placa');
    const numero_assentos = document.getElementById('numero_assentos');
    const formEdicao = document.getElementById('formEdicao');
    const btnDeletar = document.getElementById('btnDeletar');

    // Carregar coordenadores no select
    fetch('http://localhost:8080/coordenadores')
        .then(response => response.json())
        .then(data => {
            data.forEach(coordenador => {
                const option = document.createElement('option');
                option.value = coordenador.id;
                option.textContent = coordenador.nomeco;
                coordenadorSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar coordenadores:', error));

    // Preencher os campos do formulário com os dados do coordenador selecionado
    coordenadorSelect.addEventListener('change', (event) => {
        const coordenadorId = event.target.value;
        if (coordenadorId) {
            fetch(`http://localhost:8080/coordenadores/${coordenadorId}`)
                .then(response => response.json())
                .then(data => {
                    nomeco.value = data.nomeco;
                    numero_contato.value = data.numero_contato;
                    foto.value = data.foto;
                    modelo.value = data.modelo;
                    placa.value = data.onibus_placa;
                    numero_assentos.value = data.numero_assentos;
                })
                .catch(error => console.error('Erro ao carregar coordenador:', error));
        } else {
            // Limpar os campos se nenhum coordenador for selecionado
            nomeco.value = '';
            numero_contato.value = '';
            foto.value = '';
            modelo.value = '';
            placa.value = '';
            numero_assentos.value = '';
        }
    });

    // Submeter a edição do coordenador
    formEdicao.addEventListener('submit', (event) => {
        event.preventDefault();
        const coordenadorId = coordenadorSelect.value;
        const updatedData = {
            nomeco: nomeco.value,
            numero_contato: numero_contato.value,
            foto: foto.value,
            modelo: modelo.value,
            onibus_placa: placa.value,
            numero_assentos: numero_assentos.value
        };

        fetch(`http://localhost:8080/coordenadores/${coordenadorId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => response.json())
        .then(data => {
            alert('Coordenador atualizado com sucesso!');
        })
        .catch(error => console.error('Erro ao editar coordenador:', error));
    });

    // Deletar coordenador
    btnDeletar.addEventListener('click', () => {
        const coordenadorId = coordenadorSelect.value;
        if (coordenadorId && confirm('Tem certeza que deseja deletar este coordenador?')) {
            fetch(`http://localhost:8080/coordenadores/${coordenadorId}`, {
                method: 'DELETE',
            })
            .then(response => {
                if (response.ok) {
                    alert('Coordenador deletado com sucesso!');
                    coordenadorSelect.value = '';
                    nomeco.value = '';
                    numero_contato.value = '';
                    foto.value = '';
                    modelo.value = '';
                    placa.value = '';
                    numero_assentos.value = '';
                } else {
                    alert('Erro ao deletar coordenador.');
                }
            })
            .catch(error => console.error('Erro ao deletar coordenador:', error));
        }
    });
});