

let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let message = document.getElementById("message");
let subject = document.getElementById("subject");

fullname.addEventListener("focus",function(){
  document.getElementById("fullname-label").style.transform = "translateY(-60%)";
});

email.addEventListener("focus",function(){
  document.getElementById("email-label").style.transform = "translateY(-60%)";
});

message.addEventListener("focus",function(){
  document.getElementById("message-label").style.transform = "translateY(-60%)";
});

subject.addEventListener("focus", function(){
  document.getElementById("subject-label").style.transform = "translateY(-60%)";
})

let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCount(){
    let count = cart.reduce((sum, item) => sum + item.quantity,0);
    document.querySelector(".cart-count").innerText = count;
  }

  updateCount();

let cartlink = document.querySelector(".cart-link");
  cartlink.addEventListener("click",function (){
  window.location.href = "cart.html";
})
let logout = document.querySelector(".logout");
logout.addEventListener("click", function(){
  let confirmLogout = confirm("Are you sure want to logout?");

  if(confirmLogout){
    localStorage.setItem("isLoggedIn",false);
  }
  window.location.href = "index.html";
})
if(localStorage.getItem("isLoggedIn") !== "true"){
  window.location.href = "index.html";
}


document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  sendMail();
});

function sendMail(){
  let params = {
    Name : fullname.value,
    email : email.value,
    subject : subject.value,
    message : message.value
  }

  emailjs.send("service_hy3ebxa","template_6itgle2", params)
  .then(()=>{
    alert("Sweet Message Sent !");
    document.querySelector("form").reset();
  })
  .catch(() => {
    alert("Oops! Message failed 😢");
  });
}