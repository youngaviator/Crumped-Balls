
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var d1, d2, d3;
var paperObject;
function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,650,1000,20)
    paper = new Paper(200,580,30);
    d1 = new Dustbin(900,590,20,100)
    d2 = new Dustbin(700,590,20,100);
    d3 = new Dustbin(800,630,180,20)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 // ellipseMode(RADIUS)
  background(0);

  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();
  
  

 // drawSprites();
 
}





function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{
			x: 12,
			y: -13
		});
	}
}


