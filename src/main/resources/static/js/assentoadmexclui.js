document.getElementById("btnDeletar").addEventListener("click", function(event) {
    
    event.preventDefault();

    let onibusPlaca = document.getElementById("placa").value;

    
    let confirmacao = confirm("Tem certeza que deseja excluir todos os assentos deste ônibus?");

    if (confirmacao) {
        
        fetch(`./assentos/excluir?placa=${onibusPlaca}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao excluir os assentos existentes");
            }
            return response.text();
        })
        .then(data => {
            alert(data);  
        })
        .catch(error => {
            console.error("Erro:", error);  
            alert("Erro ao excluir os assentos");
        });
    } else {
        alert("Exclusão cancelada."); 
    }
});