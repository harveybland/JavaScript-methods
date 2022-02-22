// Bind first pass the obj and it returns a bound function
// and then pass the arguments into the bound function
let obj = {
  num: 2,
};

let addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

let arr = [1, 2, 3];
let bound = addToThis.bind(obj);

console.log(bound(1, 2, 3));
