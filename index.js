var dice1 = Math.floor(Math.random() * 6)+1;
var dice2 = (Math.floor(Math.random() * 6)+1);

var src1 = "./images/dice"+dice1+".png";
var src2 = "./images/dice"+dice2+".png";

document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src", src1);
document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src", src2);

if (dice1 > dice2){
    document.querySelector("body > div > h1").textContent = "🚩Player 1 wins!";
}
else if (dice1 < dice2){
    document.querySelector("body > div > h1").textContent = "Player 2 wins!🚩";
}
else if (dice1 = dice2){
    document.querySelector("body > div > h1").textContent = "Draw!";
}
