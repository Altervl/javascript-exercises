const palindromes = function (word) {
  const filtered = word.toLowerCase().split("").filter(char => char.toUpperCase() != char.toLowerCase());
  const reversed = filtered.toReversed();
  return filtered.join() === reversed.join() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
