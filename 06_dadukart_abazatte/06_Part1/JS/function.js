
var uhrzeit = document.querySelector('div#uhrzeit');

function aktuelleUhrzeit()
{
  au = new Date();

  h = au.getHours();
  m = au.getMinutes();
  s = au.getSeconds();
  ms = au.getMilliseconds();

  if(h < 10)h = '0'+h;
  if(m < 10)m = '0'+m;
  if(s < 10)s = '0'+s;
  if(ms < 10)ms = '00'+ms;
  else if(ms < 100)ms = '0'+ms;

  uhrzeit.innerHTML=h + ":" + m + ":" + s + "." + ms;
}
setInterval(aktuelleUhrzeit, 10);
