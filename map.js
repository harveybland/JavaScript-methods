// Map goes through an array and changes the value

function maps(x) {
  console.log(x.map((n) => n * 2));
}

maps([1, 2, 3]);

// Map each item in an array to something else

const numbers = [1, 2, 3];

const items = numbers.map((n) => {
  console.log({ value: n });
});

// Doubles the values in the array and returns a new array

function points(games) {
  let total = 0;
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  console.log(total);
}

points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']);
