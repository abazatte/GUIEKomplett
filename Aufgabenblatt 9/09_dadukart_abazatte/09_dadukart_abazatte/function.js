
var presentPositions = new Array(47); //Fuer 24 Geschenke jeweils den linken- und hoehenabstand
var randTop, randLeft;
var samePosition = false;
var geschenkNummer = 1;
var geschenkReihenfolge = 1;
var merryChristmas = document.getElementById("merryChristmas");
var zeit = document.getElementById("zeit");
var startZeit = performance.now();
var gewonnen = false;

for (var i = 0; i < presentPositions.length; i+=2) { //Geschenk-Positionen werden erzeugt
  randTop = Math.floor(Math.random() * (window.screen.availHeight-183));
  randLeft = Math.floor(Math.random() * (window.screen.availWidth-80));
  presentPositions[i] = randTop;
  presentPositions[i+1] = randLeft;
  for(var j = 0; j < i; j+=2){
    samePosition = true;
    if(randTop <= presentPositions[j]-80 || randTop >= presentPositions[j]+80 || randLeft <= presentPositions[j+1]-80 || randLeft >= presentPositions[j+1]+80) {
      samePosition = false;
    }
    if(samePosition){
      i-=2;
    }
  }
}

for (var i = 0; i < presentPositions.length; i+=2) { //Geschenke werden an ihre Position gebracht
  document.getElementById("present"+geschenkNummer).style.top = presentPositions[i]+"px";
  document.getElementById("present"+geschenkNummer).style.left = presentPositions[i+1]+"px";
  geschenkNummer++;
}

function einsammeln(x) {
  if(x.id == "present"+geschenkReihenfolge) {
    x.style.visibility = "hidden";
    geschenkReihenfolge++;
  } /*else {
	  location.reload();
  }*/
  if(geschenkReihenfolge > 24 && !gewonnen) {
	gewonnen = true;
	var endZeit = performance.now();
	endZeit = (endZeit-startZeit)/1000;
	zeit.innerHTML = "Zeit: " + endZeit + " Sekunden";
	zeit.style.visibility = "visible";
	merryChristmas.style.visibility = "visible";
  }
}

function Mausklick (Ereignis) {
  if (!Ereignis)
    Ereignis = window.event;
  if (document.getElementById) {
    document.getElementById("text").style.left=(Ereignis.clientX+28)+'px';
    document.getElementById("text").style.top=(Ereignis.clientY+28)+'px';
  } else if (document.all) {
    document.getElementById("text").style.left=Ereignis.clientX+28
    document.getElementById("text").style.top=Ereignis.clientY+28
  }
}
