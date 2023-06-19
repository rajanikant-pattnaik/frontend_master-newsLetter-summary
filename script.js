function validateEmail() {
    // Regular expression pattern for email validation
    const emailItem=document.getElementById('input');
    const label=document.getElementById('invalid');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email=emailItem.value;
    // Check if the email matches the pattern
    console.log(email);
    console.log(emailRegex.test(email));
    document.getElementById('input').value='';
    emailItem.style.backgroundColor='pink';
    document.getElementById('invalid').value='invalid email'
    // return emailRegex.test(email);
  }
  
  
  