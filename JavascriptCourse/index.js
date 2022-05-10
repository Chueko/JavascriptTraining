//document.getElementById("count").innerText=5;

let countElem =document.getElementById("count");
let reg=document.getElementById("register");
reg.innerText="Registro de pasajeros: "
function increment(){
    let count=countElem.innerText;
    count=parseInt(count)+1;
    countElem.innerText=count;
    
    console.log("button has been clicked ");

}

function restart(){
    console.log(countElem.innerText);
    reg.textContent+=countElem.innerText+' - ';
    countElem.innerText=0;

}

let myPoints=3;
function add3Points(){
    myPoints+=3;
    console.log(myPoints);
}
function remove1Points(){
    myPoints+=-1;
    console.log(myPoints);
}
