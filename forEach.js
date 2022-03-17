// forEach is a better way of looping through
const items = ['harvey', 'jack', 'ben'];
let string = 'v';

items.forEach(function (item) {
  console.log(item.includes(string));
});

// Pushed the items array into the copy empty array
