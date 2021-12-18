function setup() {
  createCanvas(400, 400);
  noFill();
  noLoop();
  // frameRate(1);
}

function draw() {
  let canvasH = 400;
  let canvasW = 400;
  let bgPurple = 'hsb(255, 50%, 100%)';
  let bgBlack  = 'black';
  background(bgBlack);
  drawGrid(canvasW, canvasH);
  // save("myImage.png");
}

function drawGrid(width, height) {
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
