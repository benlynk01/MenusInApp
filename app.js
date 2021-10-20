var saberEle = document.body.querySelector(".saber");

var c = 0;

saberEle.innerHTML = "Counter = " + c;

function counter(){
    c = c + 1;
    saberEle.innerHTML = "Counter = " + c;
}

document.body.querySelector(".counter").addEventListener("click", function (){
  counter()
})
