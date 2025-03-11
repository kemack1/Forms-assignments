  // JavaScript code for form validation

// Function to validate the form
function validateForm(event) {

  // Input 
  const inputField = document.getElementById('username');
  const errorMessage = document.getElementById('error-message');
  
  
  // Alphanumeric input (letters and numbers only)
  const regex = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (!regex.test(inputField.value)) {
      // Invalid input: display error message and prevent form submission
      errorMessage.style.display = 'inline';  
      event.preventDefault();  
  } else {
      // Valid input: hide error message and display confirmation
      errorMessage.style.display = 'none';  
      alert('Form submitted successfully!'); 
  }
}

// Add event listener to form submission
const form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);
