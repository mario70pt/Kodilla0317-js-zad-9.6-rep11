var btnClik = document.querySelector('#addElem');

function createItem(e) {
//pierwszy sposób
    var newElemLi = document.createElement("li");
    var newItem = document.createTextNode("item ");
    newElemLi.appendChild(newItem);
    document.getElementById("list").appendChild(newElemLi);
//albo
//drugi sposób
    /*var list = document.getElementById("list");
    list.innerHTML += '<li>item</li>'; */
}

btnClik.addEventListener('click', createItem);

//tylko nie wiem jak dopisać liczbę porządkową do item...:(
    
