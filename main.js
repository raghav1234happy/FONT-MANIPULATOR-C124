diffrence=0;
rx=0;
lx=0;

function preload(){
}

function setup() {
    canvas =  createCanvas(400, 300);
    canvas.position(800,210);
 
    video = createCapture(VIDEO);
    video.size(400,300);
    video.position(250,210)
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
	image(video, 0, 0, 300, 300);
  background("lightblue");
  textSize(diffrence);
  fill("white");
  text('Raghav',150,170);
}

function modelLoaded() {
  console.log('Model is loaded');
}

function gotPoses(results)
{
  if(results.length > 0){
    console.log(results);
    lx=results[0].pose.leftWrist.x;
    rx=results[0].pose.rightWrist.x;
    diffrence=floor(lx-rx);
  }
}