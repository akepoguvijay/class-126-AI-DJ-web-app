song = "";

function preload()
{
    song = loadSound("music.mp3");
}

scorerightWrist = 0;
scoreleftWrist = 0;

rightWristX = "";
leftWristX = "";

rightWristX = "";
leftWristX = "";

function setup()
{
    canvas = createCanvas(600,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet( video , modelLoaded);
    posenet.on('pose' , gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initilized");
}

function gotPoses()
{

}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}