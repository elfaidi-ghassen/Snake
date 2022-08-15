let snake, food;
let scl = 20; // scale

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
  food = new Food();
  frameRate(10);
}

function draw() {
  background(40);
  snake.eat(food.x, food.y);
  food.show();

  snake.lose();
  snake.update();
  snake.show();
}
function mousePressed() {
  snake.total++;
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      snake.dir(0, -1);
      break;
    case DOWN_ARROW:
      snake.dir(0, 1);
      break;
    case RIGHT_ARROW:
      snake.dir(1, 0);
      break;
    case LEFT_ARROW:
      snake.dir(-1, 0);
      break;
  }
}
