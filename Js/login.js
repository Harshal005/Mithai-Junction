

var loginButton = document.querySelector("#login-button");


var storedUsername = localStorage.getItem("Username");

var storedPassword = localStorage.getItem("password");

var loginUsername = document.querySelector("#login-username");
var loginPassword = document.querySelector("#login-password");

loginButton.addEventListener("click", function(){

  // console.log(storedUsername);
  // console.log(storedPassword);
  // console.log(loginUsername);
  // console.log(loginPassword);
  
  
  if(!loginUsername.value.trim() || !loginPassword.value.trim()){
    alert("Please Enter all the fields");
    return
  }
  
  if(storedUsername !== loginUsername.value.trim() || storedPassword !== loginPassword.value.trim()){
    alert("Invalid Credentials Try Again !!");
    return
  }
  else if(storedUsername === loginUsername.value.trim() && storedPassword === loginPassword.value.trim()){
    alert("Login Successful");
    localStorage.setItem("isLoggedIn",true);
    window.location.href = "home.html";
  }


})