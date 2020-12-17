const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,ground;
var ball,box;

function setup() {
createCanvas(400,400);
engine = Engine.create();
world = engine.world;

var ground_options = {
  isStatic : true
}

ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

var ball_options ={
  restitution : 0.8
}

ball = Bodies.circle(200,50,30,ball_options);
World.add(world,ball);

var box_options = {
  isStatic : false
}

box = Bodies.rectangle(100,100,50,50,box_options);
World.add(world,box);


//console.log(ground);
//console.log(ground.type);
//console.log(ground.position.x);
//console.log(ground.position.y);
}

function draw() {
  background(0);
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);

  rect(box.position.x,box.position.y,50,50);
  
}