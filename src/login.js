document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('signupUser').value;
  const pass = document.getElementById('signupPass').value;
  localStorage.setItem(user, pass);
  document.getElementById('signupMsg').innerText = 'Signup successful!';
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  const storedPass = localStorage.getItem(user);
  if (storedPass === pass) {
    document.getElementById('loginMsg').innerText = 'Login successful!';
  } else {
    document.getElementById('loginMsg').innerText = 'Invalid credentials.';
  }
});
