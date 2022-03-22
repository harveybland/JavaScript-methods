const items = [
  {
    name: 'Harvey',
    address: [{ street: '43 alma avenue', postcode: 'bb8 7ns' }],
  },
  {
    name: 'Jack',
    address: [{ street: '123 bond street', postcode: 'bb1 2ns' }],
  },
  {
    name: 'Melissa',
    address: [{ street: '22 zoo lane', postcode: 'bb2 9ns' }],
  },
];

let string = '22';

items.forEach(function (item, index) {
  console.log(index);
  item.address.forEach(function (item, index) {
    let a = item.street.includes(string);
    console.log(a);
  });
});
