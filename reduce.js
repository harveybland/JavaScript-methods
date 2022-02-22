var times = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const sum = times.reduce((a, b) => a + b, 0);
const avg = sum / times.length || 0;

console.log(`The sum is: ${sum}. The average is: ${avg}.`);

//////

function mapping(letters) {
  console.log(letters.reduce((a, c) => ((a[c] = c.toUpperCase()), a), {}));
}

mapping(['p', 's']);

mapping(['a', 'b', 'c']);

mapping(['a', 'v', 'y', 'z']);
