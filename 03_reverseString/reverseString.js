const reverseString = function (word) {
  //  [x] TODO: INITIALISER ma variable de mon mot inversé
  let reversedWord = "";

  // [x] TODO: INITIALISER un nouveau tableau qui stockera mon mot inversé
  let letterWord = [];

  // POUR CHAQUE lettres de mon mot
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    letterWord.push(letter);
  }

  // [x] TODO: AJOUTER le dernier élément dans mon nouveau tableau
  while (letterWord.length > 0) {
    let lastLetter = letterWord.slice(-1);
    reversedWord += lastLetter;
    letterWord.pop();
  }

  // [x] TODO: RETOURNER mon résultat.
  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
