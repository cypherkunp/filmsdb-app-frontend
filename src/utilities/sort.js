function compareNumbers(a, b) {
  let ascending = false;
  if (ascending) {
    return a - b;
  } else {
    return a - b;
  }
}

function compareString(a, b) {}

const num = [1, 2, 3, 4, 5, 5, 32, 1];
num.sort(compareNumbers);
console.log(num);

module.exports = { compareNumbers, compareString };
