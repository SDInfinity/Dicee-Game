
var player1=Math.floor((Math.random()*6)+1);
var player2=Math.floor((Math.random()*6)+1);



var diceimg1= "images/"+ "dice"+ player1 + ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",diceimg1);

var diceimg2="images/dice"+player2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",diceimg2);

if(player1>player2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(player1===player2)
{
  document.querySelector("h1").innerHTML="It's A Tie";
}
else
{
  document.querySelector("h1").innerHTML="Player 2 Wins";
}


document.addEventListener("keypress",function(event)     //default on pressing key
{
change(event.key);
});

function change(key)
{
  document.querySelector("h1").innerHTML="Start Again";
  document.querySelector("h1").style.color="white";
}
