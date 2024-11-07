function validateForm() {
    
    const email = document.getElementById('email');
    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');
    const confirmSenha = document.getElementById('confirmSenha');
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert('Por favor, digite um e-mail válido.');
      email.focus();
      return false;
    }
  
   
    if (email.value === '') {
      alert('Por favor, preencha o e-mail');
      email.focus();
      return false;
    }
  
    
    if (nome.value === '') {
      alert('Por favor, preencha o nome de usuário');
      nome.focus();
      return false;
    }
  
    
    if (senha.value === '') {
      alert('Por favor, preencha a senha');
      senha.focus();
      return false;
    }
  
    
    if (confirmSenha.value === '') {
      alert('Por favor, confirme a senha');
      confirmSenha.focus();
      return false;
    }
  
    
    if (senha.value !== confirmSenha.value) {
      alert('As senhas não coincidem!');
      senha.focus();
      return false;
    }
  
    
    const userData = {
      email: email.value,
      nome: nome.value,
      senha: senha.value
    };
  
    fetch('https://localhost:8080/Usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Cadastro realizado com sucesso!');
        // Redirecionar ou limpar o formulário, conforme desejado
      } else {
        alert('Erro ao cadastrar: ' + data.message);
      }
    })
    .catch(error => {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    });
  
    return false; // Impede o envio do formulário padrão
  }
  