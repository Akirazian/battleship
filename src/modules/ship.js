function shipFactory (length) {
  let hits = 0;
  let sunk = false;
  
  function getLength() {
    return length;
  }

  function hit() {
    if (isSunk()) return;
    hits++;
    return hits;
  }

  function getHits() {
    return hits;
  }

  function isSunk() {
    if (hits === length) {
     sunk = true;
    }
    return sunk;
  }

  return {
    getLength,
    getHits,
    hit,
    isSunk
  }

}

export default shipFactory