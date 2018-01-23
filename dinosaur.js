const Dinosaur = function(type, offspringPerYear) {
  this.type = type;
  this.offspringPerYear = offspringPerYear;
}

Dinosaur.prototype.calculateOffspring = function(years) {
  let total = 1;
  for(i = 0; i < years; i++) {
    total += total * this.offspringPerYear;
  }
  return total;
};


module.exports = Dinosaur;