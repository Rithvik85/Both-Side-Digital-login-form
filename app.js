const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

logInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});





document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  
  // Clear previous error messages
  document.getElementById('nameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('passwordError').innerText = '';
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Perform validation
  var isValid = true;
  
  if (!name) {
    document.getElementById('nameError').innerText = 'Name is required';
    isValid = false;
  }
  
  if (!email) {
    document.getElementById('emailError').innerText = 'Email is required';
    isValid = false;
  } else if (!isValidEmail(email)) {
    document.getElementById('emailError').innerText = 'Invalid email address';
    isValid = false;
  }
  
  if (!password) {
    document.getElementById('passwordError').innerText = 'Password is required';
    isValid = false;
  } else if (password.length < 8) {
    document.getElementById('passwordError').innerText = 'Password must be at least 8 characters';
    isValid = false;
  }
  
  // If form is valid, submit the form
  if (isValid) {
    document.getElementById('myForm').submit();
  }
});

function isValidEmail(email) {
  // Simple email validation using regex
  var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
