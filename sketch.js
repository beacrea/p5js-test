let canvasW = 3000;
let canvasH = canvasW / 3.55;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  fontLight = loadFont('fonts/SourceCodePro-ExtraLight.ttf');
  fontBold = loadFont('fonts/SourceCodePro-Regular.ttf');
}

function setup() {
  createCanvas(canvasW, canvasH);
  noFill();
  noLoop();
  textFont(fontBold);
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

function findCompliment(color) {
  if (color + 180 >= 360) {
    return ((color + 180) - 360);
  }
  else {
    return color + 180;
  }
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
  let colNum = random(50, 100);
  let rowNum = random(colNum, 10);
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
  let satStart = 0;
  let satEnd = 10;
  let satInit = random(satStart, satEnd);
  let sat = satInit;
  let gridTrans = 1;

  
  for (let i = 0; i < colNum; i++) {

    let hueSet = hue;
    let hueCompliment = findCompliment(hue);

    for (let i = 0; i < rowNum; i++) {

      gridTrans = random(0, (i/rowNum));
      strokeWeight(random(1, (rowHeight/10)))

      // Draw grid
      colorMode(HSB, 360, 100, 100, 1)
      stroke(hueInit, 250, 100, gridTrans);
      rect(posX, posY, colWidth, rowHeight);

      // Draw circles
      let circleX = posVariance(posX, colWidth);
      let circleY = posVariance(posY, rowHeight);
      let circleSize = random((rowHeight * 0.0), (rowHeight * 1));
      colorMode(HSB, 360, 100, 100);
      strokeWeight(1);
      fill(0, 0, 0, 1);
      stroke(hueSet, sat, 100, random(0.4, 1));
      circle(circleX, circleY, circleSize);

      // Draw text
      fill(hueCompliment, 50, 100, 1);
      console.log('Hue: ' + hueSet + '\n' + 'Compliment: ' + hueCompliment);
      noStroke();
      textSize(random(circleSize * 0.5));
      // text(':D', circleX, circleY - ((circleSize * 0.5)/6));

      // Draw points
      fill(0, 0, 0, 1);
      stroke(360, 0, 100);
      strokeWeight(random(1, 4));
      point(posX + (colWidth/2), posY + (rowHeight/2));
      posY += rowHeight;
      hue = (hueEnd - hue);
    }
    hue = hueSet;
    gridTrans = random(0, (i/colNum));
    posY = margin;
    posX += colWidth;
  }
}