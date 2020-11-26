//read amplitude of mic input
let x = 0;

let inputLevel;
let thresh;
let bckgrnd;
let opac = 10;

function setup(){
	createCanvas(windowWidth, windowHeight);
	bckgrnd = color(255,opac)
	thresh = mouseY;
	
	mic = new p5.AudioIn();
	mic.start();
	mic.amp(1.0);//set mic input volume to 1.0

	//mic.connect();//audioIn is disconnected by default

}

function draw(){
	background(bckgrnd);

	//mouse the mic trigger level to the mouse Y position
	thresh = map(mouseY,0,height,1.0,0.0);
	//text(thresh,20,20);
	//console.log(thresh);

	x++;
	if(x>width){
		x = 0;
	}
	//the AudioIn class contains its own instance of the amplitude class
	//returns value between 0.0 and 1.0
	inputLevel = mic.getLevel();

	push();
	stroke(0);
	strokeWeight(4);
	line(0,mouseY,20,mouseY);
	pop();


	fill(0,5);
	ellipse(width/3,windowHeight/2,map(inputLevel,0.0,1.0,0,1200));
	stroke(0);
	line(x,map(inputLevel,0.0,1.0,height,0),x,height);

	if(inputLevel > thresh){
		bckgrnd = color(int(random(255)),int(random(255)),int(random(255)),opac);
		//background(bckgrnd);
		console.log(inputLevel);
	}


	push();
	translate(width*.66,height/2);
	rotate((frameCount*.1)%TWO_PI);
	strokeWeight(3);
	line(0,0,0,map(inputLevel,0.0,1.0,0,600));
	pop();
}