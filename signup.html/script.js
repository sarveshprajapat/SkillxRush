document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic form validation
    if (!username || !email || !password) {
        alert('Please fill in all fields.');
        return;
    }
    
    // Simulate form submission
    alert('Signup successful!');
});
