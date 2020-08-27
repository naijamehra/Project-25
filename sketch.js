
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1, box2, box3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(40,40);
  box1 = new Dustbin(630,500,280,30);
  box1.image = loadImage("sprites/dustbin.png"); 
  box2 = new Dustbin(510,320,30,228 );
  box3 = new Dustbin(755,320,30,228);
  
  ground = new Ground(400,height,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  //text(mouseX+","+mouseY,600,200);
  
  ground.display(); 
  box2.display();
  box3.display();
  box1.display();
  imageMode(CENTER);
  image(box1.image, 632,550,250,233);
  paper.display();

  drawSprites();

}

function keyPressed() {
   if (keyCode === UP_ARROW) {
     Matter.Body.applyForce(paper.body, paper.body.position, {x:842,y:-923});

   }
}



