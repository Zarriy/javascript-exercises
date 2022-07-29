const ftoc = function (fer) {
  const convTOCenti = ((fer - 32) * 5) / 9;
  return Math.round(convTOCenti * 10) / 10;
};

const ctof = function (centi) {
  const convtoFer = (centi * 9) / 5 + 32;
  return Math.round(convtoFer * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
