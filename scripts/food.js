class Food {
  #rows = Math.floor(height / ratio);
  #cols = Math.floor(width / ratio);
  constructor() {
    this.x = Math.floor(random(this.#cols)) * ratio;
    this.y = Math.floor(random(this.#rows)) * ratio;
  }
  show() {
    fill(255, 0, 100);
    rect(this.x, this.y, ratio, ratio);
  }
}
