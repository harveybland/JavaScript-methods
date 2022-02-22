function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1);
console.log(dog1.toString());

const myArr = [2, 3, 4, 5];
console.log(myArr.toString());
console.log('here is my array: ' + myArr); // This makes the array a string

const searchParams = new URLSearchParams([
  ['name', 'Harvey'],
  ['age', 24],
]);
console.log('here is my search: ' + searchParams); // toString already works on strings
