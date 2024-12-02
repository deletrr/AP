

const tableBody = document.getElementById('messageTableBody');


async function loadMessages() {
    try {
        const response = await fetch('/contato'); //endpoint
        if (!response.ok) {
            throw new Error(`Erro ao buscar mensagens: ${response.statusText}`);
        }

        const messages = await response.json(); 

        tableBody.innerHTML = ""; 

        // Preenche a tabela com os dados recebidos
        messages.forEach(msg => {
            const row = document.createElement('tr');

            row.innerHTML = `
          <td>${msg.name}</td>
          <td>${msg.email}</td>
          <td>${msg.message.replace(/\n/g, "<br>")}</td>
          <td>
            <button onclick="sendEmail('${msg.email}')">Enviar email</button>
            
          </td>
        `;
//<button onclick="deleteMessage('${msg.id}')">Excluir</button>
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
        tableBody.innerHTML = "<tr><td colspan='4'>Erro ao carregar mensagens.</td></tr>";
    }
}


function sendEmail(email) {
    window.location.href = `mailto:${email}`;
}

// Função para excluir uma mensagem
async function deleteMessage(id) {
    try {
        const response = await fetch(`/contato/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Erro ao excluir mensagem: ${response.statusText}`);
        }

        alert("Mensagem excluída com sucesso!");
        loadMessages(); 
    } catch (error) {
        console.error("Erro ao excluir mensagem:", error);
        alert("Erro ao excluir a mensagem.");
    }
}


document.addEventListener('DOMContentLoaded', loadMessages);

