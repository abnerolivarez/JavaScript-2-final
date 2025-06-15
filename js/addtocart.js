
const newProductCard =[
      {
        id: 1,
        img:'newitems/nike.png',
        images:['newitems/nike.png','newitems/nike1.png','newitems/nike2.png',
          'newitems/nike3.png','newitems/nike4.png'],
        title:'Air Max Nike',
        price: 6000,
        description:'Flymesh and synthetic',
      },
      {
        id: 2,
        img:'newitems/watch.png',
        images:['newitems/watch.png','newitems/watch1.png','newitems/watch2.png',
                'newitems/watch3.png'],
        title:'Seiko',
        price: 5000,
        description:'water proof',
      },
      {
        id: 3,
        img:'newitems/jacket.png',
        images:['newitems/jacket.png','newitems/jacket1.png','newitems/jacket2.png',
                'newitems/jacket3.png'],
        title:'Varsity Jacket',
        price: 1800,
        description:'80% Wool, 20% Polyester;',
      },
      {
        id: 4,
        img:'newitems/backpack.png',
         images:['newitems/backpack.png','newitems/backpack1.png','newitems/backpack2.png',
                  'newitems/backpack3.png'],
        title:'Backpack',
        price: 1200,
        description:'100% Polyester',
      },
];
const myOrderBtn = document.getElementById('myOrderBtn').addEventListener('click',()=>{
        window.location.href="trackorder.html";
  });


  //==after login from index.html it will save the user/email here & display in logOut id 
document.addEventListener('DOMContentLoaded', () => {
      const userData = JSON.parse(localStorage.getItem('loggedInUser'));
      
      if (userData && userData.username) {
        document.getElementById('logOut').textContent = userData.username;
      } else {
        // If not logged in, redirect to login
        window.location.href = 'index.html';
      }
    });



//====this is to display new product Arrival====//
const newProductItems = document.getElementById('product-card');
newProductItems.innerHTML = newProductCard.map((newitem, index) => `

    <div class="product-newitem-container">
      <div class="img-container">
        <img src="${newitem.img}" alt="" class="newitem-img">
        <div class="new-label-container">
          <span class="new-label">new</span>
        </div>
      </div>
      
      <p class="newitem-title">${newitem.title}</p>
      <span class="newitem-price">₱${Number(newitem.price).toLocaleString()}</span>
      
      <div class="description-container">
        <p class="newitem-description">${newitem.description}</p>
      </div>

      <div>
        <button class="newProductBtn-decrement"id="newProductBtn-decrement">-</button>
        <span id="newitem-counter">1</span>
        <button class="newProductBtn-increment"id="newProductBtn-increment">+</button>
      </div>
      
      <div class="newitemBtn">
        <button class="add-to-cart-btn" id="add-to-cart-btn"data-id="${index}">Add to Cart
            <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>

`).join('');


//=========this script is to get the productData inside Array  //
document.addEventListener("DOMContentLoaded", function () {
  const product = JSON.parse(localStorage.getItem("selectedProduct"));
  if (product) {
    document.getElementById("product-img").src = product.img; // Main image in thumbnail
    
    // Thumbnail image//
    document.getElementById("product-image1").src = product.image1;
    document.getElementById("product-image2").src = product.image2;
    document.getElementById("product-image3").src = product.image3;
    document.getElementById("product-image4").src = product.image4;
    document.getElementById("product-image5").src = product.image5;
    
    
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("stocks").textContent = product.stocks;
    
    document.getElementById("product-description1").textContent = product.description1;
    document.getElementById("product-description2").textContent = product.description2;
    document.getElementById("product-description3").textContent = product.description3;

    document.getElementById("product-price").textContent = "₱" + product.price.toLocaleString();
    document.getElementById("product-discount").textContent = "₱" + product.discount.toLocaleString();
    document.getElementById("total-price").textContent = "₱" + product.price.toLocaleString();
  }

  displayCartItems(); //this is to show the dropdown cart items
});

// ======Counter=====//
let counter = 1;
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const totalPriceElement = document.getElementById('total-price');

incrementBtn.addEventListener('click', () => {
  counter++;
  counterElement.textContent = counter;
  updateTotal();
});

decrementBtn.addEventListener('click', () => {
  if (counter > 1) {
    counter--;
    counterElement.textContent = counter;
    updateTotal();
  }
});

function updateTotal() {
  const priceText = document.getElementById("product-price").textContent;
  const price = parseFloat(priceText.replace(/[₱,]/g, ''));
  const total = price * counter;
  totalPriceElement.textContent = "₱" + total.toLocaleString();
}

const mainImg = document.getElementById("product-img");
const thumbnails = document.querySelectorAll(".image-item img");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("mouseover", () => {
    mainImg.src = thumb.src;
  });
});

const showToast = (message) => {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};


//======This is for updating cart item in index.html and product.html======//
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartNumber = document.getElementById('cart-number');
const addToCartBtn = document.getElementById('addtoCartBtn');
const cartDropdown = document.getElementById('cart-dropdown');
const counterElementNumber = document.getElementById('counter');

cartNumber.textContent = cartCount;

//=====Add to Cart item //
addToCartBtn.addEventListener('click', () => {
  const quantity = parseInt(counterElementNumber.textContent);
  const currentImage = mainImg.src;
  const title = document.getElementById('product-title').textContent;
  const priceText = document.getElementById("product-price").textContent;
  const price = parseFloat(priceText.replace(/[₱,]/g, ''));

  // Check if item already exists in cartItems
  const existingItem = cartItems.find(item => item.title === title && item.image === currentImage);

   if (existingItem) {
    existingItem.quantity += quantity; // Increase quantity
  } else {
    const newItem = {
      image: currentImage,
      title: title,
      quantity: quantity,
      price: price
    };
    cartItems.push(newItem); // Only push if new
  }

  cartCount += quantity;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartCount', cartCount);
  cartNumber.textContent = cartCount;

  displayCartItems();
  // showToast message for cart
  showToast(`${quantity} item${quantity > 1 ? 's' : ''} added to cart`);


  counter = 1;
  counterElementNumber.textContent = counter;
});



// =========this is for New Product Item Arrival===================// 
const NewcartNumber = document.getElementById('cart-number');
let totalCartCount = 0;

// Loop through each product container
document.querySelectorAll('.product-newitem-container').forEach((container) => {
  const incrementBtn = container.querySelector('#newProductBtn-increment');
  const decrementBtn = container.querySelector('#newProductBtn-decrement');
  const newItemCounter = container.querySelector('#newitem-counter');
  const addToCartBtn = container.querySelector('#add-to-cart-btn');
  const newPriceBtn = container.querySelector('#newitem-price');

  let counter = 1;

  // Increment button
  incrementBtn.addEventListener('click', () => {
    counter++;
    newItemCounter.innerText = counter;
  });

  // Decrement button
  decrementBtn.addEventListener('click', () => {
    if (counter > 1) {
      counter--;
    }
    newItemCounter.innerText = counter;
  });

  // Add to Cart button for New Arrival item
  addToCartBtn.addEventListener('click', () => {
  totalCartCount += counter;
  NewcartNumber.innerText = totalCartCount;

  // Get the product data
  const imgSrc = container.querySelector('.newitem-img').src;
  const title = container.querySelector('.newitem-title').innerText;
  const priceText = container.querySelector('.newitem-price').innerText;
  const price = parseFloat(priceText.replace(/[₱,]/g, ''));

  // Check if the item is already in the cart
  const existingItem = cartItems.find(item => item.title === title && item.image === imgSrc);

  if (existingItem) {
    existingItem.quantity += counter; // Increase quantity
  } else {
    const newItem = {
      image: imgSrc,
      title: title,
      quantity: counter,
      price: price
    };
    cartItems.push(newItem); // Push only if it's new
  }

  // Update the cart count and save in localStorage
  cartCount += counter;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  localStorage.setItem('cartCount', cartCount);
  cartNumber.textContent = cartCount;

  displayCartItems(); // Update the dropdown

  // Show toast message for new arrival
   showToast(`${counter} item${counter > 1 ? 's' : ''} added to cart`);

  // Reset counter display to 1
  counter = 1;
  newItemCounter.innerText = counter;
});

});


// if you click the cart icon what inside of it will dispaly in the checkout page
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



// ===========Cart Dropdown items=========// 
function displayCartItems() {
  cartDropdown.innerHTML = '';

  if (cartItems.length === 0) {
    cartDropdown.innerHTML = `<div id="empty-cart-msg"><p>Your cart is empty</p></div>`;
    return;
  }

  cartItems.forEach((item,index) => {
    const total = item.price * item.quantity;
    const itemDiv = document.createElement('div');
    
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <img src="${item.image}" class="cart-item-image">
      <div>
        <p>${item.title}</p>
        <div>
          <p>${item.quantity}
            <span class="item-price">₱${item.price.toLocaleString()}</span>
            = <span class="total-price-quantity">₱${total.toLocaleString()}</span>
             <button class="deleteBtn" data-index="${index}">Delete</button>
          </p>
         
        </div>
      </div>
    `;
    cartDropdown.appendChild(itemDiv);
  });

  // Attach event listener to each delete button
document.querySelectorAll('.deleteBtn').forEach(button => {
  button.addEventListener('click', function () {
    const index = this.dataset.index;
    const removedItem = cartItems[index];

    // Subtract the quantity of removed item from cartCount
    cartCount -= removedItem.quantity;

    // Update cartItems array and cartCount
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', cartCount);

    // Update visual cart number
    cartNumber.textContent = cartCount;

    // Re-render the cart UI
    displayCartItems();
  });
});
}


// to reset the cart number//
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', () => {
  cartCount = 0;
  cartItems = [];
  counter = 1;

  cartNumber.textContent = cartCount;
  counterElementNumber.textContent = counter;

  localStorage.removeItem('cartCount');
  localStorage.removeItem('cartItems');

  displayCartItems();
});

// ==========check out button======//
const checkoutBtn = document.querySelector('.checkoutBtn');
checkoutBtn.addEventListener('click', () => {
  localStorage.setItem('checkoutItems', JSON.stringify(cartItems));

  if(cartCount ===0){
    alert('Your Cart is Empty');
    return;
  }
  window.location.href = 'checkout.html';
});


const thumbs = document.querySelectorAll('.lightbox-thumb');
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentIndex = 0;

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentIndex = index;
            showImage();
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
        showImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbs.length;
        showImage();
    });

    function showImage() {
        lightboxImage.src = thumbs[currentIndex].src;
    }


// Light Box for New Arrivals//
let currentItemImages =[];
let currentImageIndex = 0;

const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.close');
const lightboxPrev = document.querySelector('.Btn-prev');
const lightboxNext = document.querySelector('.Btn-next');

// Add click event to all product images
document.querySelectorAll('.product-newitem-container').forEach((container, index) => {
  container.querySelector('.newitem-img').addEventListener('click', () => {
    //store all images for this item in newProductCard[index].images
    currentItemImages = newProductCard[index].images;
    currentImageIndex = 0;
    showLightboxImage();
    lightboxModal.style.display = 'block';
  });
});

function showLightboxImage() {
  lightboxImg.src = currentItemImages[currentImageIndex];
}

// Next / prev buttons
lightboxPrev.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + currentItemImages.length) % currentItemImages.length;
  showLightboxImage();
});

lightboxNext.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % currentItemImages.length;
  showLightboxImage();
});

// Close the lightbox
lightboxClose.addEventListener('click', () => {
  lightboxModal.style.display = 'none';
});

// Close when clicking outside the image
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = 'none';
  }
});


// =====Product Review Section======//
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('ratingValue');
const reviewText = document.getElementById('reviewText');
const submitBtn = document.getElementById('submitReview');
const reviewOutput = document.getElementById('reviewOutput');

let selectedRating = 0;

// Load saved review from localStorage (if any)
window.addEventListener('load', () => {
  const savedReview = JSON.parse(localStorage.getItem('productReview'));
  
    ratingValue.textContent = savedReview.rating;
    selectedRating = savedReview.rating;

    // Show static stars in rateNumber
    showStarsOutput(savedReview.rating);

    // Highlight stars based on saved rating
    stars.forEach(star => {
      if (parseInt(star.getAttribute('data-value')) <= selectedRating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  
});

// Handle star click
stars.forEach(star => {
  star.addEventListener('click', () => {
    selectedRating = parseInt(star.getAttribute('data-value'));
    ratingValue.textContent = selectedRating;

    // Highlight stars up to the clicked one
    stars.forEach(s => {
      if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
        s.classList.add('selected');
      } else {
        s.classList.remove('selected');
      }
    });
  });
});


// ====Handle review submission=======//
submitBtn.addEventListener('click', () => {
  const review = reviewText.value.trim();
  const imageInput = document.getElementById('upload-image');
  const imageFile = imageInput.files[0];

  if (selectedRating === 0 || review === '') {
    alert('Please provide a rating and a review.');
    return;
  }

 let userName = "Guest";
  const loggedUser = localStorage.getItem('loggedInUser');
if (loggedUser) {
  try {
    const parsedUser = JSON.parse(loggedUser); // must be stored as JSON object
    userName = parsedUser.email || "Guest";
  } catch (e) {
    userName = loggedUser; // fallback in case it's just email string
  }
}

  const userAvatar = "https://i.ibb.co/6Z8NQhG/user.png";
  const staticStars = getStaticStars(selectedRating);

  function renderReviewBlock(reviewText, stars, mediaHTML = '',index, username) {
    return `
      <div class="review-block-container data-index="${index}">
        <div class="review-block">
          <img src="${userAvatar}" alt="User Avatar" class="avatar-img">
          <div>
            <strong>${userName}</strong><br>
            <div>${stars}</div>
          </div>
        </div>
        <p>${reviewText}</p>
        ${mediaHTML}
        <button class="delete-review-btn" data-index="${index}">Delete</button>
      </div>
    `;
  }

  if (imageFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const mediaData = e.target.result;
      const mediaType = imageFile.type.startsWith('image/') ? 'image' : 'video';

      let mediaHTML = '';
      if (mediaType === 'image') {
        mediaHTML = `<img class="media-item-img" src="${mediaData}" alt="Review Media">`;
      } else {
        mediaHTML = `
          <video class="media-item-video" controls>
            <source src="${mediaData}" type="${imageFile.type}">
            Your browser does not support the video tag.
          </video>
        `;
      }

      const reviewHTML = renderReviewBlock(review, staticStars, mediaHTML);
      document.getElementById('review-comments').insertAdjacentHTML('beforeend', reviewHTML);

      const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
      reviews.push({
      username: userName, // <- pull this from logged-in user
      rating: selectedRating,
      review,
      media:  null
    });
      localStorage.setItem('productReviews', JSON.stringify(reviews));

      showStarsOutput(selectedRating);
      reviewText.value = '';
    
    };
    
    reader.readAsDataURL(imageFile);
  } else {
    const reviewHTML = renderReviewBlock(review, staticStars);
    document.getElementById('review-comments').insertAdjacentHTML('beforeend', reviewHTML);

    const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    reviews.push({ rating: selectedRating, review}); //media: null (note add this if connect to database)
    
    localStorage.setItem('productReviews', JSON.stringify(reviews));

    showStarsOutput(selectedRating);
    reviewText.value = '';
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const savedReviews = JSON.parse(localStorage.getItem('productReviews')) || [];
  const reviewComments = document.getElementById('review-comments');
  reviewComments.innerHTML = ''; // clear old
  const userAvatar = "https://i.ibb.co/6Z8NQhG/user.png";

  savedReviews.forEach((data, index) => {
    const stars = getStaticStars(data.rating);
    let mediaHTML = '';

    if (data.media) {
      if (data.media.type === 'image') {
        mediaHTML = `<img class="media-item-img" src="${data.media.src}" alt="Review Media">`;
      } else if (data.media.type === 'video') {
        mediaHTML = `
          <video class="media-item-video" controls>
            <source src="${data.media.src}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
      }
    }
    const username = data.username || "Guest"; //

    const reviewHTML = `
      <div class="review-block-container">
        <div class="review-block">
          <img src="${userAvatar}" alt="User Avatar" class="avatar-img">
          <div>
            <strong>${username}</strong><br>
            <div>${stars}</div>
          </div>
        </div>
        <p>${data.review}</p>
        ${mediaHTML}
      </div>
    `;
    document.getElementById('review-comments').insertAdjacentHTML('beforeend', reviewHTML);
  });

  if (savedReviews.length > 0) {
    showStarsOutput(savedReviews[savedReviews.length - 1].rating);
  }
});

function getStaticStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<span class="star-icon${i <= rating ? ' filled' : ''}">&#9733;</span>`;
  }
  return stars;
}

function showStarsOutput(rating) {
  let outputStars = '';
  for (let i = 1; i <= 5; i++) {
    outputStars += `<span class="star-icon${i <= rating ? ' filled' : ''}">&#9733;</span>`;
  }
  document.getElementById('rate-number').innerHTML = outputStars;
  document.getElementById('star-review').innerHTML = outputStars;
  document.getElementById('upper-rating').textContent = parseFloat(rating).toFixed(1);
}



// === when you searching this will redirect you to products ===
const globalSearchInput = document.getElementById("search");
const globalSearchButton = document.getElementById("search-icon");

performSearch = ()=>{
    const searchTerm = globalSearchInput.value.trim();
    if(searchTerm){
         window.location.href = `/product.html?search=${encodeURIComponent(searchTerm)}`;
    }
}

globalSearchButton.addEventListener("click", performSearch);
  
 globalSearchInput.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        event.preventDefault();
        performSearch();
    }
 });

