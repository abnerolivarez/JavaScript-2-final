
    const form = document.getElementById('forgot-password-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = form.querySelector('input[type="email"]');
  const emailValue = emailInput.value;
  
  alert(`Password reset link sent to ${emailValue}.`);
  
  // Clear the input after submitting
  emailInput.value = "";  // Reset the input
});
