# mathops

This module contains functions that implement the basic operators of Javascript: the mathematical operators (+, -, ...), the arithmetic operators (++, --, ...), the bitwise operators (^, ~, ...), the logical operators (&&, ||, ...), and the comparison operators (>, <, ...). It is similar to the [operator](https://docs.python.org/2/library/operator.html) library from Python.

## Installation

To install **mathops** into your project, first `cd` to your project directory; then type the following.

    npm install mathops --save-dev

## Use

Simply require **mathops** in your project and call any of its functions.

```javascript
var operator = require('mathops');

console.log(operator.add(5, 3));
```

## API

This is a list of all the functions supported by mathops and their base operator equivalents.

### Base Mathematical Operators

* **add(x, y)**: "x + y"
* **sub(x, y)**: "x - y"
* **mul(x, y)**: "x * y"
* **div(x, y)**: "x / y"
 
### Arithmetic Operators

* **mod(x, y)**: "x % y"
* **inc(x)**: "++x"
* **dec(x)**: "--x"
* **neg(x)**: "-x"

### Bitwise Operators

* **and(x, y)**: "x & y"
* **or(x, y)**: "x | y"
* **xor(x, y)**: "x ^ y"
* **not(x)**: "~x"
* **lshift(x, y)**: "x << y"
* **rshift(x, y)**: "x >> y"
* **zrshift(x, y)**: "x >>> y"

### Logical Operators

* **land(x, y)**: "x && y"
* **lor(x, y)**: "x || y"
* **lnot(x)**: "!x"

### Comparison Operators

* **eq(x, y)**: "x == y"
* **neq(x, y)**: "x != y"
* **steq(x, y)**: "x === y"
* **stneq(x, y)**: "x !== y"
* **gt(x, y)**: "x > y"
* **ge(x, y)**: "x >= y"
* **lt(x, y)**: "x < y"
* **le(x, y)**: "x <= y"
