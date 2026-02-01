
let orderSummary = document.getElementById("order-summary");
const subtotalEl    = document.getElementById("subtotal");
  const deliveryEl    = document.getElementById("delivery");
  const packagingEl   = document.getElementById("packaging");
let totalPriceEl = document.getElementById("total-price");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  window.location.href = "cart.html";
}
let subtotal = 0;

if (!cart.length) {
  orderSummary.innerHTML = "<p>Your cart is empty 😢</p>";
} else {
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const p = document.createElement("p");
    p.innerHTML = `
      <span>${item.name} × ${item.quantity}</span>
      <span>₹${itemTotal}</span>
    `;
    orderSummary.appendChild(p);
  });
}

let delivery = subtotal > 500 ? 0 : 40;
let packaging = cart.length ? 20 : 0;
const total     = subtotal + delivery + packaging;

subtotalEl.textContent   = subtotal;
deliveryEl.textContent   = delivery;
packagingEl.textContent  = packaging;
totalPriceEl.textContent = total;

let placeOrderBtn = document.querySelector('.place-order-btn');

placeOrderBtn.addEventListener("click",function(){
  validateCheckout();
})
function validateCheckout(){
    
  let name     = document.getElementById("name").value.trim();
  let mobile   = document.getElementById("mobile").value.trim();
  let email    = document.getElementById("email").value.trim();
  let house    = document.getElementById("house").value.trim();
  let area     = document.getElementById("area").value.trim();
  let city     = document.getElementById("city").value.trim();
  let pincode  = document.getElementById("pincode").value.trim();
  
  let paymentMethodSelected = document.querySelector('input[name="payment"]:checked');
  
  if(name.length < 3){
    alert("Please enter a valid full name");
    return;
  }
  if(!/^[6-9]\d{9}$/.test(mobile)){
    alert('Please enter a valid 10 digit mobile number');
    return
  }
  if (!house || !area || !city) {
    alert("Please fill complete address");
    return;
  }
  if (!/^\d{6}$/.test(pincode)) {
    alert("Please enter a valid 6-digit pincode");
    return;
  }
  
  if(!paymentMethodSelected){
    alert("Please select a payment method");
    return;
  }

  placeOrder();
}


function placeOrder(){
  alert("Order Placed Successfully");

  const orderData = {
    orderId: "MJ-" + Date.now(),
    date: new Date().toLocaleDateString(),
    items: cart
  };

  localStorage.setItem("lastOrder", JSON.stringify(orderData));
  localStorage.removeItem("cart");

  // redirect
  window.location.href = "order-success.html";
}
