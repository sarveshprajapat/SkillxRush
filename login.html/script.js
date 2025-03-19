// Event listener for the form submission
document.querySelector('.login-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();
    
    // Get the values from the input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic form validation
    if (!email || !password) {
        alert('Please fill in all fields.');
        return; // Stop further processing if any field is empty
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation is successful, show a success message
    alert('Login successful!');

    // Here, you can handle sending the data to a server (e.g., using fetch or XMLHttpRequest)
    // Example:
    /*
    const formData = {
        email: email,
        password: password
    };
    fetch('/login-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => {
        if (response.ok) {
            alert('Login successful!');
        } else {
            alert('Invalid login credentials.');
        }
    });
    */
});
