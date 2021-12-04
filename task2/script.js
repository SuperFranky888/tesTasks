const canvas = document.querySelector("#myCanvas");
const context = canvas.getContext('2d');

function drawTriangle() {
  if (canvas.getContext){

    context.beginPath();
    context.fillStyle = 'black';
    context.moveTo(0, 70); 
    context.lineTo(60, 0);     
    context.lineTo(110, 70); 
    context.moveTo(90, 60); 
    context.lineTo(60, 20); 
    context.lineTo(25, 60); 
    context.fill();
  }
}

let pos = 0;
function drawCircle(){
  context.clearRect(0,499,120,200);
  context.beginPath();
  context.arc(pos, 550, 50, 0, 2 * Math.PI);
  pos++;
  if (pos >= 70){
    pos = 0;
  }
  context.stroke();
}

function drawRect(){
  context.clearRect(599, 00, 400, 200)
  let rect = context.strokeRect(600, pos, 200, 100);
}

setInterval(drawCircle, 5);
setInterval(drawRect, 5);
drawTriangle();
const square = context.strokeRect(700, 500, 100, 100);




