var tl = gsap.timeline();
tl.from(".category-grid a",{
  opacity: 0,
  duration : 1,
  y : 50,
  stagger : 0.3,
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