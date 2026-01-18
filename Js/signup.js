
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let email = document.querySelector("#email");
let confirmpassword = document.querySelector("#confirmpassword");

let signupButton = document.querySelector(".signup-button");

signupButton.addEventListener("click", function(){
  
  validateCredentials(username, email, password, confirmpassword);
});

function validateCredentials(username, email, password, confirmpassword) {

  if(!username.value.trim() || !email.value.trim() || !password.value.trim() || !confirmpassword.value.trim()){
    alert("All fields are required");
    return
  }

  if(username.value.length < 6){
    alert("Username should be at least 6 characters long");
    return
  }
   if(password.value.length < 6){
    alert("Password should be at least 6 characters long");
    return
  }
  if(!isValidEmail(email)){
    alert("Enter Valid Email");
    return
  }
  if(!isValidPassword(password)){
     alert("Password should contain one uppercase, one lowercase, one symbol and a number (min 6 characters)");
    return
  }
  if(password.value.trim() !== confirmpassword.value.trim()){
    alert("Password and confirm password is not same, try again !");
    return;
  }


  localStorage.setItem("Username", username.value);
  localStorage.setItem("password", password.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("isLoggedIn", "true");

  window.location.href = "Home.html";
}

function isValidEmail(email){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.value.trim());
}

function isValidPassword(password) {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,}$/
  return regex.test(password.value.trim());
}