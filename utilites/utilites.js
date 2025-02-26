function getElementByIdValue(id){
    
    const getId = document.getElementById(id).value;
    const convertedNumber = parseFloat(getId);
    return convertedNumber;

}