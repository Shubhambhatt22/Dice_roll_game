var randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1) +1;

var randomImage1 = "images/dice"+randomNumber1+".png";

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "images/dice"+ randomNumber2 +".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "It's a Draw! 🤡";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Won! 🎉";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Won! 🎉";
}

