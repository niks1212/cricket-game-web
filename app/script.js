document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    // When the form is submitted
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();  // Prevent form from actually submitting

        // Grab values from the form
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Simple validation (you can improve this by checking against a real backend)
        if (username && password) {
            // Simulate successful login
            alert(`Welcome, ${username}! Redirecting to the game...`);

            // Redirect to the game page
            window.location.href = "index.html";
        } else {
            // Show an error if username or password is missing
            alert("Please enter both username and password.");
        }
    });
});

