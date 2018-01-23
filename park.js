const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDino = function(dino) {
  this.enclosure.push(dino);
};

Park.prototype.removeType = function(type) {
  this.enclosure = this.enclosure.filter(dino => dino.type != type);
};

Park.prototype.fruitfulDinos = function() {
  return this.enclosure.filter(dino => dino.offspringPerYear >= 2);
};

Park.prototype.calculateDinosaurs = function(years) {
  var total = 0;
  for(dinosaur of this.enclosure) {
    total += dinosaur.calculateOffspring(years);
  }
  return total;
};

module.exports = Park;