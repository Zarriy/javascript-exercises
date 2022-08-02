const palindromes = function (value) {
    const para = value.toLowerCase().replace(/[^a-z]/g, "");
    const reversepara = para.split("").reverse().join("");
  
    return para === reversepara;
  };

// Do not edit below this line
module.exports = palindromes;
