const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[The]/g;
const found = paragraph.match(regex);

console.log(found);
