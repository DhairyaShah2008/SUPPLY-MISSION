var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible=false

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	
edges=createEdgeSprites()


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color("red");

	 boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("red")

	  	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color("red");

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);



 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  

  

  
  helicopterSprite.collide(edges[1])
  helicopterSprite.collide(edges[0])

  
  if (keyIsDown(DOWN_ARROW)) {
	Body.setStatic(packageBody,false)
	packageSprite.visible=true


}
 
if (keyIsDown(LEFT_ARROW)) {
	helicopterSprite.x+=-10
	Matter.Body.translate(packageBody,{x:-10,y:0})
}

if (keyIsDown(RIGHT_ARROW)) {
	Matter.Body.translate(packageBody,{x:10,y:0})
	helicopterSprite.x+=+10
}


}
