const popup = document.getElementById('signupPopup');

function openPopup() {
    popup.style.display = 'flex';
}

function closePopup() {
    popup.style.display = 'none';
}

function submitForm() {
    alert('Successfully Registered!');
    closePopup();
}
