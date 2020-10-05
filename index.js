var x = (6*Math.random() +1);
 x = Math.floor(x);
var y = (Math.random()*6 +1);
 y = Math.floor(y)
console.log(x);
document.getElementsByClassName('img1')[0].setAttribute("src","images/dice"+x+".png");
document.getElementsByClassName('img2')[0].setAttribute("src","images/dice"+y+".png");
if(x>y){document.getElementsByTagName("h1")[0].innerHTML = "🚩 Player 1 won";}
else if(x<y){document.getElementsByTagName("h1")[0].innerHTML = "Player 2 won 🚩";}
else {document.getElementsByTagName("h1")[0].innerHTML = "Its a draw , try again";}
