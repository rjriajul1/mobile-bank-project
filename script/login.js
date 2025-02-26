const loginBtn = document.getElementById('login-btn')
.addEventListener('click', function(event){
    event.preventDefault();
   const mobileNumber=document.getElementById('mobile-number').value;
  const convertedPinNumber= getElementByIdValue('login-pin-number')
 
  if(mobileNumber.length === 11){
     if(convertedPinNumber === 1234){
         window.location.href="main.html"
     }
     else{
        alert('need a correct pin number');
     }
  }
  else{
    alert('need correct number');
  }
   
})