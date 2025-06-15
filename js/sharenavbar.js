
//====This Part is to share code with other page ====//
shareNavbar = () => {
  fetch('product.html')
    .then(response => response.text())
    .then(htmlString => {
      const getcode = document.createElement('div');
      getcode.innerHTML = htmlString;

      const navbar = getcode.querySelector('#navbar');
      if (navbar) {
        document.getElementById('navbar-output').innerHTML = navbar.outerHTML;

        // Inject user email into the navbar
        const userData = localStorage.getItem('loggedInUser');
        const emailTarget = document.querySelector('#logOut');
        if (userData && emailTarget) {
          try{
            const parsed = JSON.parse(userData);
            emailTarget.textContent = parsed.username || parsed.email || 'Guest' ;
          }catch(e){
            console.error('Ivalid JSON in loggedInUser',e);
          }
        }


        if (typeof addNavbarListeners === 'function') {
          addNavbarListeners();
        }

        if (typeof setupCartFromStorage === 'function') {
          setupCartFromStorage();
        }
      }

      const footer = getcode.querySelector('.footer');
      if (footer) {
        document.getElementById('footer-output').innerHTML = footer.outerHTML;
      }
    })
    .catch(error => console.error('Error loading navbar:', error));
};

document.addEventListener('DOMContentLoaded', shareNavbar);
