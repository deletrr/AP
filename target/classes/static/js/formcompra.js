function enviarDados(event) {
  event.preventDefault(); 

  
  const nomec = document.getElementById('nomecp').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const endereco = document.getElementById('endcp').value.trim();
  const assento = document.getElementById('assento').value.trim();
  const metodoPagamento = document.getElementById('metodoPagamento').value.trim();
  const nomeVendedor = document.getElementById('nomevendedorc').value.trim();
  const dataCompra = document.getElementById('datac').value.trim();
  const horarioCompra = document.getElementById('horario').value.trim();
  const valorPago = parseFloat(document.getElementById('valorpc').value.replace(',', '.'));
  const cep = document.getElementById('cep').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const email = document.getElementById('email').value.trim();
  const contato = document.getElementById('contato').value.trim();
  const onibus= document.getElementById('onibus').value.trim();

  // Validação básica
  if (!nomec || !cpf || !endereco || !assento || !metodoPagamento || !nomeVendedor || !dataCompra || !horarioCompra || isNaN(valorPago)) {
    alert('Preencha todos os campos corretamente.');
    return;
  }

 
  const dadosCompra = {
    nomec,
    email,
    contato,
    cpf,
    endereco,
    assento,
    metodoPagamento,
    nomeVendedor,
    dataCompra,
    horarioCompra: horarioCompra + ":00",
    valorPago,
    onibus,
    numero,
    cep
    };

  console.log('Enviando os seguintes dados:', dadosCompra); // Log dos dados enviados

 
  fetch('http://localhost:8080/compras', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dadosCompra),
  })
    .then(async response => {
      // Verifica se a resposta é OK
      if (!response.ok) {
        const errorResponse = await response.json(); // Tenta obter mais detalhes do erro
        throw new Error(errorResponse.message || `Erro na requisição: ${response.status}`);
      }
      return response.json(); // Retorna o JSON da resposta caso OK
    })
    .then(data => {
      console.log('Resposta da API:', data);

     
      if (data.id) { // Verifica se um ID foi retornado como indicador de sucesso
        alert('Cadastrado com sucesso!');
        document.getElementById('formCompra').reset();
      } else {
        throw new Error('A resposta da API não indica sucesso claro.');
      }
    })
    .catch(error => {
      console.error('Erro durante o envio da requisição:', error);
      alert(`Erro ao processar: ${error.message}`);
    });
}


document.getElementById('formCompra').addEventListener('submit', enviarDados);
