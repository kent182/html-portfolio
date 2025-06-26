const ratePop = document.getElementById('ratingPopup');
const stars = document.querySelectorAll('.star');
const messageBox = document.getElementById('messageBox');
const submitButton = document.getElementById('submitRating');
let selectedRating = 0;

function rateOpen() {  

stars.forEach(star => {
    star.addEventListener('mouseover', () => {
    const val = +star.dataset.value;
    highlightStars(val, false);
    });

    star.addEventListener('mouseout', () => {
    highlightStars(selectedRating, true);
    });

    star.addEventListener('click', () => {
    selectedRating = +star.dataset.value;
    highlightStars(selectedRating, true);
    });
});

function highlightStars(value, persist) {
    stars.forEach(s => {
    s.classList.remove('selected', 'hovered');
    if (+s.dataset.value <= value) {
        s.classList.add(persist ? 'selected' : 'hovered');
    }
    });
}

    submitButton.addEventListener('click', () => {
        if (selectedRating > 0) {
        messageBox.textContent = `Thank you! You rated this product ${selectedRating} out of 5.`;

        // You could send it to a backend here:
        /*
        fetch('/api/rate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rating: selectedRating })
        }).then(res => res.json()).then(data => {
            console.log('Rating saved:', data);
        });
        */
        } else {
        messageBox.textContent = 'Please select a rating before submitting.';
        }
    });
    
    ratePop.style.display = 'flex';
}

function rateClose() {
    ratePop.style.display = 'none';
}

function submitRate() {
    highlightStars();
    rateClose();
}
