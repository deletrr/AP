document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Coletando os dados do formulário
    const nomeco = document.getElementById('nomeco').value;
    const numero_contato = document.getElementById('numero_contato').value;
    const foto = document.getElementById('foto').value;
    const modelo = document.getElementById('modelo').value;
    const placa = document.getElementById('placa').value;
    const numero_assentos = document.getElementById('numero_assentos').value;

    const data = {
      nomeco,
      numero_contato,
      foto,
      modelo,
      onibus_placa: placa,
      numero_assentos: numero_assentos,
    };

    try {
      const response = await fetch('http://localhost:8080/coordenadores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        form.reset(); // Reseta o formulário após o envio
      } else {
        alert('Erro ao cadastrar coordenador e ônibus');
      }
    } catch (error) {
      console.error('Erro de comunicação com o servidor:', error);
      alert('Erro ao se comunicar com o servidor.');
    }
  });
});