document.querySelector("form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores dos campos
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const tipo_usuario = document.getElementById("role").value;
  
  // Cria o objeto JSON com os dados
  const data = {
    nome: nome,
    email: email,
    senha: senha,
    tipo_usuario: tipo_usuario
  };

  try {
    // Envia os dados usando fetch com método POST
    const response = await fetch("http://localhost:8080/Usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // Verifica se o envio foi bem-sucedido
    if (response.ok) {
      alert("Cadastro realizado com sucesso!");
      window.location.href = "administracao.html"; // Redireciona para a página de login
    } else {
      alert("Erro no cadastro. Tente novamente.");
    }
  } catch (error) {
    console.error("Erro ao enviar dados:", error);
    alert("Erro de rede. Tente novamente.");
  }
});
