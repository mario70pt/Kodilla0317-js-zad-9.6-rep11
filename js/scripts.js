//uchwyt elementu button o id="addElem"
var btnClik = document.querySelector('#addElem');
//funkcja dla tworzenia elementów "li" wraz z zagnieżdżaniem "item x"
function onClik () {
    //uchwyt elementu o id="list"
    var newlist = document.querySelector('#list');
    //tworzenie elementów "li"
    var newElemLi = document.createElement("li");
    //określenie indeksu porządkowego "li"
    var numLi = document.getElementsByTagName('li').length;
    //element "li" -> "list"        
    newlist.appendChild(newElemLi);
    //element "item" + liczba index porządkowy -> "li" 
    newElemLi.appendChild(document.createTextNode("item " + numLi++));    
}
//monitoring po kliknięciu myszką na button 'btnClik'wykonuje się wszystko z funkcji 'onClik'
btnClik.addEventListener('click', onClik);











/*var btnClik = document.querySelector('#addElem');

function createItem() {
//pierwszy sposób
    var newlist = document.getElementById("list");
    var newElemLi = document.createElement("li");
    
    var newItem = document.createTextNode("item ");
        
    newElemLi.appendChild(newItem);
        
    var num = document.getElementsByTagName('li').length;
    console.log(num);
    
    newlist.appendChild(newElemLi);
    */
//albo
//drugi sposób
    /*var newlist = document.getElementById("list");
    
    var num = document.getElementsByTagName('li').length;
    console.log(num);
    newlist.innerHTML += '<li>item</li>';
}*/

//btnClik.addEventListener('click', createItem);

//tylko nie wiem jak dopisać liczbę porządkową do item...:(
