const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas;
var player1, player2;


function preload() {
  backgroundImg = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(1350,600);
  engine = Engine.create();
  world = engine.world;
  player1 = new Player(1200,500,0,0);
  player2 = new Player(100,500,0,0);



 
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  if (keyCode === LEFT_ARROW) {
 
    player1.animate();
  }

  player1.display();
  player2.display();



}


