
const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');

        // Close other open items (optional)
        faqItems.forEach(other => {
          if (other !== item) {
            other.classList.remove('active');
          }
        });
      });
    });
    

//==== FAQ view toggle classlist with button inteaction =====//
document.addEventListener('click', (e) => {
  if (e.target.closest('.showmoreBtn')) {
    const showmoreBtn = e.target.closest('.showmoreBtn');
    const showContainerElement = document.querySelector('.showmore-container');

    if (showmoreBtn.textContent.trim().includes('Viewmore')) {
      showmoreBtn.innerHTML = 'Viewless <i class="fa-solid fa-arrow-up" id="arrow-icon"></i>';
      showContainerElement.classList.add('show');
      showContainerElement.classList.remove('hide');
      showmoreBtn.classList.add('color-transition');

    } else {
      showmoreBtn.innerHTML = 'Viewmore <i class="fa-solid fa-arrow-down" id="arrow-icon"></i>';
      showContainerElement.classList.remove('show');
      showContainerElement.classList.add('hide');
       showmoreBtn.classList.remove('color-transition');
    }
  }
});

