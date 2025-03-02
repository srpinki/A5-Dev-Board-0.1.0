function getInnerTextByID(id){
    const value = document.getElementById(id).innerText;
    return value;
}

function setInnerTextByIdAndValue (id, value){
    document.getElementById(id).innerText = value;
}