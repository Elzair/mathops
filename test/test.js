var assert = require('assert')
  , op     = require(__dirname + '/../')
  ;

describe('Base Mathematical Operators', function() {
  it('should add', function() {
    assert.equal(op.add(6,3), 9);
  });

  it('should subtract', function() {
    assert.equal(op.sub(6,3), 3);
  });

  it('should multiply', function() {
    assert.equal(op.mul(6,3), 18);
  });

  it('should divide', function() {
    assert.equal(op.div(6,3), 2);
  });
});

describe('Arithmetic Operators', function() {
  it('should do modulo', function() {
    assert.equal(op.mod(6,3), 0);
  });

  it('should increment', function() {
    assert.equal(op.inc(6), 7);
  });

  it('should decrement', function() {
    assert.equal(op.dec(6), 5);
  });

  it('should negate', function() {
    assert.equal(op.neg(6), -6);
  });
});

describe('Bitwise Operators', function() {
  it('should and the two values', function() {
    assert.equal(op.and(5, 3), 1);
  });

  it('should or the two values', function() {
    assert.equal(op.or(5,3), 7);
  });

  it('should xor the two values', function() {
    assert.equal(op.xor(5,3), 6);
  });

  it('should not the given value', function() {
    assert.equal(op.not(5), -6);
  });

  it('should shift x y bits to the left', function() {
    assert.equal(op.lshift(5,3), 40);
  });

  it('should do a sign-preserving right shift', function() {
    assert.equal(op.rshift(-100,6), -2);
  });

  it('should do a zero-fill right shift', function() {
    assert.equal(op.zrshift(-100,6), 67108862);
  });
});

describe('Logical Operators', function() {
  it('should do a logical and', function() {
    assert.equal(op.land(true,false), false);
  });

  it('should do a logical or', function() {
    assert.equal(op.lor(true,false), true);
  });

  it('should do a logical not', function() {
    assert.equal(op.lnot(true), false);
  });
});

describe('Comparison Operators', function() {
  it('should do an equals', function() {
    assert.equal(op.eq(1,"1"), true);
  });

  it('should do a not equals', function() {
    assert.equal(op.neq(1, "1"), false);
  });

  it('should do a strict equals', function() {
    assert.equal(op.steq(1,"1"), false);
  });

  it('should do a strict not equals', function() {
    assert.equal(op.stneq(1,"1"), true);
  });

  it('should do a greater than', function() {
    assert.equal(op.gt(5,4), true);
  });

  it('should do a greater than or equal to', function() {
    assert.equal(op.ge(5,5), true);
  });

  it('should do a less than', function() {
    assert.equal(op.lt(4,5), true);
  });

  it('should do a less than or equal to', function() {
    assert.equal(op.le(5,5), true);
  });
});
