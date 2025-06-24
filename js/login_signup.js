    // =============Password Show & Hide============//
    const password = document.getElementById('login-PW');
    const showPasswordBtn = document.getElementById('show-password');

    showPasswordBtn.addEventListener('click', () => {
       const icon = showPasswordBtn.querySelector('i');
       const isHidden = password.getAttribute('type') === 'password';

      password.setAttribute('type', isHidden ? 'text' : 'password');
      icon.className = isHidden ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
      
      console.log('showPasswordBtn');
    });



    document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); 
        
    const loader = document.getElementById('loader'); 
    loader.classList.add('show');
        
    setTimeout(()=>{
    window.location.href = 'product.html';
    },1500);
});












