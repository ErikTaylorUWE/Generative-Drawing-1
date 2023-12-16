let stopDrawing = false;
let frameCounter = 0;
let frameInterval = 15; // this value controls the speed

function setup() {
  createCanvas(800, 800);
}

function draw() {
  // Check if drawing should continue
  if (stopDrawing) {
    noLoop(); // Stop drawing
    return;
  }
// Increment frame counter
  frameCounter++;

  // Draw starry background
  if (frameCounter % frameInterval == 0) {
    background(0); // Black background for space
    drawStars(100);
  }

  // Draw a randomized planet in the center
  if (frameCounter % frameInterval == 0) {
    drawRandomizedPlanet(width / 2, height / 2);
  }
}

function mousePressed() {
  // if mouse button is clicked stop the loop
  stopDrawing = !stopDrawing;

  // if mouse is clicked again, reset the loop
  if (!stopDrawing) {
    loop();
  }
}

// Function to draw stars
function drawStars(numStars) {
  fill(255); // White stars
  noStroke();

  for (let i = 0; i < numStars; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 2, 2); // Small circles as stars
  }
}

// Function to draw a randomized planet with a random moon
function drawRandomizedPlanet(x, y) {
  // Randomize planet properties
  let planetSize = random(50, 200);
  let planetColor = color(random(255), random(255), random(255));
  let craters = floor(random(5, 15));

  // Draw planet
  fill(planetColor);
  ellipse(x, y, planetSize, planetSize);

  // Draw craters on the planet
  fill(0); // Black craters
  for (let i = 0; i < craters; i++) {
    let craterX = x + random(-planetSize / 2, planetSize / 2);
    let craterY = y + random(-planetSize / 2, planetSize / 2);
    let craterSize = random(5, 20);
    ellipse(craterX, craterY, craterSize, craterSize);
  }

  // Randomly decide whether to draw a moon
  if (random() > 0.8) {
    drawMoon(x, y, planetSize);
  }
}

// Function to draw a moon
function drawMoon(planetX, planetY, planetSize) {
  let moonDistance = random(50, 150);
  let moonAngle = random(PI * 2);
  let moonX = planetX + cos(moonAngle) * moonDistance;
  let moonY = planetY + sin(moonAngle) * moonDistance;

  fill(200); // Moon color
  let moonSize = random(10, 30);
  ellipse(moonX, moonY, moonSize, moonSize);
}
