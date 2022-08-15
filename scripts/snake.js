let colorOff1 = 33333;
let colorOff2 = 66666;
let colorOff3 = 99999;
class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
  }
  update() {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.total - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xSpeed * scl;
    this.y += this.ySpeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }
  show() {
    fill(
      noise(colorOff1) * 255,
      noise(colorOff2) * 255,
      noise(colorOff3) * 255
    );
    colorOff1 += 0.1;
    colorOff2 += 0.1;
    colorOff3 += 0.1;
    for (let i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
  dir(x, y) {
    let prevX = this.xSpeed;
    let prevY = this.ySpeed;

    if (this.total > 0) {
      if (x == 1 || x == -1) {
        if (prevX == 0) {
          this.xSpeed = x;
          this.ySpeed = y;
        }
      }
      if (y == 1 || y == -1) {
        if (prevY == 0) {
          this.xSpeed = x;
          this.ySpeed = y;
        }
      }
    } else {
      this.xSpeed = x;
      this.ySpeed = y;
    }
  }
  eat(foodX, foodY) {
    if (this.x === foodX && this.y === foodY) {
      food = new Food();
      this.total++;
    }
  }
  lose() {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        console.log("lose");
        this.total = 0;
        this.tail = [];
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.x = 0;
        this.y = 0;
      }
    }
  }
}
