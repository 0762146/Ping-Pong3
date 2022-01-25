function preload() {
	
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(pingpong);
	video=createCapture(VIDEO);
	
}

function draw() {
	image(video, 0, 0, 1240, 336);
	game();
	video.hide();
	posenet=ml5.posenet(video,modelLoaded)
}
function modelLoaded(){
	console.log("model is loaded")
}