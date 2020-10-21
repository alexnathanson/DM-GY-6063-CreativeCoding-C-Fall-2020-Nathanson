/*
createVideo creates an HTML 5 video object which is display
in the DOM (document object model) by default
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
*/
let vid;
let playing;
let vidVol;

function setup() {
  

	playing = true;
  	vidVol = .2;

  /*if the first argument is an array of version,
  it will automatically choose which version is playable.
  the 2nd element is a callback that handles the media*/
  vid = createVideo(
    '07-media/media/Telephone_ChristianMarclay_1995.mp4',
    vidLoad
  );

  console.log(vid);
  //noCanvas
  createCanvas(2*vid.width,2*vid.height);
  vid.size(2*vid.width,2*vid.height);

  //.hide() removes the video from the DOM
  //vid.hide();
  //vid.showControls();
  
}

function draw(){
	background(200,220,183);

	//console.log(map(sSlider.value(),0,100,-3.0,3.0));
	vid.speed(map(constrain(mouseX,0,width),0,width,0.0,10.0));
	vid.volume(map(constrain(mouseY,0,height),0,height,0.0,1.0));

	image(vid,0,0,vid.width,vid.height);

	text("Volume: " + vid.elt.volume,vid.width+20,20);
	text("Speed: " + vid.elt.playbackRate,vid.width+20,60);

}

// This function is called when the video loads
function vidLoad() {

	if(playing){
		vid.play();
  		vid.volume(vidVol);
	}


	//do something when you click on the DOM video
	//only works when the controls aren't on
	/*vid.elt.onclick = (event)=>{
  			console.log('clicked!');
  		};

  	vid.elt.onmouseenter = (event)=>{
  		console.log("mouse entered! " + millis());
  	}

  	//do something when the video stops playing (different from pause)
	vid.elt.onended = (event) => {
	  console.log('Video stopped either because 1) it was over, ' +
	      'or 2) no further data is available.');
	};
*/
	//enable video controls
	//vid.elt.controls = true;
}

function keyPressed(){
	//pause and start
	if(key=='p'){
		playing = !playing;

		if (playing){
			vid.loop();
  			vid.volume(vidVol);
		} else {
			vid.pause();
		}
	} else if (key == 'i'){
		//get video info
		console.log(vid.elt.duration);
		console.log(vid.elt.currentTime);

	}else if (key == 'r'){
		//jump to a random frame
		//vid.elt.duration);
		vid.elt.currentTime = random(vid.elt.duration);

	}
}