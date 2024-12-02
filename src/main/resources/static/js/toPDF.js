document.getElementById('toPDF').addEventListener('click', async (event) => {
    event.preventDefault(); 
    event.stopPropagation(); 

    const checkbox = document.getElementById('export-file');
    checkbox.checked = false; 

    try {
        const response = await fetch('./contato');
        
        if (!response.ok) {
            throw new Error(`Erro ao obter dados: ${response.statusText}`);
        }

        const data = await response.json();

        const tableData = data.map((item) => [
            item.id,
            item.nomec,
            item.onibus,
            item.assento,
            item.metodoPagamento,
            item.nomeVendedor,
            item.dataCompra,
            item.horarioCompra,
            item.valorPago.toFixed(2),
            item.status,
        ]);

        const columns = [
            'ID',
            'Cliente',
            'Ônibus',
            'Assento',
            'Pagamento',
            'Vendedor',
            'Data',
            'Hora',
            'Valor (R$)',
            'Status',
        ];

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(12);
        doc.text('Relatório de Compras', 20, 20);

        doc.autoTable({
            head: [columns],
            body: tableData,
            startY: 7,
            styles: {
                fontSize: 8,
                cellPadding: 1,
                halign: 'center',
            },
            headStyles: {
                fillColor: [22, 160, 133],
                textColor: [255, 255, 255],
                fontSize: 7,
            },
            alternateRowStyles: {
                fillColor: [240, 240, 240],
            },
        });

        doc.save('relatorio_compras.pdf');
    } catch (error) {
        console.error('Erro ao exportar PDF:', error);
        alert('Erro ao exportar PDF. Verifique o console para mais detalhes.');
    }
});
