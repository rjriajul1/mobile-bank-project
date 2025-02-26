
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        // const bankAccountNumber=document.getElementById('bank-account-number').value;
        // const addMoneyAmount=document.getElementById('add-money-amount').value;
        // const convertedAmount =parseFloat(addMoneyAmount);
        // const addMoneyPinNumber=document.getElementById("add-money-pin-number").value;
        // const convertedAddMoneyPinNumber=parseInt(addMoneyPinNumber);
        // const mainBalance =document.getElementById('main-balance').innerText;
        // const convertedMainBalance=parseFloat(mainBalance);

        const bankAccountNumber = document.getElementById('bank-account-number').value;

        const addMoneyAmount = getElementByIdValue("add-money-amount");
        const addMoneyPinNumber = getElementByIdValue('add-money-pin-number');
        const mainBalance = getElementByIdInnerText('main-balance');
        const selectedBank = document.getElementById('bank-select').value;
        
           if(addMoneyAmount <= 0 ){
           alert('need a positive amount');
           return;
           
           }
        if (bankAccountNumber.length === 11) {
            if (addMoneyPinNumber === 1234) {
                const sum = mainBalance + addMoneyAmount;
                getElementSetIdAndValue('main-balance', sum)

                const transactionContaienr = document.getElementById('container');

                const div = document.createElement('div');
                div.style.marginTop='20px'
                div.style.backgroundColor='gray'
                div.style.borderRadius='10px'
                div.style.padding='10px'
                
                div.innerHTML=`
                
                <h1 class="text-2xl font-bold">mobile bank: ${selectedBank}</h1>
                <p class="text-2xl font-bold">account number: ${bankAccountNumber}</p>
                <p class="text-2xl font-bold">add amount: ${addMoneyAmount}</p>
                <p class="text-2xl font-bold"> id: ${(Math.random()*10).toFixed(3)}</p>
                <p class= "text-2xl font-bold"> date: ${new Date()}</p>
                `
                transactionContaienr.appendChild(div)
            }
            else {
                alert('Your pin is worng')
            }
        }
        else {
            alert('please need valid number')
        }
    })