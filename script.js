function openLogin() {
    document.getElementById('loginModal').style.display = 'block';
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

function handleLogin() {
    // Add your login logic here
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Example: Check if username and password are valid (replace this with your actual authentication logic)
    if (username === 'your_username' && password === 'your_password') {
        alert('Login successful!');
        closeLogin();
    } else {
        alert('Invalid username or password. Please try again.');
    }

    return false; // Prevent form submission
}