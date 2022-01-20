
//https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var touch = false;

document.getElementById("button1").addEventListener("touchstart", setRandomColor1);
document.getElementById("button2").addEventListener("touchstart", setRandomColor2);
document.getElementById("button3").addEventListener("touchstart", setRandomColor3);

document.getElementById("button1").addEventListener("mousedown", setOnClick1);
document.getElementById("button2").addEventListener("mousedown", setOnClick2);
document.getElementById("button3").addEventListener("mousedown", setOnClick3);

function setRandomColor1() {
	touch = true;
  $("#button1").css("background-color", getRandomColor());
  document.getElementById("button1").innerText = "Tapped";
  $("#button2").css("background-color", '#FFFFFF');
  document.getElementById("button2").innerText = "Tap or Click me";
  $("#button3").css("background-color", '#FFFFFF');
  document.getElementById("button3").innerText = "Tap or Click me";
}

function setRandomColor2() {
	touch = true;
  $("#button2").css("background-color", getRandomColor());
  document.getElementById("button2").innerText = "Tapped";
  $("#button1").css("background-color", '#FFFFFF');
  document.getElementById("button1").innerText = "Tap or Click me";
  $("#button3").css("background-color", '#FFFFFF');
  document.getElementById("button3").innerText = "Tap or Click me";
}

function setRandomColor3() {
	touch = true;
  $("#button3").css("background-color", getRandomColor());
  document.getElementById("button3").innerText = "Tapped";
  $("#button1").css("background-color", '#FFFFFF');
  document.getElementById("button1").innerText = "Tap or Click me";
  $("#button2").css("background-color", '#FFFFFF');
  document.getElementById("button2").innerText = "Tap or Click me";
}

function setOnClick1(){
	if(!touch){
		$("#button1").css("background-color", '#FF0000');
		document.getElementById("button1").innerText = "Clicked!!!"
		$("#button2").css("background-color", '#FFFFFF');
		document.getElementById("button2").innerText = "Tap or Click me"
		$("#button3").css("background-color", '#FFFFFF');
		document.getElementById("button3").innerText = "Tap or Click me"
	}
	touch = false;
}

function setOnClick2(){
  if(!touch){
		$("#button2").css("background-color", '#FF0000');
		document.getElementById("button2").innerText = "Clicked!!!"
		$("#button1").css("background-color", '#FFFFFF');
		document.getElementById("button1").innerText = "Tap or Click me"
		$("#button3").css("background-color", '#FFFFFF');
		document.getElementById("button3").innerText = "Tap or Click me"
	}
	touch = false;
}

function setOnClick3(){
  if(!touch){
		$("#button3").css("background-color", '#FF0000');
		document.getElementById("button3").innerText = "Clicked!!!"
		$("#button2").css("background-color", '#FFFFFF');
		document.getElementById("button2").innerText = "Tap or Click me"
		$("#button1").css("background-color", '#FFFFFF');
		document.getElementById("button1").innerText = "Tap or Click me"
	}
	touch = false;
}
