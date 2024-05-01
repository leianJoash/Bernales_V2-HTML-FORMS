document.addEventListener("DOMContentLoaded", function() {
    // Function to handle form submission
    document.getElementById("signInForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        // Get the values of email and username inputs
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        // You can perform further validation or processing here
        // For demonstration, let's just log the values
        console.log("Email:", email);
        console.log("Username:", username);
        // Reset the form
        this.reset();
        // Notify the user
        notifyUser("Sign-in successful!");
    });

    // Function to handle Google sign-in button click
    document.querySelector(".google-btn").addEventListener("click", function() {
        // Perform Google sign-in logic here
        console.log("Sign in with Google clicked");
    });

    // Function to handle Facebook sign-in button click
    document.querySelector(".facebook-btn").addEventListener("click", function() {
        // Perform Facebook sign-in logic here
        console.log("Sign in with Facebook clicked");
    });

    // Function to notify the user
    function notifyUser(message) {
        alert(message);
    }
});
