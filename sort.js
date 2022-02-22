const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
console.log(fruits);

function tuckIn(arr1, arr2) {
  const arr3 = [...arr1, ...arr2];
  arr3.sort(function (a, b) {
    return a - b;
  });
  console.log(arr3);
}

function tuckIn(arr1, arr2) {
  console.log([arr1[0], ...arr2, arr1[1]]);
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);

////// sort by number

drinks = [
  { name: 'lemonade', price: 50 },
  { name: 'lime', price: 10 },
  { name: 'bull', price: 90 },
];
function sortDrinkByPrice(drinks) {
  console.log(drinks.sort((a, b) => a.price - b.price));
}

//////// sort by length
function sortByLength(arr) {
  console.log(arr.sort((a, b) => a.length - b.length));
}
sortByLength(['a', 'ccc', 'dddd', 'bb']);

sortByLength(['may', 'april', 'september', 'august']);
