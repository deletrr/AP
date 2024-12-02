
const modal = document.getElementById("contactModal");
const closeButton = document.querySelector(".close");
const contactForm = document.getElementById("contactForm");


function openModal() {
  modal.style.display = "block";
}


function closeModal() {
  modal.style.display = "none";
}


closeButton.onclick = closeModal;


window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};


contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

 
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  
  fetch("./contato", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then((response) => response.json())
  .then((data) => {
    alert(data.message); // Exibe a mensagem retornada pelo backend
    closeModal(); // Fecha o modal após o envio
  })
  .catch((error) => {
    alert("Sua mensagem foi enviada.");
  });
});
