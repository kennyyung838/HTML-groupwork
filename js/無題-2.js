window.onload = choosePic;

var myPix = new Array("../image/kagawa/shodoshima7.jpg","../image/kagawa/shodoshima5.jpg","../image/kagawa/shodoshima6.jpg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
