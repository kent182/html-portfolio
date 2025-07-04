function openLogin() {
      document.getElementById('signupPopup').style.display = 'flex';
      document.getElementById('loginForm').style.display = 'none';
      document.getElementById('signupForm').style.display = 'block';
    }

    function openSignup() {
      document.getElementById('signupPopup').style.display = 'flex';
      document.getElementById('signupForm').style.display = 'block';
      document.getElementById('loginForm').style.display = 'none';
    }

    function switchToSignup() {
      document.getElementById('signupForm').style.display = 'block';
      document.getElementById('loginForm').style.display = 'none';
    }

    function switchToLogin() {
      document.getElementById('loginForm').style.display = 'block';
      document.getElementById('signupForm').style.display = 'none';
    }

    function closePopup() {
      document.getElementById('signupPopup').style.display = 'none';
    }

    function validateSignup(event) {
      event.preventDefault();
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      const password = document.getElementById('signup-password').value.trim();

      if (!name || !email || !password) {
        alert("All fields are required for sign up!");
        return false;
      }

      alert("Successfully Registered!");
      closePopup();
      return false;
    }

    function validateLogin(event) {
      event.preventDefault();
      const email = document.getElementById('login-email').value.trim();
      const password = document.getElementById('login-password').value.trim();

      if (!email || !password) {
        alert("Both fields are required for login!");
        return false;
      }

      alert("Login successful!");
      closePopup();
      return false;
    }