const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const punctuationMarks = "/^[.,:!?]/"

  if (usernameValue === '' || usernameValue === null) {
    setErrorFor(username, 'Username cannot be blank');
  } else {
    setSuccessFor(username);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else if (passwordValue.length < 8) {
    setErrorFor(password, 'Password must be at least 8 characters');
  } else if (/[@#$&*^%!+=\/\\[\]|?.,<>)(;:'"~`]/.test(passwordValue) === false) {
    setErrorFor(password, 'Password must have at least 1 punctuation mark');
  } else if (/[a-z]/.test(passwordValue) === false) {
    setErrorFor(password, 'Password must have at least 1 lowercase letter');
  } else if (/[A-Z]/.test(passwordValue) === false) {
    setErrorFor(password, 'Password must have at least 1 uppercase letter');
  } else if (/[0-9]/.test(passwordValue) === false) {
    setErrorFor(password, 'Password must have at least 1 number');
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match');
  } else {
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}












