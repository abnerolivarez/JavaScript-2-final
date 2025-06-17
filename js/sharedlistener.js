//====This Part is to avoid duplication of code ====//

addNavbarListeners = ()=> {
    
  const myOrderBtn=document.getElementById('myOrderBtn').addEventListener('click',()=>{
        window.location.href="trackorder.html"
    });


// === when you searching this will redirect you to products ===//
const globalSearchInput = document.getElementById("search");
const globalSearchButton = document.getElementById("search-icon");

performSearch = () =>{
    const searchTerm = globalSearchInput.value.trim();
    if(searchTerm){
         window.location.href = `product.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

globalSearchButton.addEventListener("click", performSearch);
  
 globalSearchInput.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        performSearch();
    }
 });

//  ================= click Cart icon redirect to checkout page==================//
let cartItems = [];
let cartCount = 0;
 // if you click the cart icon what inside of it will display in the checkout page
if (localStorage.getItem('cartItems')) {
  cartItems = JSON.parse(localStorage.getItem('cartItems'));
}

// Update cartCount based on cartItems length
cartCount = cartItems.length;
 
 //==if you click the cart icon it will redirect to checkout page==//
document.getElementById('cart-icon').addEventListener('click', () => {
  if (cartCount <= 0) {
    alert('Cart is Empty');
    return;
  }
  // Save checkout items
  localStorage.setItem('checkoutItems', JSON.stringify(cartItems));
  window.location.href = "checkout.html";
});
//  ==========================End of Cart Icon===============================//


}



//====This for Cart Drop Down==== //
function setupCartFromStorage() {
  const cartNumber = document.getElementById("cart-number");
  const cartDropdown = document.getElementById("cart-dropdown");
  if (!cartNumber || !cartDropdown) return; // Exit if elements aren't ready

  const savedCount = parseInt(localStorage.getItem("cartCount")) || 0;
  cartNumber.textContent = savedCount;

  cartDropdown.innerHTML = ""; // Reset dropdown

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (cartItems.length === 0) {
    cartDropdown.innerHTML = `<div id="empty-cart-msg"><p>Your cart is empty</p></div>`;
    return;
  }

  cartItems.forEach(item => {
    const total = item.price * item.quantity;
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <img src="${item.image}" class="cart-item-image">
      <div>
        <p>${item.title}</p>
        <p>${item.quantity}
          <span class="item-price">₱${item.price.toLocaleString()}</span>
          = <span class="total-price-quantity">₱${total.toLocaleString()}</span>
        </p>
      </div>`;
    cartDropdown.appendChild(itemDiv);
  });
}


// document.addEventListener('DOMContentLoaded', () => {
//       const userData = JSON.parse(localStorage.getItem('loggedInUser'));
      
//       if (userData && userData.username) {
//         document.getElementById('logOut').textContent = userData.username;
//       } else {
//         // If not logged in, redirect to login
//         window.location.href = 'index.html';
//       }
//     });
