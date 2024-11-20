async function carregarAssentos() {
    const response = await fetch('/assentos'); // Chamando o endpoint
    const assentos = await response.json();

    assentos.forEach(assento => {
        const botao = document.createElement('button');
        botao.innerText = `Assento ${assento.numero}`;
        botao.style.backgroundColor = assento.disponivel ? 'green' : 'red';
        botao.disabled = !assento.disponivel;
        botao.onclick = () => reservarAssento(assento.id_assento);
        document.body.appendChild(botao);
    });
}

async function reservarAssento(idAssento) {
    await fetch(`/assentos/${idAssento}/reservar`, { method: 'POST' });
    alert('Assento reservado com sucesso!');
    location.reload(); // Atualizar a página para refletir o status atualizado
}

carregarAssentos();