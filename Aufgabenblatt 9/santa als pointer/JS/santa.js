var santa = document.getElementById("santa");
document.addEventListener("mousemove", getMouse);


santa.style.position = "absolute";
var santapos = {x:0, y:0};

setInterval(followMouse, 50);

var mouse = {x:0, y:0};

var dir = "right";
function getMouse(e){
  mouse.x = e.pageX;
  mouse.y = e.pageY;
    if(mouse.x > santapos.x){
      dir = "right";
    } else {
      dir = "left";
    }
}

function followMouse(){
  var distX = mouse.x - santapos.x;
  var distY = mouse.y - santapos.y;
  santapos.x += distX/5;
  santapos.y += distY/2;

  santa.style.left = santapos.x + "px";
  santa.style.top = santapos.y + "px";


    if (dir == "right"){
      santa.setAttribute("class", "right");
    } else {
      santa.setAttribute("class", "left");
    }

}
