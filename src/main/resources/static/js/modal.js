// Abrindo e fechando o Modal
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("contactModal");
    const openModalButton = document.querySelector("#openContactModal");
    const closeModalButton = document.querySelector(".modal .close");
  
    // Abrir modal
    openModalButton.addEventListener("click", () => {
      modal.style.display = "block";
    });
  
    // Fechar modal
    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Fechar modal ao clicar fora
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  

  //qrcode

  document.addEventListener("DOMContentLoaded", () => {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("emailInput");
    const modal = document.getElementById("qrCodeModal");
    const qrCodeContainer = document.getElementById("qrCodeContainer");
    const closeModalButton = document.getElementById("closeModalButton");
    const closeSpan = document.querySelector(".modal .close");
  
    function generateQRCode(email) {
        qrCodeContainer.innerHTML = ""; // Limpar QR Code anterior
        QRCode.toDataURL(email, { width: 150 }, (error, url) => {
          if (error) {
            console.error(error);
            alert("Ocorreu um erro ao gerar o QR Code. Tente novamente.");
            return;
          }
          // Cria um elemento de imagem para exibir o QR Code
          const qrCodeImage = document.createElement("img");
          qrCodeImage.src = url;
          qrCodeImage.alt = "QR Code gerado";
          qrCodeImage.style.width = "150px";
          qrCodeContainer.appendChild(qrCodeImage);
      
          // Enviar dados do e-mail e QR Code para o servidor
          sendNewsletterData(email, url);
        });
      }
  
    // Abrir o modal
    function openModal() {
      modal.style.display = "block";
    }
  
    // Fechar o modal
    function closeModal() {
      modal.style.display = "none";
    }
  
    // Manipular o envio do formulário
    emailForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();
  
      if (email) {
        generateQRCode(email); // Gera o QR Code
        openModal(); // Mostra o modal
      } else {
        alert("Por favor, insira um e-mail válido.");
      }
    });
  
    // Fechar o modal ao clicar no botão ou no X
    closeModalButton.addEventListener("click", closeModal);
    closeSpan.addEventListener("click", closeModal);
  
    // Fechar o modal ao clicar fora dele
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  });

  //envio dos dados do qr para o banco
  
  function sendNewsletterData(email, qrCodeBase64) {
    const data = {
      email: email,
      qrCode: qrCodeBase64,
    };
  
    fetch("/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Dados enviados com sucesso! Verifique seu e-mail.");
        } else {
          alert("Ocorreu um erro ao enviar os dados. Tente novamente.");
        }
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
        alert("Erro de conexão. Tente novamente mais tarde.");
      });
  }