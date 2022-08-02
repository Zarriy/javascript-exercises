const fibonacci = function (value) {
  // 1 + 1 + 2 + 3
  if (value < 0) return "OOPS";
  let n1 = 1;
  let n2 = 0;
  let n = 0;
  for (let x = 1; x <= value; x++) {
    n = n1 + n2;
    n1 = n2;
    n2 = n;
  }
  return n;
};

// Do not edit below this line
module.exports = fibonacci;
