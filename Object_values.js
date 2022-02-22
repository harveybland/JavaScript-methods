// Makes it easy to grab values out of a object

// array like object
let obj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj1)); // 0 1 2

let obj2 = { foo: 'bar', baz: 43 };
console.log(Object.values(obj2)); // bar 43

let obj3 = { foo: 'bar', baz: 43 };
console.log(Object.entries(obj3)); // [ [ 'foo', 'bar' ], [ 'baz', 43 ] ]
