let canvasW = 2200;
let canvasH = canvasW / 3;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('fonts/SourceCodePro-ExtraLight.ttf');
}

function setup() {
  createCanvas(canvasW, canvasH);
  noFill();
  noLoop();
  textFont(font);
  textAlign(CENTER, CENTER);
  // frameRate(1);
}

function draw() {
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
  let colNum = random(40, 80);
  let rowNum = colNum / 5;
  let drawHeight = height - (margin * 2);
  let drawWidth = width - (margin * 2);
  let colWidth = drawWidth / colNum;
  let rowHeight = drawHeight / rowNum;
  let posX = margin;
  let posY = margin;

  console.log('Row Height: ' + colWidth);
  console.log('Column Height: ' + rowHeight);

  // Draw each element from left to right, up to down
  let hueStart = 200;
  let hueEnd = 240;
  let hueInit = random(hueStart, hueEnd);
  let hue = hueInit;
  let satStart = 50;
  let satEnd = 100;
  let satInit = random(satStart, satEnd);
  let sat = satInit;
  let gridTrans = 1;

  
  for (let i = 0; i < colNum; i++) {
    for (let i = 0; i < rowNum; i++) {

      gridTrans = random(0, (i/rowNum));

      // Draw grid
      colorMode(HSB, 360, 100, 100, 1)
      stroke(hueInit, satInit, 50, gridTrans);
      rect(posX, posY, colWidth, rowHeight);

      // Draw circles
      let circleX = posVariance(posX, colWidth);
      let circleY = posVariance(posY, rowHeight);
      colorMode(HSB, 360, 100, 100);
      strokeWeight(1);
      fill(0, 0, 0, 1);
      stroke(hue, sat, 100, random(0.4, 1));
      circle(circleX, circleY, random((rowHeight * 0.20), (rowHeight * 1)));
      fill(hue, sat, 100, 1);
      textSize(random(10, 56));
      text('+', circleX, circleY);

      // Draw points
      fill(0, 0, 0, 1);
      stroke(360, 0, 100);
      point(posX + (colWidth/2), posY + (rowHeight/2));

      hue += (hueEnd-hue) * (i/rowNum);
      posY += rowHeight;
    }
    gridTrans = random(0, (i/colNum));
    hue += (hueEnd-hue) * (i/colNum);
    posY = margin;
    posX += colWidth;
  }
}