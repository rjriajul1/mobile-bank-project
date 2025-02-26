function getElementByIdValue(id){
    
    const getId = document.getElementById(id).value;
    const convertedNumber = parseFloat(getId);
    return convertedNumber;

}

function getElementByIdInnerText(id){
    const getId =document.getElementById(id).innerText;
    const convertedNumber=parseFloat(getId);
    return convertedNumber;
}


function getElementByIdAndStatus(id,status){
    document.getElementById(id).style.display=status;
   document.getElementById(id).style.display=status;

}

function getElementSetIdAndValue(id,value){
    
    document.getElementById(id).innerText=value;
}







