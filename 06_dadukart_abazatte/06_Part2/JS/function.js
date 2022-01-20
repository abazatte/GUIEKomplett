
var uhrzeit = document.querySelector('div#abgabe');
var uhrzeitBody = document.querySelector('body');
var tick = document.getElementById('tick');

function aktuelleUhrzeit()
{
  abgabeZeit = new Date(2020,10,29,59,59,59); //Monatszahl und Stundenzahl fangen von Null an
  aktuelleZeit = new Date();

  restlicheZeit = new Date(abgabeZeit - aktuelleZeit);

  jahr = restlicheZeit.getYear();
  t = restlicheZeit.getDate();
  h = restlicheZeit.getHours();
  m = restlicheZeit.getMinutes();
  s = restlicheZeit.getSeconds();

  if(t == 1)t = t = 0+' Tage';
  else if(t == 2)t = 1+' Tag';
  else t = (t-1)+' Tage';
  if(h < 10)h = '0'+h;
  if(m < 10)m = '0'+m;
  if(s < 10)s = '0'+s;

  if(jahr >= 70)
  {
    uhrzeit.innerHTML = t + "</br>" + h + ":" + m + ":" + s;
    if(t == "0 Tage")
    {
      uhrzeitBody.style.background = "red";
      if(restlicheZeit.getMinutes() < 5 && restlicheZeit.getHours() < 1)
      {
          tick.play();
      }
    }
  }
  else
  {
    uhrzeit.innerHTML = "zu </br> spät!";
    uhrzeitBody.style.background = "white";
    uhrzeitBody.style.color = "black";
  }

}
aktuelleUhrzeit();
setInterval(aktuelleUhrzeit, 1000);
