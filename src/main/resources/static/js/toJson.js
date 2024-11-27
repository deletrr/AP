
    document.getElementById('toJSON').addEventListener('click', async () => {
        try {
            
            const response = await fetch('./compras');
            
            if (!response.ok) {
                throw new Error(`Erro ao obter dados: ${response.statusText}`);
            }

            const data = await response.json();
            
            
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'relatorio_compras.json';
            a.click();

            
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Erro ao exportar JSON:', error);
            alert('Erro ao exportar JSON. Verifique o console para mais detalhes.');
        }
    });
