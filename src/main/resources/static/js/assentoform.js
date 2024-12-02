document.addEventListener("DOMContentLoaded", function() {
    const formCompra = document.getElementById('formCompra');  
    const assentoSelect = document.getElementById('assento');  
    const statusSelect = document.getElementById('status');    

    
    formCompra.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const assentoId = assentoSelect.value; 
        const novoStatus = statusSelect.value; 

        
        if (!assentoId || !novoStatus) {
            alert('Por favor, selecione um assento e um status.');
            return;
        }

        
        fetch(`http://localhost:8080/assento/${assentoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: novoStatus }) 
        })
        .then(response => {
            if (response.ok) {
                alert('Status do assento atualizado com sucesso!');
            } else {
                alert('Falha ao atualizar o status. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro ao atualizar o status:', error);
            alert('Ocorreu um erro ao tentar atualizar o status.');
        });
    });
});
