const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
const min = Math.min(...arr); // Finds the lowest
const max = Math.max(...arr); // Finds the largest
console.log(min);
console.log(max);

//////
function numberSplit(n) {
  console.log([Math.floor(n / 2), Math.ceil(n / 2)]);
}
numberSplit(4);

numberSplit(10);

numberSplit(-9);
