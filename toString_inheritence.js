class Rectangle {
  constructor(width, height, unit) {
    this.width = width;
    this.height = height;
    this.unit = unit;
  }

  toString() {
    // toString is activated adding a string to the beginning
    return `Rectangle (${this.width}x${this.height}${this.unit})`;
  }
}

class ColouredRectangle extends Rectangle {
  constructor(width, height, unit, color) {
    super(width, height, unit);
    this.color = color;
  }

  toString() {
    return ` ${super.toString()} [${this.color}]`;
  }
}

const myReact = new Rectangle(5, 8, 'cm');
console.log('here is my rectangle: ' + myReact);

const myColorReact = new ColouredRectangle(15, 8, 'mm', 'blue');
console.log('here is my coloured rectangle: ' + myColorReact);

// Second way of using toString() method
console.log(
  'here is my coloured rectangle: ' +
    ColouredRectangle.prototype.toString.call(myColorReact)
);
