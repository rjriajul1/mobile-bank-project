const cashoutForm=document.getElementById('cashout-form').style.display='none';
 document.getElementById('transaction-form').style.display='none';
 
const addMoneyBox=document.getElementById('add-money-box')
.addEventListener('click',function(){
    // const addMoneyForm=document.getElementById('add-money-form').style.display='block';
    // const cashoutForm=document.getElementById('cashout-form').style.display='none';
    getElementByIdAndStatus('add-money-form','block')
    getElementByIdAndStatus('cashout-form','none')
    getElementByIdAndStatus('transaction-form','none')
})

const cashoutBox=document.getElementById('cashout-box')
.addEventListener('click', function(){
    
    // const addMoneyForm=document.getElementById('add-money-form').style.display='none';
    // const cashoutForm=document.getElementById('cashout-form').style.display='block';

    getElementByIdAndStatus('add-money-form','none')
    getElementByIdAndStatus('transaction-form','none')
    getElementByIdAndStatus('cashout-form','block')
   
})

const transactionHistoryBox=document.getElementById('transaction-history-box')
.addEventListener('click', function(){
    
    getElementByIdAndStatus('add-money-form','none')
    getElementByIdAndStatus('cashout-form','none')
    getElementByIdAndStatus('transaction-form','block')

})