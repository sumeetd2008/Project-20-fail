var background1, backgroundImg;
var cat, catSitting, catMoving, catHappy;
var mouse, mouseWithCheese, mouseTeasing, mouseObserving;

function preload() {
    //load the images here
    backgroundImg = loadImage("images/garden.png");
    catSitting = loadAnimation("images/cat1.png");
    catMoving = loadAnimation("images/cat2.png", "images/cat3.png");
    catHappy = loadAnimation("images/cat4.png");
    mouseWithCheese = loadAnimation("images/mouse1.png");
    mouseTeasing = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseObserving = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,650);

    background1 = createSprite(500, 300);
    background1.addImage(backgroundImg);

    cat = createSprite(800, 550);
    cat.addAnimation("catsitting", catSitting);
    cat.addAnimation("catmoving", catMoving);
    cat.addAnimation("cathappy", catHappy); 
    cat.scale = 0.15;

    mouse = createSprite(200, 565);
    mouse.addAnimation("mouseobserving", mouseObserving);
    mouse.addAnimation("mousewithcheese", mouseWithCheese);
    mouse.addAnimation("mouseteasing", mouseTeasing);
    mouse.scale = 0.12;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width/6 + mouse.width/6   )) {
        cat.velocityX = 0;
        cat.changeAnimation("cathappy", catHappy);
        mouse.changeAnimation("mousewithcheese", mouseWithCheese);
    }
    
    keyPressed();

   
    console.log(cat.width/8 + mouse.width/8);
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyDown("LEFT_ARROW")) {
        cat.changeAnimation("catmoving", catMoving);
        mouse.changeAnimation("mouseteasing", mouseTeasing);
        cat.scale = 0.2;
        cat.velocityX = -4;
    }
    
}
