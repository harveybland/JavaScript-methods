// The splice() method adds and/or removes array elements.

// Array.splice(start, removeCount, newItem, newItem, newItem); // ...

// Example 1
let months1 = ['January', 'February', 'Monday', 'Tuesday'];
let days1 = months1.splice(2);
console.log(days1); // ["Monday", "Tuesday"]

// Example 2
let months2 = ['January', 'February', 'Monday', 'Tuesday'];
months2.splice(2, 0, 'March');
console.log(months2); // ["January", "February", "March", "Monday", "Tuesday"]

// Exmaple 3
let months3 = ['January', 'February', 'Monday', 'Tuesday'];
let days3 = months3.splice(2, 1);

console.log(days3); // ["Monday"]
console.log(months3); // ["January", "February", "Tuesday"]

// Exmaple 4
let months4 = ['January', 'February', 'Monday', 'Tuesday'];
let days4 = months4.splice(2, 2, 'March', 'April');

console.log(days4); // ["Monday", "Tuesday"]
console.log(months4); // ["January", "February", "March", "April"]
