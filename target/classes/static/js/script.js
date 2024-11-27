
const seats = document.querySelectorAll('.seat');

seats.forEach(seat => {
   
    seat.addEventListener('mouseover', () => {
        seat.classList.add('zoom');
    });

    seat.addEventListener('mouseout', () => {
        seat.classList.remove('zoom');
    });

    
    seat.addEventListener('click', () => {
        
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected'); 
        } else {
            seat.classList.add('selected'); 
        }
    });

    function goToNextPage() {
        window.location.href = 'proxima_pagina.html'; 
    }
});




