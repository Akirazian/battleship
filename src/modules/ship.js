class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  getLength() {
    return this.length;
  }

  hit() {
    if (this.isSunk()) return;
    this.hits++;
    return this.hits;
  }

  isSunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }

}

export default Ship