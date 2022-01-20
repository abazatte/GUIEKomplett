if ('touchstart') {
  $('#button1').on('touchstart',function() {
    setRandomColor1();
  });
} else {
  $('#button1').on('click',function(){
    setOnClick1();
  });
}

if ('touchstart') {
  $('#button2').on('touchstart',function() {
    setRandomColor2();
  });
} else {
  $('#button2').on('click',function(){
    setOnClick2();
  });
}

if ('touchstart') {
  $('#button3').on('touchstart',function() {
    setRandomColor3();
  });
} else {
  $('#button3').on('click',function(){
    setOnClick3();
  });
}

//https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor1() {
  $("#button1").css("background-color", getRandomColor());
  document.getElementById("button1").innerText = "Tapped";
  $("#button2").css("background-color", '#FFFFFF');
  document.getElementById("button2").innerText = "Tap or Click me";
  $("#button3").css("background-color", '#FFFFFF');
  document.getElementById("button3").innerText = "Tap or Click me";
}

function setOnClick1(){
  $("#button1").css("background-color", '#FF0000');
  document.getElementById("button1").innerText = "Clicked!!!"
  $("#button2").css("background-color", '#FFFFFF');
  document.getElementById("button2").innerText = "Tap or Click me"
  $("#button3").css("background-color", '#FFFFFF');
  document.getElementById("button3").innerText = "Tap or Click me"
}

function setRandomColor2() {
  $("#button2").css("background-color", getRandomColor());
  document.getElementById("button2").innerText = "Tapped";
  $("#button1").css("background-color", '#FFFFFF');
  document.getElementById("button1").innerText = "Tap or Click me";
  $("#button3").css("background-color", '#FFFFFF');
  document.getElementById("button3").innerText = "Tap or Click me";
}

function setOnClick2(){
  $("#button2").css("background-color", '#FF0000');
  document.getElementById("button2").innerText = "Clicked!!!"
  $("#button1").css("background-color", '#FFFFFF');
  document.getElementById("button1").innerText = "Tap or Click me"
  $("#button3").css("background-color", '#FFFFFF');
  document.getElementById("button3").innerText = "Tap or Click me"
}

function setRandomColor3() {
  $("#button3").css("background-color", getRandomColor());
  document.getElementById("button3").innerText = "Tapped";
  $("#button1").css("background-color", '#FFFFFF');
  document.getElementById("button1").innerText = "Tap or Click me";
  $("#button2").css("background-color", '#FFFFFF');
  document.getElementById("button2").innerText = "Tap or Click me";
}

function setOnClick3(){
  $("#button3").css("background-color", '#FF0000');
  document.getElementById("button3").innerText = "Clicked!!!"
  $("#button1").css("background-color", '#FFFFFF');
  document.getElementById("button1").innerText = "Tap or Click me"
  $("#button2").css("background-color", '#FFFFFF');
  document.getElementById("button2").innerText = "Tap or Click me"
}
