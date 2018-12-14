

  var centerX;
var centerY;
var radius;
var totalDegrees = 359;
var r;
var g;
var b;

function setup() {
  createCanvas(
  	window.innerWidth,
  	window.innerHeight
  	);
  background(50);
  centerX = width / 2;
  centerY = height / 2;
  radius = height / 2;
  angleMode(DEGREES);
  r = 240;
  g = 220;
  b = 93;
}


function draw() {
  noFill();

  stroke(r, g, b, 55);
  beginShape();
    for (var i = 0; i <= totalDegrees; i++) {
      var noiseFactor = noise(i / 25, frameCount / 250);
      var x = centerX + radius * cos(i) * noiseFactor;
      var y = centerY + radius * sin(i) * noiseFactor;
      curveVertex(x, y);
    }
  endShape(CLOSE);
  radius -= .85;
  r += 1;
  g += 1;
  b += 1;

  if (radius <= 0) {
  	centerX = mouseX;
  	centerY = mouseY;
  }

  if (radius <= 20) {
  	noLoop();
  }
}
