const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDino = function(dino) {
  this.enclosure.push(dino);
};

Park.prototype.removeType = function(type) {
  this.enclosure = this.enclosure.filter(dino => dino.type != type);
};

module.exports = Park;