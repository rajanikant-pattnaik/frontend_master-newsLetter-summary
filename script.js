function validateEmail() {
    const emailItem=document.getElementById('input');
    const label=document.getElementById('invalid');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email=emailItem.value;
    const check=emailRegex.test(email);
    console.log(check)
    if(check){
      // document.getElementById('form-part').style.display='none';
    }
    else{
      emailItem.style.backgroundColor='orange'
    }
  }
  
  
  