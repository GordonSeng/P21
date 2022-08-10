
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var ballOptions={
		isStatic: false ,
		restitution:0.3 ,
		friction: 0 ,
		density: 1.2
	}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(100,500,20,ballOptions)
	World.add(world,ball)

	console.log(ball)

	groundObj = new GroundObj(width/2,670,width,20)
	leftSide = new GroundObj(500,600,20,120)
	rightSide = new GroundObj(750,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine)

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)

 groundObj.display()
 leftSide.display()
 rightSide.display()
  
  drawSprites();
 
}

  function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-50})
	}
  }



