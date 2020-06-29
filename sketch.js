

var helicopterIMG, helicopterSprite,packageSprite;
var ground,packageBody,packageIMG;
var zombie1,human1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(10, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2
	packageSprite.velocityX=5;

	
	helicopterSprite=createSprite(10, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.velocityX=5;
	helicopterSprite.scale=0.6

	groundSprite=createSprite(350, 660,900,50);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	
	
	zombie1 = new zombie(200,200,50,50);
	human1 = new human(600,200,50,50);

   
	packageBody = Bodies.circle(10,200, 50 , {restitution:0.8, isStatic:true});
	
World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log (Body);
  
  if (helicopterSprite.x>800){
	  helicopterSprite.x=10;
  }
  zombie1.display();
  human1.display();
  zombie.depth=ground.depth;
  zombie.depth=zombie.depth+1;
 // packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  text("zombie",200,650,);
  text("human",600,650,);
}



function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 
	Matter.Body.setStatic(packageBody,false);
	packageSprite.velocityX=0;

  }
}




