function validatePassword(password) {
  // Regular expression to check for:
  // - At least 8 characters long
  // - At least one uppercase letter
  // - At least one lowercase letter
  // - At least one number
  // - At least one special character
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
  if (!regex.test(password)){
        inputElement.setCustomValidity("Your custom error message");

  }
  return regex.test(password);
}



document.getElementById('password').addEventListener('change', function() {
    // Regular expression to check for:
  // - At least 8 characters long
  // - At least one uppercase letter
  // - At least one lowercase letter
  // - At least one number
  // - At least one special character
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
  if (!regex.test(this.value)){
        this.setCustomValidity("Invalid Password");
        const errorMsg = document.getElementById('password-error');
        errorMsg.textContent = "Password is invalid!"
  }
});

document.getElementById('confirm-pw').addEventListener('change', function() {
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('password-error');
  const confirm = this.value;
  if (password === confirm) {
    // Passwords match
    console.log('Passwords match!');
    // Optionally, update UI to show success
    this.style.borderColor = 'green';
  } else {
    // Passwords do not match
    console.log('Passwords do not match!');
    // Optionally, update UI to show error
    errorMsg.textContent = "Passwords do not match!"
    this.style.borderColor = 'red';
  }
});

