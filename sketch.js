var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    block1 = createSprite(100,590,180,20);
    block1.shapeColor = "blue";

    block2 = createSprite(300,590,180,20);
    block2.shapeColor = "orange";

    //create two more blocks i.e. block3 and block4 here

    block3=createSprite(500,590,180,20);
    block3.shapeColor="yellow";

    block4=createSprite(700,590,180,20);
    block4.shapeColor="green";

    ball = createSprite(random(10,750),300, 20,20);
    ball.shapeColor = "white";
    //write code to add velocityX and velocityY
    ball.velocityX=3;
    ball.velocityY=3;

}

function draw() {
    background("black");
    


     

    
    //write code to bounce off ball from the block1 
    if(isTouching(ball,block1)) {
        ball.shapeColor = "blue";
        music.play()
        bounceOff(ball,block1);
    }
if(ball.x<0){
    ball.velocityX=3;
    music.stop()
}
if(ball.x<800){
    ball.velocityX=-3;
    music.stop()
}


    if(isTouching(ball,block2)){
        ball.shapeColor = "orange";
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop()
        bounceOff(ball,block2);
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3

    if(isTouching(ball,block3)){
        ball.shapeColor = "yellow";
        bounceOff(ball,block3);
        
        
        music.play();
    }


    //write code to bounce off ball from the block4

    if(isTouching(ball,block4)){
        ball.shapeColor = "green";
        music.play();
        bounceOff(ball,block4);
    }
    drawSprites();
}
