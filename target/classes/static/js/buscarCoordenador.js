document.addEventListener("DOMContentLoaded", () => {
    const onibusSelect = document.getElementById("onibus");
    const nomeVendedorInput = document.getElementById("nomevendedorc");

    // Função para buscar dados dos coordenadores
    async function buscarCoordenadores() {
        try {
            const response = await fetch("./coordenadores");
            if (!response.ok) {
                throw new Error("Erro ao buscar os coordenadores");
            }
            return await response.json();
        } catch (error) {
            console.error("Erro ao carregar coordenadores:", error);
            return [];
        }
    }

    // Função para preencher o campo "Nome do Vendedor"
    async function preencherNomeVendedor(placa) {
        const coordenadores = await buscarCoordenadores();
        const coordenador = coordenadores.find(coord => coord.onibus_placa === placa);
        nomeVendedorInput.value = coordenador ? coordenador.nomeco : "Vendedor não encontrado";
    }

    // Adicionar as opções no dropdown de ônibus e configurar evento de mudança
    async function configurarOnibus() {
        const coordenadores = await buscarCoordenadores();
        coordenadores.forEach(coordenador => {
            const option = document.createElement("option");
            option.value = coordenador.onibus_placa;
            option.textContent = `${coordenador.modelo} - ${coordenador.onibus_placa}`;
            onibusSelect.appendChild(option);
        });

        // Evento para atualizar o nome do vendedor ao selecionar uma placa
        onibusSelect.addEventListener("change", event => {
            preencherNomeVendedor(event.target.value);
        });
    }

    configurarOnibus();
});
