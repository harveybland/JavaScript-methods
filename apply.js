// Apply adds a function to an array
let obj = {
  num: 2,
};

let addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

let arr = [1, 2, 3];
console.log(addToThis.apply(obj, arr));
