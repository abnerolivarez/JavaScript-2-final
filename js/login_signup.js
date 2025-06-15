    // =============Password Show & Hide============//
    const password = document.getElementById('login-PW');
    const showPasswordBtn = document.getElementById('show-password');

    showPasswordBtn.addEventListener('click', () => {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      showPasswordBtn.textContent = type === 'password' ? '👁️' : '🙈';
      
      console.log('showPasswordBtn');
    });


    document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
    // Redirect to product.html
    alert('Successfully Login');
    window.location.href = 'product.html';
    
});












