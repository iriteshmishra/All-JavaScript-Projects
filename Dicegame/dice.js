//random number between 1 - 6 // player -1
var randomNum1=Math.floor(Math.random() * 6) + 1;
//mapping random to images in folder
var randomImage1 = "images/dice" + randomNum1 + ".png";
var image1=document.querySelectorAll("img")[0]; //player -1
image1.setAttribute("src",randomImage1);


//player -2
var randomNum2=Math.floor(Math.random() * 6) + 1;
var randomImage2 = "images/dice" + randomNum2 + ".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);


//player -3
var randomNum3=Math.floor(Math.random() * 6) + 1;
var randomImage3 = "images/dice" + randomNum3 + ".png";

var image3=document.querySelectorAll("img")[2];
image3.setAttribute("src",randomImage3);

//Main logic - decide who is winner

if(randomNum1 == randomNum2 && randomNum1 == randomNum3)
{
    document.querySelector("h1").innerHTML = "DRAW";
}
else if(randomNum1 > randomNum2 && randomNum1 > randomNum3)
{
    document.querySelector("h1").innerHTML = "Player 1 is the Winner";  
}
else if(randomNum2 > randomNum1 && randomNum2 > randomNum3)
{
    document.querySelector("h1").innerHTML = "Player 2 is the Winner";  
}
else if(randomNum3 > randomNum1 && randomNum3 > randomNum2)
{
    document.querySelector("h1").innerHTML = "Player 3 is the Winner";  
}
else
{
    document.querySelector("h1").innerHTML = "DRAW";
}