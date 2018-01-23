const assert = require('assert');
const Dinosaur = require('../dinosaur.js');
const Park = require('../park.js');

describe('Park', function() {

  let park, dino;

  beforeEach(function() {
    tyrannosaurus = new Dinosaur("Tyrannosaurus", 3);
    triceratops = new Dinosaur("Triceratops", 1);
    dilophosaurus = new Dinosaur("Dilophosaurus", 4);
    park = new Park();
  })

  it('has an empty enclosure when created', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('can add a dino to enclosure', function() {
    park.addDino(tyrannosaurus);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('can remove all dinosaurs of the same type', function() {
    park.addDino(tyrannosaurus);
    park.addDino(tyrannosaurus);
    park.addDino(triceratops);
    assert.strictEqual(park.enclosure.length, 3);
    park.removeType("Tyrannosaurus");
    assert.strictEqual(park.enclosure.length, 1);
  })

  it('can find all dinos with more than 2 offspring per year', function() {
    park.addDino(tyrannosaurus);
    park.addDino(tyrannosaurus);
    park.addDino(triceratops);
    let fruitfulDinos = [tyrannosaurus, tyrannosaurus];
    assert.deepEqual(park.fruitfulDinos(), fruitfulDinos);
  })

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
    park.addDino(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(1), 4);
  });

  it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
    park.addDino(tyrannosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 16);
  });

  xit('should be able to calculate number of dinosaur after year two starting with 2 dinosaurs', function(){
    park.addDino(tyrannosaurus);
    park.addDino(dilophosaurus);
    assert.strictEqual(park.calculateDinosaurs(2), 25);
  });

})