const removeFromArray = function (myArray, ...toRemove) {
  return myArray.filter((element) => !toRemove.includes(element));
};
removeFromArray([1, 2, 3, 4], 3, 4);

// Do not edit below this line
module.exports = removeFromArray;
