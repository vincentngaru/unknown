function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	colorMode(HSB, 255,255,255,255);
	easycam = new Dw.EasyCam(this._renderer, {distance : windowWidth});
}

function draw(){
  background(0);
  var w = windowWidth;
  var scl = w/22;

  rotateX(PI/32);
  rotateZ(PI/32);

	for(var x = -w/2; x < w/2; x+= scl){
		for(var y = -w/2; y < w/2; y+= scl){
			var md  = map(min(abs(x), abs(y)), 0, w/2, 0, 1);
      var d = map(abs(x)+abs(y), 0, w, 0, 1);
      var td = .5+.5*sin(radians(10000*md-frameCount));
      var zscl = 158*scl*td*md/d;
      var h = map(md*td/d,0,1,130,220);
			push();
	    translate(x,y);
	    noStroke();
	    fill(h, 331, 255);
	    box(scl, scl, zscl);
			pop();
	  }
	}
}
