const removeFromArray = function (arr, ...num) {
  //let's first use splice method.
  for (let x = 0; x < arr.length; x++) {
    for (let i = 0; i < num.length; i++) {
      if (arr[x] === num[i]) {
        arr.splice(x, 1);
        x--;
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
