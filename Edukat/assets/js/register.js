const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault(); 
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  const errors = document.querySelectorAll('.errors');
  const myForm = document.getElementById('myForm');

  let nameRegex = /^[a-zA-z\s-]{2,}$/;
  let emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let phoneRegex = /^\+?[1-9]\d{1,14}$/;

  errors.forEach((currError) => {
    currError.innerText = "";
  });

  let isValid = true;

  // Check the first name field
  if (!nameRegex.test(fname.value)) {
    document.getElementById("fnameError").innerText =
      "please enter a valid first name";
    isValid = false;
  }

  // Check the last name field
  if (!nameRegex.test(lname.value)) {
    document.getElementById("lnameError").innerText =
      "please enter a valid last name";
    isValid = false;
  }

  // Check the email field
  if (!emailRegex.test(email.value)) {
    document.getElementById("emailError").innerText =
      "please enter a valid email address";
    isValid = false;
  }

  // Check the phone field
  if (!phoneRegex.test(phone.value)) {
    document.getElementById("phoneError").innerText =
      "please enter a valid phone number";
    isValid = false;
  }

  if (isValid) {
    alert("Registration Successful");
    myForm.reset();
  }
});
