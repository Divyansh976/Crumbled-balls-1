
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,380,1600,20);
	
	wall1 = new Dustbin(1100,320,20,100);

	wall2 = new Dustbin(1185,360,150,20);

	wall3 = new Dustbin(1260,320,20,100);

	crumbledball = new Paper(400,200,50);
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  crumbledball.display();
  drawSprites();
 
}

function keyPressed()  {
	if(keyCode===UP_ARROW)  {
		Matter.Body.applyForce(crumbledball.body,crumbledball.body.position,{x:120, y:-112})


	}

}

