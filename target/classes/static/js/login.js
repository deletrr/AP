document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault();
  
      // Captura os valores dos campos de entrada
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
  
      try {
        // Envia a requisição POST para o endpoint localhost:8080/Usuario/login
        const response = await fetch("http://localhost:8080/Usuario/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, senha }) // Converte os dados para JSON
        });
  
        // Processa a resposta
        if (response.ok) {
          const data = await response.text(); 
  
          if (data === "Login successful") {  
            alert("Login realizado com sucesso!");
            window.location.href = "/index.html"; 
          } else {
            alert("Credenciais inválidas. Tente novamente.");
          }
        } else {
          alert("Erro ao realizar login. Tente novamente mais tarde.");
        }
      } catch (error) {
        console.error("Erro ao enviar requisição:", error);
        alert("Erro ao conectar com o servidor.");
      }
    });
  });
  