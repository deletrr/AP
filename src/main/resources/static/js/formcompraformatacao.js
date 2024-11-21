document.getElementById('placa').addEventListener('input', function() {
    const input = this.value.toUpperCase(); 
    const formatado = input
      .replace(/[^A-Z0-9]/g, '') // Remove caracteres não permitidos
      .replace(/^([A-Z]{3})([0-9A-Z]{1,4})$/, '$1-$2'); // Aplica o traço após as 3 letras
  
    this.value = formatado; 
  });