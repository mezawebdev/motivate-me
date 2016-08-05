/*
*	SVG Code
*	@author Alex Meza
*/
console.log("windowHeight: " + windowHeight);
console.log("windowWidth: " + windowWidth);
var s = Snap("100%", "100vh");	// main svg element
s.attr({
	viewBox: "0 0 1 1"
});

// Variables
var windowHeight = $(window).height();	// Get window height
var windowWidth = $(window).width();	// Get window width
var columnHeight = "100%";
var columnWidth = "25%";

// Constructors
var squareOne = s.rect(0, 0, "25%", "100%");
var squareTwo = s.rect("25%", 0, "25%", "100%");
var squareThree = s.rect("50%", 0, "25%", "100%");
var squareFour = s.rect("75%", 0, "25%", "100%");
squareOne.attr({
  fill: getRandomColor(),
});
squareTwo.attr({
  fill: getRandomColor()
});
squareThree.attr({
  fill: getRandomColor()
});
squareFour.attr({
  fill: getRandomColor()
});

// Drivers 
setInterval(function() {	// Set color change animation	
	squareOne.attr({
  		fill: getRandomColor(),
	});
	squareFour.attr({
  		fill: getRandomColor(),
	});
}, 15000);

setInterval(function() {
	squareTwo.attr({
  		fill: getRandomColor(),
	});
}, 5000);

setInterval(function() {
	squareThree.attr({
  		fill: getRandomColor(),
	});
}, 8000);
setInterval(function() {
	squareFour.arrt({

	});
}, 11000);



setInterval(function() {
	squareOne.attr({
  		width: columnWidth,
  		height: columnHeight
	});
	squareTwo.attr({
  		width: columnWidth,
  		height: columnHeight
	});
	squareThree.attr({
  		width: columnWidth,
  		height: columnHeight
	});
	squareFour.attr({
  		width: columnWidth,
  		height: columnHeight
	});
}, 100);

/*
*	Global Functions
*	@author Alex Meza
*/
// Random Color Generator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
