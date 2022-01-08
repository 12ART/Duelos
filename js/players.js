class Player {
  constructor(x, y, width, height) {
   

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = 130;
    this.height = 150;
    this.speed = 0.05;
    this.image = loadImage("assets/cowboy.png")



    World.add(world, this.body);
  }
  animate() {
    this.speed += 0.09;
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0, this.width, this.height);
    pop();
  }
}

