document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'http://localhost:8080/compras'; // Ajuste a URL conforme sua configuração do Spring

    // Função para buscar as compras do servidor
    function buscarCompras() {
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                return response.json();
            })
            .then(compras => {
                preencherTabela(compras);
                // Aplicar os eventos do planilha.js apenas uma vez após preencher a tabela
                reiniciarEventosPlanilhaJS();
            })
            .catch(error => {
                console.error("Erro ao carregar as compras:", error);
            });
    }

    // Função para preencher a tabela com as compras
    function preencherTabela(compras) {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = ""; // Limpar a tabela antes de adicionar os novos dados

        compras.forEach((compra, index) => {
            const tr = document.createElement("tr");

            // Formatação do valor pago
            const valorPagoFormatado = compra.valorPago
                ? compra.valorPago.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                : '-------------';

            // Formatação da data
            const dataCompraFormatada = compra.dataCompra
                ? new Date(compra.dataCompra).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })
                : '';

            // Determinar a classe e texto do status
            let statusClass = '';
            let statusText = 'Pendente';

            switch (compra.status?.toLowerCase()) {
                case 'pago':
                    statusClass = 'delivered';
                    statusText = 'Pago';
                    break;
                case 'cancelado':
                    statusClass = 'cancelled';
                    statusText = 'Cancelado';
                    break;
                case 'pendente':
                default:
                    statusClass = 'shipped';
                    statusText = 'Pendente';
                    break;
            }

            // Montando a linha com a estrutura especificada
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${compra.cpf}</td>
                <td>${compra.nomec}</td>
                <td>${dataCompraFormatada}</td>
                <td>
                    <p class="status ${statusClass}" id="${statusClass}">${statusText}</p>
                </td>
                <td><strong>${valorPagoFormatado}</strong></td>
            `;

            tbody.appendChild(tr); // Adiciona a linha na tabela
        });
    }

    // Função para aplicar eventos do planilha.js apenas uma vez
    function reiniciarEventosPlanilhaJS() {
        const search = document.querySelector('.input-group input');
        const tableHeadings = document.querySelectorAll('thead th');
        const tableRows = document.querySelectorAll('tbody tr');

        // Aplicar evento de busca novamente
        if (search) {
            search.addEventListener('input', function () {
                const searchValue = search.value.toLowerCase();
                tableRows.forEach((row, i) => {
                    const text = row.textContent.toLowerCase();
                    row.classList.toggle('hide', !text.includes(searchValue));
                    row.style.setProperty('--delay', `${i / 25}s`);
                });
            });
        }

        // Aplicar evento de ordenação novamente
        tableHeadings.forEach((heading, i) => {
            heading.addEventListener('click', function () {
                let sortAsc = heading.classList.toggle('asc');
                tableHeadings.forEach(h => h.classList.remove('active'));
                heading.classList.add('active');

                [...tableRows].sort((a, b) => {
                    let aText = a.querySelectorAll('td')[i].textContent.trim();
                    let bText = b.querySelectorAll('td')[i].textContent.trim();
                    return sortAsc ? aText.localeCompare(bText) : bText.localeCompare(aText);
                }).forEach(row => row.parentNode.appendChild(row));
            });
        });
    }

    // Chama a função para buscar as compras e preencher a tabela
    buscarCompras();
});
