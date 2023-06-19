function validateEmail() {
    // Regular expression pattern for email validation
    const email=document.getElementsByClassName('input');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Check if the email matches the pattern
    console.log(emailRegex.test(email));
    // return emailRegex.test(email);
  }
  
  
  