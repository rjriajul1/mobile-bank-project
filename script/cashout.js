document.getElementById('cashout-btn')
.addEventListener('click',function(event){
    event.preventDefault();
   const cashoutAgentNumber=document.getElementById('cashout-agent-number').value;
   const cashoutAmount=getElementByIdValue('cashout-amount');
   const cashoutPinNumber=getElementByIdValue('cashout-pin-number');
   const mainBalance =getElementByIdInnerText('main-balance');
   
   if(mainBalance <= cashoutAmount){
    alert("corres your amount limit");
    return;
   }
   
   if(cashoutAgentNumber.length === 11){
      if(cashoutPinNumber === 1234){
        const sum =mainBalance - cashoutAmount;
        getElementSetIdAndValue('main-balance', sum);

        const transactionContaienr = document.getElementById('container');

                const div = document.createElement('div');

                
                div.style.marginTop='20px'
                div.style.backgroundColor='gray'
                div.style.borderRadius='10px'
                div.style.padding='10px'
                
                div.innerHTML=`
                <p class="text-2xl font-bold">Agent number: ${cashoutAgentNumber}</p>
                <p class="text-2xl font-bold">Cashout amount: ${cashoutAmount}</p>
                <p class="text-2xl font-bold"> id: ${(Math.random()*10).toFixed(3)}</p>
                <p class= "text-2xl font-bold"> date: ${new Date()}</p>

                `
                transactionContaienr.appendChild(div)

      }else{
        alert('need correct pin number')
      }
   }
   else{
    alert('need valid agent number')
   }
})


