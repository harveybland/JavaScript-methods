const sevenBoom = function (arr) {
  console.log(
    arr.join().includes('7') ? 'Boom!' : 'there is no 7 in the array'
  );
};

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
