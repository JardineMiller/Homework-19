const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function() {

  let park, dino;

  beforeEach(function() {
    dino = new Dinosaur("Tyrannosaurus", 2);
    dino2 = new Dinosaur("Tyrannosaurus", 2);
    dino3 = new Dinosaur("Triceratops", 3);
    park = new Park();
  })

  it('has an empty enclosure when created', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('can add a dino to enclosure', function() {
    park.addDino(dino);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('can remove all dinosaurs of the same type', function() {
    park.addDino(dino);
    park.addDino(dino2);
    park.addDino(dino3);
    assert.strictEqual(park.enclosure.length, 3);
    park.removeType("Tyrannosaurus");
    assert.strictEqual(park.enclosure.length, 1);
  })

})