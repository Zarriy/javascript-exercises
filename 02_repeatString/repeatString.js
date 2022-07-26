const repeatString = function (str, n) {
  let fin;
  if (n < 0) return "ERROR";
  for (let x = 0; x <= n; x++) {
    fin = str.repeat(x);
  }
  return fin;
};

// Do not edit below this line
module.exports = repeatString;
