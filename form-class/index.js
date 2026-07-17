document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const output = document.getElementById("output");

    // display previously saved Data -- function()

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // stop page reload

        //form validations

        //basic password check
        const password = document.getElementById("password").Value;
        const confirmPassword = document.getElementById("confirmPassword").Value;

        if (password !== confirmPassword) {
            alert("password do not match");
        }

        const formData = {
            firstName: document.getElementById("firstName").Value,
            
        }
    })
})