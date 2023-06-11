const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, wall, wall2, ground, invisibleBlock, lixeiraImg, sun;

function preload(){
  lixeiraImg = loadImage("lixeira.png");
}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  //options
  var ball_options = {
	restitution: 0.90
  }

  var wall_options = {
	isStatic: true
  }

  //Create the Bodies Here.
  ground = new Ground(400, 700, 800, 20);

  ball = Bodies.circle(100, 600, 50, ball_options);
  World.add(world, ball);

  sun = Bodies.circle(10, 10, 200, wall_options);

  wall = Bodies.rectangle(530, 590, 20, 180, wall_options);
  World.add(world, wall);

  wall2 = Bodies.rectangle(670, 590, 20, 180, wall_options);
  World.add(world, wall2);

  invisibleBlock = createSprite(600, 590, 200, 20);
  invisibleBlock.addImage(lixeiraImg);
  invisibleBlock.scale = 0.75;

  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  drawSprites();

  //lancar a bola
  if(keyDown("up_arrow")) {
    hForce();
  }

  //por algum motivo esse código não está funcionando
  /*if(ball.x > 530 && ball.x < 670 && ball.y > 570 && ball.y < 700){
    ball.position.x = 100;
  }*/ 

  //exibir os objetos
  fill("white");
  ellipse(ball.position.x, ball.position.y, 50);
  fill("orange");
  ellipse(sun.position.x, sun.position.y, 200);

  //exibir chao
  ground.show();
}

function hForce(){
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: -0.05});
}
