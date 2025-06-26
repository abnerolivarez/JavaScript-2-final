// =====this is sending the cart items in the checkout page order summary======//
document.addEventListener('DOMContentLoaded', () => {
  // --- Your order summary code ---
  const orderSummary = document.querySelector('.order-summary'); 
  const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];

  let totalAmount = 0;

  checkoutItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalAmount += itemTotal;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('order-item');
    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="order-item-image">  
      <span class="item-title">${item.title} Qty:(${item.quantity})</span>
      <span class="item-price">₱${item.price}</span>
      <span class="item-total">₱${itemTotal.toLocaleString()}</span>
    `;
    orderSummary.insertBefore(itemDiv, orderSummary.querySelector('.total'));
  });

  const totalDiv = orderSummary.querySelector('.total span:last-child');
  totalDiv.textContent = `Total Amount: ₱${totalAmount.toLocaleString()}`;

  // --- Place order button listener ---//
  const placeOrderBtn = document.getElementById('place-order');

  placeOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    
    const paymentMethod = document.getElementById('payment-method').value;
    localStorage.setItem('paymentMethod', paymentMethod); // Store payment method
    
    if (!firstName || !lastName || !email || !address || !mobile) {
      alert('Please fill in all customer billing information');
      return;
    }

    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (paymentMethod === 'card') {
      const card = document.getElementById('card').value.trim();
      const expiry = document.getElementById('expiry').value.trim();
      const cvv = document.getElementById('cvv').value.trim();

      if (!card || !expiry || !cvv) {
        alert('Please fill in all credit card details.');
        return;
      }
    }

    alert('Thank you for your purchase.');


   // Store order summary data as JSON
    const newOrder = {
      items: checkoutItems,
      totalAmount: totalAmount,
      orderDate: new Date().toISOString(),
      paymentMethod: paymentMethod 
    };

    // Retrieve existing orders
    const previousOrders = JSON.parse(localStorage.getItem('trackOrders')) || [];

    // Add new order
    previousOrders.push(newOrder);

    // Save updated orders array back to localStorage
    localStorage.setItem('trackOrders', JSON.stringify(previousOrders));
    
    localStorage.setItem('cartCount', '0'); //reset cart number after place order confirm
    localStorage.removeItem('cartItems');   //reset all cart items after place order confirm

    // Clear form fields
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('payment-method').value = '';
    document.getElementById('card').value = '';
    document.getElementById('expiry').value = '';
    document.getElementById('cvv').value = '';

    // Redirect to trackorder.html
    window.location.href = "trackorder.html";
  });
});

  
//Selecting one of payment mode  to show in page//
document.getElementById('payment-method').addEventListener('change', function () {
  const selectedMethod = this.value;

  // Get all payment containers
  const creditCard = document.getElementById('creditCard-container');
  const installment = document.getElementById('calculator-container');
  const gcash = document.getElementById('gcash-container');

  // Hide all first
  creditCard.style.display = 'none';
  installment.style.display = 'none';
  gcash.style.display = 'none';

  // Show based on selected method
  if (selectedMethod === 'card') {
    creditCard.style.display = 'block';

  } else if (selectedMethod === 'installment') {
    installment.style.display = 'block';
    
  }else if(selectedMethod ==='gcash'){
    gcash.style.display ='block';
  }
});


//==============Monthly Calculator=================//

const calculateInterest = document.getElementById('calculateInterest').addEventListener('click',()=>{

  const principal = parseFloat(document.getElementById('principal').value);
  const months = parseInt(document.getElementById('months').value);
  const monthlyRate = 0.05; // Fixed annual interest rate

  if (isNaN(principal) || isNaN(months)) {
    alert("Please enter valid numbers for principal and months.");
    return;
  }
  if(months < 3){
        alert("It should be minimum of 3 months");
        return;
    }
  
 // Calculate monthly interest
  const monthlyInterest = principal * monthlyRate;
  
  // Calculate yearly interest (12 months of monthly interest)
  
  const monthlyInstallment = principal / months;
  const totalPayment = monthlyInterest* months + principal;
  const monthlyPaid = monthlyInstallment + monthlyInterest;
  const totalMonthlyInterest = months * monthlyInterest;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <div class="interest-results">  
      <strong>Results:</strong><br>
      Monthly Installment Included Interest: ₱${monthlyPaid.toLocaleString()}<br>
      Fixed Monthly Interest Rate: ${monthlyRate}%<br>
      Monthly Interest Rate: ₱${monthlyInterest.toLocaleString()} x ${months} mons.= ₱${totalMonthlyInterest.toLocaleString()}<br>
      Number of Installment: ${months} mons.<br>
      <h3>Total Amount to be Paid: <span>₱${totalPayment.toLocaleString()}</span></h3>
  </div>
  `;
});


// Convert Dollar to Peso//
window.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://v6.exchangerate-api.com/v6/6870cdf0c3d64aa9aa6d0cd5/latest/USD');
    const data = await response.json();
    const exchangeRate = data.conversion_rates.PHP;

    document.getElementById('dollar-rate').textContent = `Current Rate: ₱${exchangeRate.toFixed(2)}`;
  } catch (error) {
    document.getElementById('dollar-rate').textContent = 'Unable to fetch current rate.';
    console.error(error);
  }
});

const convertToPeso = document.getElementById('convertToPeso').addEventListener('click', async () => {
  const dollarAmount = parseFloat(document.getElementById('dollarInput').value);

  if (isNaN(dollarAmount) || dollarAmount < 0) {
    document.getElementById('result-convertion').textContent = 'Please enter a valid amount.';
    return;
  }

  try {
    // Fetch live exchange rate
    const response = await fetch('https://v6.exchangerate-api.com/v6/6870cdf0c3d64aa9aa6d0cd5/latest/USD');
    const data = await response.json();
    const exchangeRate = data.conversion_rates.PHP;

    // Show the current rate in the element with id="dollar-rate"
    document.getElementById('dollar-rate').textContent = `Current Rate: ₱${exchangeRate.toFixed(2)} `;

    const pesoAmount = dollarAmount * exchangeRate;
    document.getElementById('result-convertion').textContent = 
      `$${dollarAmount.toFixed(2)} = ₱${pesoAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  } catch (error) {
    document.getElementById('result-convertion').textContent = 'Error fetching exchange rate.';
    console.error(error);
  }
});

  // ======Lightbox=========//
    function openLightbox() {
    document.getElementById('lightbox').style.display = 'flex';
  }

  function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
  }



    
 
