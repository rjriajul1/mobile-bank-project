document.getElementById('cashout-btn')
.addEventListener('click',function(event){
    event.preventDefault();
   const cashoutAgentNumber=document.getElementById('cashou-agent-number').value;
   const cashoutAmount=getElementByIdValue('cashout-amount');
   const cashoutPinNumber=getElementByIdValue('cashout-pin-number');
   const mainBalance =getElementByIdInnerText('main-balance');
   
   
   if(cashoutAgentNumber.length === 11){
      if(cashoutPinNumber === 1234){
        const sum =mainBalance - cashoutAmount;
        getElementSetIdAndValue('main-balance', sum);

      }else{
        alert('need correct pin number')
      }
   }
   else{
    alert('need valid agent number')
   }
})