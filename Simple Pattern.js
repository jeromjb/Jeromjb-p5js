function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Body
  fill(102, 204, 255); // Blue color for the body
  ellipse(200, 200, 120, 150); // Body shape
  
  // Head
  fill(102, 255, 102); // Green color for the head
  ellipse(200, 120, 80, 100); // Head shape
  
  // Eyes
  fill(255); // White color for the eyes
  ellipse(180, 100, 20, 20); // Left eye
  ellipse(220, 100, 20, 20); // Right eye
  
  // Pupils
  fill(0); // Black color for the pupils
  ellipse(180, 100, 10, 10); // Left pupil
  ellipse(220, 100, 10, 10); // Right pupil
  
  // Mouth
  noFill();
  strokeWeight(3);
  arc(200, 140, 40, 30, 0, PI); // Mouth arc
}
