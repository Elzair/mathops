var operator = {
    // Base Mathematical Operators
    add: function(x, y) {
      return x + y; 
    }

  , sub: function(x, y) {
      return x - y;
    }

  , mul: function(x, y) {
      return x * y;
    }

  , div: function(x, y) {
      return x / y;
    }

  // Arithmetic Operators
  , mod: function(x, y) {
      return x % y;
    }

  , inc: function(x) {
      return ++x;
    }

  , dec: function(x) {
      return --x;
    }

  , neg: function(x) {
      return -x;
    }

  // Bitwise Operators
  , and: function(x, y) {
      return x & y;
    }

  , or: function(x, y) {
      return x | y;
    }

  , xor: function(x, y) {
      return x ^ y;
    }

  , not: function(x) {
      return ~x;
    }

  , lshift: function(x, y) {
      return x << y;
    }

  , rshift: function(x, y) {
      return x >> y;
    }

  , zrshift: function(x, y) {
      return x >>> y;
    }

  // Logical Operators
  , land: function(x, y) {
      return x && y;
    }

  , lor: function(x, y) {
      return x || y;
    }

  , lnot: function(x) {
      return !x;
    }

  // Comparison Operators
  , eq: function(x, y) {
      return x == y;
    }

  , neq: function(x, y) {
      return x != y;
    }

  , steq: function(x, y) {
      return x === y;
    }

  , stneq: function(x, y) {
      return x !== y;
    }

  , gt: function(x, y) {
      return x > y;
    }

  , ge: function(x, y) {
      return x >= y;
    }

  , lt: function(x, y) {
      return x < y;
    }

  , le: function(x, y) {
      return x <= y;
    }
};

module.exports = operator;
