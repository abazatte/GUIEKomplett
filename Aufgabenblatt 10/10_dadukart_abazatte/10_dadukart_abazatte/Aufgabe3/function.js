var html = document.querySelector('html');

var gesture = document.getElementById('gesture');
var total = document.getElementById('total');
var coordinates = document.getElementById('coordinates');
var currentFingers = document.getElementById('currentFingers');

var totalNumber = 1;

var SwipeStartX;
var SwipeEndX;
var SwipeLengthX;	

var SwipeStartY;
var SwipeEndY;
var SwipeLengthY;

html.ontouchstart = function (eve) {
	SwipeStartX = eve.touches[0].clientX; //Anfangskoordinaten werden erfasst
	SwipeStartY = eve.touches[0].clientY;
	
	total.innerHTML = 'Total number: '+totalNumber;
	totalNumber++;
	coordinates.innerHTML = 'Coordinates: x-Koordinate: '+SwipeStartX+', y-Koordinate: '+SwipeStartY;
	currentFingers.innerHTML = 'Current fingers on Screen: '+eve.touches.length;
	
	SwipeEndX = eve.touches[0].clientX; //Endkoordinaten werden erfasst (beim tippen)
	SwipeEndY = eve.touches[0].clientY;
}

html.ontouchmove = function (eve) {
	SwipeEndX = eve.touches[0].clientX; //Endkoordinaten werden erfasst (beim swipen)
	SwipeEndY = eve.touches[0].clientY;
	
	coordinates.innerHTML = 'Coordinates: x-Koordinate: '+eve.touches[0].clientX+', y-Koordinate: '+eve.touches[0].clientY;
}

html.ontouchend = function (eve) {
	SwipeLengthX = SwipeStartX - SwipeEndX; //swipe laenge wird erfasst
	SwipeLengthY = SwipeStartY - SwipeEndY;
	
	if(SwipeLengthX==0 && SwipeLengthY==0){ 
		gesture.innerHTML = 'Gesture: tap';
	}
	else if(SwipeLengthX<SwipeLengthY && SwipeLengthX<0){
		gesture.innerHTML = 'Gesture: swipe right';
	}
	else if(SwipeLengthX>SwipeLengthY && SwipeLengthX>0){
		gesture.innerHTML = 'Gesture: swipe left';
	}
	else if(SwipeLengthY<0){
		gesture.innerHTML = 'Gesture: swipe down';
	}
	else if(SwipeLengthY>0){
		gesture.innerHTML = 'Gesture: swipe up';
	}
	
	currentFingers.innerHTML = 'Current fingers on Screen: 0';
}