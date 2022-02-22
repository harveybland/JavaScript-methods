// Filter looks for a true or false value

// Checks if the word is greater than 6

const words = ['spray', 'present', 'happy', 'elite', 'limit'];

let longWords = words.filter((word) => word.length > 6);

console.log(longWords);

const countTrue = (r) => r.filter(Boolean).length;
