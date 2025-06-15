
 document.addEventListener('DOMContentLoaded', () => {
  //Retrieve the Array of orders (or empty array if none)
  const trackOrders = JSON.parse(localStorage.getItem('trackOrders')) || [];

  // Check if there are any orders
  if (trackOrders.length > 0) {
    const summaryDiv = document.getElementById('track-order-summary');
    let allOrdersHTML = '';

    //Loop through each order in the array
    trackOrders.forEach(order => {
      const { items, totalAmount, orderDate, paymentMethod } = order;

      let summaryHTML = `
        <p class="order-date">Order Date: ${new Date(orderDate).toLocaleString()}</p>
      `;

      items.forEach(item => {
        const itemTotal = item.price * item.quantity;
        summaryHTML += `
          <div class="order">
            <img id="track-order-img" src="${item.image}" alt="${item.title}">
            <div class="details">
              <div class="product-name">${item.title} Qty:(${item.quantity})</div>
              <div class="price"><span>Original Price</span> ₱${item.price.toLocaleString()}</div>
              <div class="status" id="status">To Receive</div>
              <div class="item-total">₱${itemTotal.toLocaleString()}</div>
              
              <div class="actions">
                <button class="track-order-Btn">Order receive</button>
                <button>Contact Seller</button>

                <button class="track-order-deleteBtn" data-order-date="${orderDate}">Delete
                  <i class="fa-solid fa-trash trash"></i>
                </button>

              </div>
            </div>
          </div>
        `;
      });

  
      summaryHTML += `
      
      <div class="track-payment-container">
        <span class="track-payment-method" id="track-payment-method">Mode of Payment:<strong> ${paymentMethod.toUpperCase() || 'Not specified'}</strong></span>
        <h4 class="order-amount"><span>Total Amount:</span>₱${totalAmount.toLocaleString()}</h4><hr>
      </div>
      `;
      allOrdersHTML += summaryHTML;
    });

    //set the summary HTML
    summaryDiv.innerHTML = allOrdersHTML;

    //===== this is to delete ordet item=====//
    document.querySelectorAll('.track-order-deleteBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const orderDate = btn.getAttribute('data-order-date');
        deleteOrder(orderDate);
      });
    });
    
  } else {
    document.getElementById('track-order-summary').innerHTML = '<p>No orders found.</p>';
  }
});

//===this function updating order after deleted====//
function deleteOrder(orderDate) {
  const trackOrders = JSON.parse(localStorage.getItem('trackOrders')) || [];
  const updatedOrders = trackOrders.filter(order => order.orderDate !== orderDate);

  // Save updated orders array back to localStorage
  localStorage.setItem('trackOrders', JSON.stringify(updatedOrders));

  alert('Order deleted.');

  // Refresh the page or re-render orders
  location.reload();
}

//===confirming the order received===//
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('track-order-Btn')) {
    
    const orderElement = e.target.closest('.order');
    const statusElement = orderElement.querySelector('.status');
    const trackOrderBtn = orderElement.querySelector('.track-order-Btn');

    if (statusElement.textContent === 'To Receive' ||  trackOrderBtn.innerText === 'Order receive') {
      statusElement.textContent = 'Completed';
      statusElement.classList.add('completed-status');
      trackOrderBtn.innerText='Order recieved';
      trackOrderBtn.classList.add('changed-color');

      // Disable the button to lock it
      trackOrderBtn.disabled = true;
      trackOrderBtn.style.cursor = 'not-allowed';
      trackOrderBtn.style.opacity = '0.6';


    } else {
      statusElement.textContent = 'To Receive';
      trackOrderBtn.innerText='Order recieve';
      statusElement.classList.remove('completed-status');
      trackOrderBtn.classList.remove('changed-color');
       console.log('Removing changed-color class');
    }
  }
});





