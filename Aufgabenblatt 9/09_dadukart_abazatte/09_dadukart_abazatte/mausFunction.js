var linksRechtsNeu = 0;
var linksRechtsAlt = 0;
var a = 10;

function MausPosition (MausPos) {
  linksRechtsNeu = MausPos.clientX;
  document.getElementById("santadiv").style.top=(MausPos.clientY-15)+'px';
  if(linksRechtsNeu < linksRechtsAlt) {
    document.getElementById("santadiv").style.left=(MausPos.clientX)+'px';
    document.getElementById("santa").style.transform = 'scaleX(-1)';
  }
  else if(linksRechtsNeu > linksRechtsAlt){
    document.getElementById("santadiv").style.left=(MausPos.clientX-200)+'px';
    document.getElementById("santa").style.transform = 'scaleX(1)';
  }
  linksRechtsAlt = linksRechtsNeu;
}
