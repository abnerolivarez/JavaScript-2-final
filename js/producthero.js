


//Hero Section Image Slide //
  const slides = document.getElementById('carousel-slides');
  const dots = document.querySelectorAll('.manual-btn');
  const totalSlides = dots.length;
  let counter = 0;
  const intervalTime = 4000;
  let interval;

  function goToSlide(index) {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateDots(index % totalSlides);
    counter = index;
  }

  function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function autoSlide() {
    interval = setInterval(() => {
      counter++;
      goToSlide(counter);

      if (counter === totalSlides) {
        setTimeout(() => {
          // Disable animation to jump to real slide 0
          slides.style.transition = 'none';
          slides.style.transform = `translateX(0%)`;
          counter = 0;
          updateDots(counter);
        }, 500); // match transition duration
      }
    }, intervalTime);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.getAttribute('data-slide'));
      clearInterval(interval);
      goToSlide(index);
      autoSlide();
    });
  });

  goToSlide(0); // Start on first real slide
  autoSlide();

  
