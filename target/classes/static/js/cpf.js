function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    if (cpf.length !== 11) return false; // CPF deve ter exatamente 11 dígitos

    // Verifica se todos os números são iguais (exemplo: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    // Validação do primeiro dígito verificador
    let soma = 0;
    let resto;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    // Validação do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) return false;

    return true;
  }

  // Máscara do CPF
  document.getElementById('cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');  // Remove todos os caracteres não numéricos

    // Limita a quantidade de números a 11 e aplica a máscara
    if (value.length <= 11) {
      value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');  // Formata o CPF
      e.target.value = value;
    }
  });

  // Validação de CPF ao sair do campo
  document.getElementById('cpf').addEventListener('blur', function() {
    const cpf = document.getElementById('cpf').value;
    const cpfError = document.getElementById('cpfError');
    if (!validarCPF(cpf)) {
      cpfError.style.display = 'inline'; // Exibe a mensagem de erro
    } else {
      cpfError.style.display = 'none'; // Oculta a mensagem de erro
    }
  });