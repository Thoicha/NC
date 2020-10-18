
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof,roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(width/2,height/2-250,600,40);

	bob1 = new Bob(350,400,30);
	bob2 = new Bob(240,400,30);
	bob3 = new Bob(260,400,30);
	bob4 = new Bob(280,400,30);
	bob5 = new Bob(300,400,30);

	roof1 = new Roof(width/2,height-20,width,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightGrey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  roof1.display();
  
  drawSprites();
 
}



