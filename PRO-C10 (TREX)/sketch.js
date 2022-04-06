var trex, trex_running;
var cacto;
var edges;

function preload(){

//loadAnimation
//loadImage

    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    
}

function setup(){

    createCanvas(600,200);

    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);

    edges = createEdgeSprites();

    trex.scale = 0.5;

}

function draw(){

    background("white");

    if(keyDown("space")){

        trex.velocityY = -10;

    }

    trex.velocityY += 0.5;

    trex.collide(edges[3]);

    drawSprites();

}