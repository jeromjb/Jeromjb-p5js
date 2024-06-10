//Vanishing Ball Game 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,0,0);
}

let player;
let modules = [];
let score = 0;

function setup() {
  createCanvas(600, 400);
  player = new Player();
  
  
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let type = floor(random(3)); // 0: Oscillator, 1: Filter, 2: Envelope
    modules.push(new SoundModule(x, y, type));
  }
}

function draw() {
  background(220);
  
 
  player.update();
  player.display();
  
  for (let module of modules) {
    module.display();
  }
  
 
  for (let i = modules.length - 1; i >= 0; i--) {
    if (player.collect(modules[i])) {
      modules.splice(i, 1);
      score++;
    }
  }
  
  
  fill(0);
  textSize(20);
  text('Score: ' + score, 20, 30);
}

//Keys Control
class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
    this.speed = 3;
  }
  
  update() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    }
    
    // Constrain player within canvas
    this.x = constrain(this.x, 0, width - this.size);
    this.y = constrain(this.y, 0, height - this.size);
  }
  
  display() {
    fill(0, 0, 255);
    
    ellipse(this.x, this.y, this.size);
  }
  
  collect(module) {
    let d = dist(this.x, this.y, module.x, module.y);
    if (d < this.size / 2 + module.size / 2) {
      return true;
    } else {
      return false;
    }
  }
}

class SoundModule {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.type = type; 
    this.colors = ['#EB8318', '#8FEB03', '#000000'];
  }
  
  display() {
    noStroke();
    fill(this.colors[this.type]);
    ellipse(this.x, this.y, this.size);
  }
}
