function detectWord(str) {
  let lowerCase = str.split('').filter((word) => {
    return word === word.toLowerCase();
  });
  console.log(lowerCase.join(''));
}

detectWord('UcUNFYGaFYFYGtNUH');
