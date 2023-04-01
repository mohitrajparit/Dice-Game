// document.querySelector(".img1").src="images/dice1.png";
var rnd1=Math.floor(Math.random()*6)+1;
var rnd2=Math.floor(Math.random()*6)+1;

if(rnd1>rnd2){
    document.querySelector("h1").innerHTML="Player1 Wins 🚩";
}
else if(rnd1<rnd2){
    document.querySelector("h1").innerHTML="Player2 Wins 🚩";
}
else{
    document.querySelector("h1").innerHTML="Match Draws 🚩";
}

if(rnd1==1){
    document.querySelector(".img1").src="images/dice1.png";
}
else if(rnd1==2){
    document.querySelector(".img1").src="images/dice2.png";
}
else if(rnd1==3){
    document.querySelector(".img1").src="images/dice3.png";
}
else if(rnd1==4){
    document.querySelector(".img1").src="images/dice4.png";
}
else if(rnd1==5){
    document.querySelector(".img1").src="images/dice5.png";
}
else{
    document.querySelector(".img1").src="images/dice6.png";
}

if(rnd2==1){
    document.querySelector(".img2").src="images/dice1.png";
}
else if(rnd2==2){
    document.querySelector(".img2").src="images/dice2.png";
}
else if(rnd2==3){
    document.querySelector(".img2").src="images/dice3.png";
}
else if(rnd2==4){
    document.querySelector(".img2").src="images/dice4.png";
}
else if(rnd2==5){
    document.querySelector(".img2").src="images/dice5.png";
}
else{
    document.querySelector(".img2").src="images/dice6.png";
}

function refreshPage(){
    window.location.reload();
    var ig1=document.querySelector(".img1");
    var ig2=document.querySelector(".img2");
    ig1.classList.add("ani");
    ig2.classList.add("ani");
    

}


