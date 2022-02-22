// forEach is a better way of looping through
const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(function (item) {
  copy.push(item);
});

console.log(copy);

// Pushed the items array into the copy empty array
