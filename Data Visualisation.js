let data = [45, 75, 120, 200, 100];
let labels = ['A', 'B', 'C', 'D', 'E'];
let colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

function setup() {
  createCanvas(400, 400);
  drawBarChart();
}

function drawBarChart() {
  let maxData = max(data);
  let barWidth = width / data.length;
  let barHeightRatio = height / maxData;
  
  for (let i = 0; i < data.length; i++) {
    let x = i * barWidth;
    let barHeight = data[i] * barHeightRatio;
    let y = height - barHeight;
    
    fill(colors[i]);
    rect(x, y, barWidth, barHeight);
    
    fill(0);
    textAlign(CENTER, BOTTOM);
    text(labels[i], x + barWidth / 2, height - 5);
  }
}
