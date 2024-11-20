// script.js

// Seleciona todos os elementos com a classe 'seat'
const seats = document.querySelectorAll('.seat');

seats.forEach(seat => {
    // Adiciona os eventos de 'mouseover' e 'mouseout' para o efeito de zoom
    seat.addEventListener('mouseover', () => {
        seat.classList.add('zoom');
    });

    seat.addEventListener('mouseout', () => {
        seat.classList.remove('zoom');
    });

    // Adiciona o evento de 'click' para marcar o assento como selecionado
    seat.addEventListener('click', () => {
        // Verifica se o assento já está selecionado
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected'); // Desmarca se já estava selecionado
        } else {
            seat.classList.add('selected'); // Marca como selecionado
        }
    });

    function goToNextPage() {
        window.location.href = 'proxima_pagina.html'; // Altere 'proxima_pagina.html' para a URL desejada
    }
});




