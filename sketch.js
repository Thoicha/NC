
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof,roof1;
var rope1,rope2,rope3,rope4,rope5;

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
	
	rope1 = new Rope(bob1.body,roof.body,-bob1.radius*4,0);
  	rope2 = new Rope(bob2.body,roof.body,-bob2.radius*2,0);
  	rope3 = new Rope(bob3.body,roof.body,0,0);
  	rope4 = new Rope(bob4.body,roof.body,bob4.radius*2,0);
  	rope5 = new Rope(bob5.body,roof.body,bob5.radius*4,0);
	
	Engine.run(engine);
  
}


function draw() {
  
  background("lightGrey");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  roof1.display();
	
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
 
 
}



