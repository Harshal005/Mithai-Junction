
import {dryFruitSweets} from "./DryFruitProducts.js";


window.addEventListener("DOMContentLoaded", function(){
  let productsContainer = document.querySelector(".dryfruit-products-grid");

  dryFruitSweets.forEach(product => {
    let card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <div class="product-img">
              <img src="${product.image}" alt="Kaju Katli">
              <span class="badge">Bestseller</span>
            </div>

            <div class="product-info">
              <h3>${product.name}</h3>
              <p>${product.description}</p>

              <div class="price-cart">
                <span class="price">₹${product.price} / per 100g</span>
                <button class="add-to-cart"
                  data-id="${product.id}"
                  data-name="${product.name}"
                  data-price="${product.price}"
                  data-image="${product.image}"
                >Add to Cart</button>
              </div>
            </div>
    `

    productsContainer.appendChild(card);
  });


   let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart").forEach(btn=>{
    btn.addEventListener("click", function(){
      
      let product = {
        id : Number(btn.dataset.id),
        name : btn.dataset.name,
        price : Number(btn.dataset.price),
        image : btn.dataset.image,
        quantity : 1
      }
      console.log(product);
      let existing = cart.find(item => item.id === product.id);

      if(existing){
        existing.quantity += 1;
      }
      else{
        cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      updateCount();
      alert("Item added to cart 🛒");
      
      
    })
  })

  function updateCount(){
    let count = cart.reduce((sum, item) => sum + item.quantity,0);
    document.querySelector(".cart-count").innerText = count;
  }

  updateCount();
  let cartlink = document.querySelector(".cart-link");
cartlink.addEventListener("click",function (){
  window.location.href = "cart.html";
})
  
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