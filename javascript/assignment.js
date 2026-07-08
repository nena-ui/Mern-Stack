function handleSubmit() {
    // Get all values
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    const address = document.getElementById("address").value;
    const phonenumber = document.getElementById("phonenumber").value;

    // Clear all previous error messages
    document.getElementById("firstname-required").innerText = "";
    document.getElementById("lastname-required").innerText = "";
    document.getElementById("password-required").innerText = "";
    document.getElementById("confirmpassword-required").innerText = "";
    document.getElementById("address-required").innerText = "";
    document.getElementById("phonenumber-required").innerText = "";

    let isValid = true;

  //  trim()-space rakhda ni sumbmit nahuney
    if (firstname.trim() === "") {
        document.getElementById("firstname-required").innerText = "Required!";
        isValid = false;
    }

    if (lastname === "") {
        document.getElementById("lastname-required").innerText = "Required!";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("password-required").innerText = "Required!";
        isValid = false;
    }

    if (confirmpassword === "") {
        document.getElementById("confirmpassword-required").innerText = "Required!";
        isValid = false;
    }

    if (address === "") {
        document.getElementById("address-required").innerText = "Required!";
        isValid = false;
    }

    if (phonenumber === "") {
        document.getElementById("phonenumber-required").innerText = "Required!";
        isValid = false;
    }

    // Check if passwords match
    if (password !== "" && confirmpassword !== "" && password !== confirmpassword) {
        document.getElementById("confirmpassword-required").innerText = "Passwords do not match!";
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert("Submitted Successfully!");
    }
}