const assert = require('assert');
const Dinosaur = require('../dinosaur.js');

describe('Dinosaur Tests', function() {

  let dino;

  beforeEach(function() {
    dino = new Dinosaur("Tyrannosaurus", 2);
  })

  it('has a type', function() {
    assert.strictEqual(dino.type, "Tyrannosaurus");
  })

  it('has number of offspring per year', function() {
    assert.strictEqual(dino.offspringPerYear, 2);
  })

  

})