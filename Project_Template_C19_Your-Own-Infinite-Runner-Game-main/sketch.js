var player
var ground

var obstacles




function preload(){

    

}
//Math.random(0,400)
function setup() {
   player= createSprite(200,290,20,20);
   ground=createSprite(100,300,400,5);
obstacles=createSprite(200,290,5,Math.random(100,300),)
   if(ground>400)
   {ground.x=0}
   ground.velocityX=-5;
player.velocityX=-4;
   console.log(player.x);
}

function draw() {
    drawSprites();
   
}