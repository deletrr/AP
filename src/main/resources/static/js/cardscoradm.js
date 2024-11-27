function carregarCoordenadores() {
    fetch('./coordenadores') 
      .then(response => response.json()) 
      .then(coordenadores => {
        const container = document.querySelector('.cards'); 
        container.innerHTML = ''; 
  
        
        coordenadores.forEach((coordenador, index) => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          
          card.innerHTML = `
            <div class="content">
              <h2>${index + 1}°Ônibus</h2>
              <div class="img">
                <a href="assentos.html"><img src="${coordenador.foto}" alt="${coordenador.nomeco}"></a>
              </div>
              <div class="details">
                <div class="name">${coordenador.nomeco.split(' ')[0]}</div>
                <div class="name">${coordenador.nomeco.split(' ').slice(1).join(' ')}</div>
              </div>
            </div>
          `;
  
          container.appendChild(card); 
        });
      })
      .catch(error => {
        console.error('Erro ao carregar os coordenadores:', error);
      });
  }
  
  // Chama a função ao carregar a página
  document.addEventListener('DOMContentLoaded', carregarCoordenadores);