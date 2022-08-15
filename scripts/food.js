class Food {
  #rows = Math.floor(height / scl)
  #cols = Math.floor(width / scl)
  constructor() {
    do {
      this.x  = Math.floor(random(this.#cols)) * scl
      this.y  = Math.floor(random(this.#rows)) * scl
    }
    while(snake.tail.includes(createVector(this.x, this.y)))

  }

  show() {
    fill(255, 0, 100)
    rect(this.x, this.y, scl, scl)
  }
}