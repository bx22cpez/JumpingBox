var canvas;
var music;

var box, musicbox1, musicbox2, musicbox3,musicbox4;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    musicbox1 = createSprite(150,550,150,20);
    musicbox1.shapeColor = "blue";

    musicbox2 = createSprite(300,550,150,20);
    musicbox2.shapeColor = "orange"

    musicbox3 = createSprite(450,550,150,20);
    musicbox3.shapeColor = "purple";

    musicbox4 = createSprite(600,550,150,20);
    musicbox4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random(20, 750),50,50);
    box.shapeColor = "white";
    box.velocityY = 5;


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    
    
    
    if (musicbox1.isTouching(box)&& box.bounceOff(musicbox1)){
        box.shapeColor = "blue";
        box.velocityY = 0;
        music.play();

    }
    
    
    if (musicbox2.isTouching(box)&& box.bounceOff(musicbox2)){
        box.shapeColor = "orange";
        box.velocityY = 0;
        music.play();

    }
    
    
    if (musicbox3.isTouching(box)&& box.bounceOff(musicbox3)){
        box.shapeColor = "purple";
        box.velocityY = 0;
        music.play();
        
    }
    
    
    if (musicbox4.isTouching(box) && box.bounceOff(musicbox4)){
        box.shapeColor = "green";
        box.velocityY = 0;
        music.play();
    }
    
    
    box.bounceOff(musicbox1);
    box.bounceOff(musicbox2);
    box.bounceOff(musicbox3);
    box.bounceOff(musicbox4);

    

    drawSprites();
    //add condition to check if box touching surface and make it box
}
