var linksDiv = document.getElementById('linksDiv');
var rechtsDiv = document.getElementById('rechtsDiv');
var mitteDiv = document.getElementById('mitteDiv');
var mitteText = document.getElementById('mitteText');

var linksTouch = false;
var rechtsTouch = false;
var genugZeit = false;

var startZeit = 0;
var aktuelleZeit = 0;

var rand = Math.floor(Math.random() * 2);

linksDiv.ontouchstart = function (eve) {
	linksTouch = true;
	startZeit = performance.now();
}

rechtsDiv.ontouchstart = function (eve) {
	rechtsTouch = true;
	startZeit = performance.now();
}

linksDiv.ontouchend = function (eve) {
	linksTouch = false;
}

rechtsDiv.ontouchend = function (eve) {
	rechtsTouch = false;
	
}

function linksRechtsTouch(){
	if (linksTouch && rechtsTouch) {
		mitteDiv.style.backgroundColor = "grey";
		aktuelleZeit = performance.now();
		if((aktuelleZeit-startZeit)<1000){
			mitteText.innerHTML = "1s";
		}
		else if((aktuelleZeit-startZeit)<2000){
			mitteText.innerHTML = "2s";
		}
		else if((aktuelleZeit-startZeit)<3000){
			mitteText.innerHTML = "3s";
		}
		else if((aktuelleZeit-startZeit)<4000){
			mitteText.innerHTML = "4s";
		}
		else if((aktuelleZeit-startZeit)>=4000){
			mitteDiv.style.visibility = "hidden";
			genugZeit = true;
		}
		aktuelleZeit = performance.now();
	} else {
		mitteDiv.style.backgroundColor = "red";
		mitteText.innerHTML = "Bitte auf jedes Gericht einen Finger legen";
		startZeit = 0;
		aktuelleZeit = 0;
	}
	if(genugZeit){
		if(rand == 0){
			linksDiv.style.backgroundColor = "red";
		}
		else {
			rechtsDiv.style.backgroundColor = "red";
		}
	}
}

setInterval(linksRechtsTouch, 10);

