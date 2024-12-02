document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let onibusPlaca = document.getElementById("placa").value;
    let numeroAssento = document.getElementById("numero_assentos").value;
    let status = "disponível"; 

    
    let requestBody = {
        onibusPlaca: onibusPlaca,
        numeroAssento: numeroAssento,
        status: status
    };

    
    fetch('./assentos/criar', {method: 'POST',headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody) 
    })
    .then(response => response.text())  
    .then(data => {
        alert(data); 
    })
    .catch(error => {
        console.error("Erro:", error); 
    });
});
