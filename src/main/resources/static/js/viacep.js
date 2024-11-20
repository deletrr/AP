document.addEventListener("DOMContentLoaded", function () {
    const cepInput = document.getElementById("cep"); // Campo para o CEP
    const enderecoInput = document.getElementById("endcp"); // Campo para o endereço
    let erroMostrado = false; // Flag para controlar se o erro foi mostrado

    // Função para buscar o endereço com base no CEP
    cepInput.addEventListener("blur", function () {
        const cep = cepInput.value.replace(/\D/g, ''); // Remover qualquer caractere não numérico

        // Verificar se o CEP tem 8 dígitos
        if (cep.length === 8) {
            // URL da API ViaCEP
            const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

            // Realizar a requisição
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (!data.erro) {
                        // Preencher o campo de endereço com os dados retornados
                        enderecoInput.value = `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`;
                        erroMostrado = false; // Resetar flag de erro
                    } else {
                        if (!erroMostrado) {
                            alert("CEP não encontrado.");
                            erroMostrado = true; // Marcar que o erro foi mostrado
                        }
                        enderecoInput.value = ""; // Limpar campo caso CEP não seja válido
                    }
                })
                .catch(error => {
                    console.error("Erro ao buscar o CEP:", error);
                    if (!erroMostrado) {
                        alert("Erro ao buscar o CEP.");
                        erroMostrado = true; // Marcar que o erro foi mostrado
                    }
                    enderecoInput.value = ""; // Limpar campo em caso de erro
                });
        } else {
            // Se o CEP não tiver 8 dígitos
            if (!erroMostrado) {
                alert("Por favor, insira um CEP válido.");
                erroMostrado = true; // Marcar que o erro foi mostrado
            }
            enderecoInput.value = ""; // Limpar campo caso o CEP seja inválido
        }
    });
});
