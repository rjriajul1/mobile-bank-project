
document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    // const bankAccountNumber=document.getElementById('bank-account-number').value;
    // const addMoneyAmount=document.getElementById('add-money-amount').value;
    // const convertedAmount =parseFloat(addMoneyAmount);
    // const addMoneyPinNumber=document.getElementById("add-money-pin-number").value;
    // const convertedAddMoneyPinNumber=parseInt(addMoneyPinNumber);
    // const mainBalance =document.getElementById('main-balance').innerText;
    // const convertedMainBalance=parseFloat(mainBalance);

    const bankAccountNumber=document.getElementById('bank-account-number').value;
    
    const addMoneyAmount=getElementByIdValue("add-money-amount");
    const addMoneyPinNumber=getElementByIdValue('add-money-pin-number');
    const mainBalance=getElementByIdInnerText('main-balance');
    

    if(bankAccountNumber.length === 11){
        if(addMoneyPinNumber === 1234){
            const sum = mainBalance + addMoneyAmount;
            getElementSetIdAndValue('main-balance', sum)
        }
        else{
            alert('Your pin is worng')
        }
    }
    else{
      alert('please need valid number')
    }
})