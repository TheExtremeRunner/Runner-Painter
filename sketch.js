let canvas;
let colors;
let red,
  green,
  blue,
  yellow,
  black,
  tan,
  eraser,
  gray,
  pink,
  brown,
  orange,
  purple,
  cyan;
let can;
let sound;

function clearCanvas() {
  sound.play();
  background("white");
}
function setup() {
  sound = loadSound("sound.wav");
  can = createCanvas(550, 500);
  can.center();
  canvas = createButton("Clear Canvas");
  canvas.mousePressed(clearCanvas);
  canvas.size(70, 40);
  canvas.class("myButton");
  canvas.style("border-radius", "30px");
  background("white");

  red = createButton("RED");
  red.style("background-color", "red");
  red.mousePressed(redLine);
  red.size(70, 40);
  red.class("myButton");
  red.style("border-radius", "30px");

  green = createButton("GREEN");
  green.style("background-color", "green");
  green.mousePressed(greenLine);
  green.size(70, 40);
  green.class("myButton");
  green.style("border-radius", "30px");

  blue = createButton("BLUE");
  blue.style("background-color", "blue");
  blue.mousePressed(blueLine);
  blue.size(70, 40);
  blue.class("myButton");
  blue.style("border-radius", "30px");

  yellow = createButton("YELLOW");
  yellow.style("background-color", "yellow");
  yellow.mousePressed(yellowLine);
  yellow.size(70, 40);
  yellow.class("myButton");
  yellow.style("border-radius", "30px");

  black = createButton("BLACK");
  black.style("background-color", "black");
  black.style("color", "white");
  black.mousePressed(blackLine);
  black.size(70, 40);
  black.class("myButton");
  black.style("border-radius", "30px");

  tan = createButton("TAN");
  tan.style("background-color", "tan");
  tan.mousePressed(tanLine);
  tan.size(70, 40);
  tan.class("myButton");
  tan.style("border-radius", "30px");

  orange = createButton("ORANGE");
  orange.style("background-color", "orange");
  orange.mousePressed(orangeLine);
  orange.size(70, 40);
  orange.class("myButton");
  orange.style("border-radius", "30px");

  gray = createButton("GRAY");
  gray.style("background-color", "gray");
  gray.mousePressed(grayLine);
  gray.size(70, 40);
  gray.class("myButton");
  gray.style("border-radius", "30px");

  brown = createButton("BROWN");
  brown.style("background-color", "brown");
  brown.mousePressed(brownLine);
  brown.size(70, 40);
  brown.class("myButton");
  brown.style("border-radius", "30px");

  purple = createButton("PURPLE");
  purple.style("background-color", "purple");
  purple.mousePressed(purpleLine);
  purple.size(70, 40);
  purple.class("myButton");
  purple.style("border-radius", "30px");

  pink = createButton("PINK");
  pink.style("background-color", "magenta");
  pink.mousePressed(pinkLine);
  pink.size(70, 40);
  pink.class("myButton");
  pink.style("border-radius", "30px");

  cyan = createButton("CYAN");
  cyan.style("background-color", "cyan");
  cyan.mousePressed(cyanLine);
  cyan.size(70, 40);
  cyan.class("myButton");
  cyan.style("border-radius", "30px");

  eraser = createButton("ERASER");
  eraser.style("background-color", "white");
  eraser.mousePressed(eraseLine);
  eraser.size(70, 40);
  eraser.class("myButton");
  eraser.style("border-radius", "30px");
}
function cyanLine() {
  sound.play();
  stroke("cyan");
}
function pinkLine() {
  sound.play();
  stroke("magenta");
}
function purpleLine() {
  sound.play();
  stroke("purple");
}
function brownLine() {
  sound.play();
  stroke("brown");
}
function grayLine() {
  sound.play();
  stroke("gray");
}
function orangeLine() {
  sound.play();
  stroke("orange");
}
function eraseLine() {
  sound.play();
  stroke("white");
}
function tanLine() {
  sound.play();
  stroke(210, 180, 140);
}
function blackLine() {
  sound.play();
  stroke("black");
}

function yellowLine() {
  sound.play();
  stroke("yellow");
}
function blueLine() {
  sound.play();
  stroke("blue");
}
function greenLine() {
  sound.play();
  stroke("green");
}
function redLine() {
  sound.play();
  stroke("red");
}
function draw() {
  strokeWeight(15);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
