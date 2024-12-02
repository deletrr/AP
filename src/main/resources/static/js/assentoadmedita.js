document.getElementById("formEdicao").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let onibusPlaca = document.getElementById("placa").value;
    let numeroAssento = document.getElementById("numero_assentos").value;
    let status = "disponível"; 

    
    fetch(`./assentos/excluir?placa=${onibusPlaca}`, { 
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao excluir os assentos existentes");
        }
        return response.text(); 
    })
    .then(() => {
       
        let requestBody = {
            onibusPlaca: onibusPlaca,
            numeroAssento: numeroAssento,
            status: status
        };

        return fetch('./assentos/criar', {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(requestBody)  
        });
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao criar os novos assentos");
        }
        return response.text(); 
    })
    .then(data => {
        alert(data);  
    })
    .catch(error => {
        console.error("Erro:", error);  
    });
});
