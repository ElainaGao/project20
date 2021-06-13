var cat, catImg, mouse, mouseImg, garden,catImg2,mouseImg2,catImg3,mouseImg3,bg;

function preload() {
catImg = loadAnimation("cat2.png","cat3.png");
graden = loadImage("garden.png");
mouseImg = loadAnimation("mouse2.png","mouse3.png");
catImg2 = loadAnimation("cat1.png");
mouseImg2 = loadAnimation("mouse1.png");
catImg3 = loadAnimation("cat4.png");
mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
cat = createSprite(700,400,20,20);
cat.addImage("c",catImg2)
mouse= createSprite(300,400,20,20);
mouse.addImage("m",mouseImg2);
bg.addImage("g",garden)

}

function draw() {

    background();
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2 && mouse.x - cat.x < cat.width/2 + mouse.width/2){
cat.addImage("cat4.png",catImg3);
cat.changeAnimation("cat4.png");
mouse.addImage("mouse".mouseImg3);
mouse.changeAnimation("mouse");
cat.velocityX = 0;
mouse.velocityX = 0;  
    }
    drawSprites();
}


function keyPressed(){

if(keyCode === RIGHT_ARROW){

mouse.addAnimation("T",mouseImg);
mouse.changeAnimation("T");
mouse.frameDelay = 25;


}


}
