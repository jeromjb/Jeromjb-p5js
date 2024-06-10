function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
  
  // Car body
  fill(255, 0, 0); // Red color for the car body
  rect(100, 100, 200, 50); // Rectangle representing the car body
  
  // Windows
  fill(0); // Black color for the windows
  rect(120, 110, 50, 30); // Rectangle representing the front window
  rect(230, 110, 50, 30); // Rectangle representing the back window
  
  // Wheels
  fill(0); // Black color for the wheels
  ellipse(130, 150, 40, 40); // Front wheel
  ellipse(270, 150, 40, 40); // Back wheel
}
