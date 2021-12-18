function setup() {
  createCanvas(1000, 1000);
  noFill();
  noLoop();
  // frameRate(1);
}

function draw() {
  let canvasH = 1000;
  let canvasW = 1000;
  let bgPurple = 'hsb(255, 50%, 100%)';
  let bgBlack  = 'black';
  background(bgBlack);
  gridSkewA(canvasW, canvasH);
  // save("myImage.png");
}

function posVariance(pos, gridsize) {
  return pos + random((-1 * gridsize) * 0.5, gridsize + (gridsize * 0.5));
}

function opacityVariance() {
  return random(0.2, 1);
}

function gridNormal(width, height) {
  let margin = 20;
  let colNum = 10;
  let rowNum = 10;
  let drawHeight = height - (margin * 2);
  let drawWidth = width - (margin * 2);
  let colWidth = drawWidth / colNum;
  let rowHeight = drawHeight / rowNum;
  let posX = margin;
  let posY = margin;

  console.log('Row Height: ' + colWidth);
  console.log('Column Height: ' + rowHeight);

  // Draw each element from left to right, up to down
  for (let i = 0; i < rowNum; i++) {
    for (let i = 0; i < colNum; i++) {
      // Draw grid
      stroke('rgba(255, 255, 255, 0)');
      rect(posX, posY, colWidth, rowHeight);
      
      // Draw points
      stroke('rgba(255, 255, 255, 1)');
      circle(posX + (colWidth/2), posY + (rowHeight/2), random((colWidth * 0.20), (colWidth * 1)));
      point(posX + (colWidth/2), posY + (rowHeight/2));
      
      posX += colWidth;
    }
    posX = margin;
    posY += rowHeight;
  }
}

function gridSkewA(width, height) {
  let margin = 100;
  let gridSize = random(10, 100);
  let colNum = random(20, 40);
  let rowNum = random(20, 40);
  let drawHeight = height - (margin * 2);
  let drawWidth = width - (margin * 2);
  let colWidth = drawWidth / colNum;
  let rowHeight = drawHeight / rowNum;
  let posX = margin;
  let posY = margin;

  console.log('Row Height: ' + colWidth);
  console.log('Column Height: ' + rowHeight);

  // Draw each element from left to right, up to down
  let hueStart = 0;
  let hueEnd = 360;
  let hueInit = random(hueStart, hueEnd);
  let hue = hueInit;
  let satStart = 50;
  let satEnd = 100;
  let satInit = random(satStart, satEnd);
  let sat = satInit;

  
  for (let i = 0; i < rowNum; i++) {
    for (let i = 0; i < colNum; i++) {
      // Draw grid
      colorMode(RGB, 255, 255, 255, 1)
      fill(random(0, 255), random(0, 255), random(0, 255), random(0,0.02));
      stroke('rgba(255, 255, 255, 0.15)');
      rect(posX, posY, colWidth, rowHeight);

      // Draw circles
      colorMode(HSB, 360, 100, 100);
      strokeWeight(1);
      fill(0, 0, 0, 1);
      stroke(hue, sat, 100, random(0.2, 1));
      circle(posVariance(posX, colWidth), posVariance(posY, rowHeight), random((colWidth * 0.20), (colWidth * 1)));

      // Draw points
      stroke(hueInit, satInit, 100);
      point(posX + (colWidth/2), posY + (rowHeight/2));

      hue += (0.2 * (i/colNum) * (i/rowNum));
      posX += colWidth;
    }
    hue += (0.2 * (i/rowNum));
    posX = margin;
    posY += rowHeight;
  }
}