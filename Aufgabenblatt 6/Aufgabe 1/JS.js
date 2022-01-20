function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  	var milli = today.getMilliseconds();
  m = checkTime(m);
  s = checkTime(s);
  	milli = checkTime(milli);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s + ":" + milli;
  var t = setTimeout(startTime, 055);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
