class Snake {
  #offset = {
    red: 0,
    green: 10e2,
    blue: 10e4,
  };
  constructor() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
  }
  update() {
    if (this.total == this.tail.length) {
      for (let i = 0; i < this.total - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x += this.xSpeed * ratio;
    this.y += this.ySpeed * ratio;

    this.x = constrain(this.x, 0, width - ratio);
    this.y = constrain(this.y, 0, height - ratio);
  }
  show() {
    let [r, g, b] = [
      noise(this.#offset.red) * 255,
      noise(this.#offset.green) * 255,
      noise(this.#offset.blue) * 255,
    ];
    fill(r, g, b);

    this.#offset.red += 0.05;
    this.#offset.green += 0.05;
    this.#offset.blue += 0.05;

    for (let i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, ratio, ratio);
    }
    rect(this.x, this.y, ratio, ratio);
  }
  dir(x, y) {
    let previousX = this.xSpeed;
    let previousY = this.ySpeed;

    if (this.total > 0) {
      if (x == 1 || x == -1) {
        if (previousX == 0) {
          this.xSpeed = x;
          this.ySpeed = y;
        }
      }
      if (y == 1 || y == -1) {
        if (previousY == 0) {
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
