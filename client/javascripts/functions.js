// jshint esversion: 6

//3-A
let reverseWord = (word) => {
  let result = "";

  for (var i = 0; i < word.length; i++) {
    result = word[i] + result;
  }
  return result;
};

let revWords1 = (sent) => {
  let wordsArr = sent.split(" ");
  let result = "";

  for (var i = 0; i < wordsArr.length; i++) {
    result = result + reverseWord(wordsArr[i]) + " ";
  }
  return result;
};
console.log(revWords1("Delta Echo"));

//3-B
let revWords2 = (sent) => {
  let wordsArr = sent.split(" ");
  let result = "";
  wordsArr.forEach(
    (word) => {
      result = result + reverseWord(word) + " ";
    }
  );
  return result;
};

console.log(revWords2("Delta Echo"));

//3-C
let revWords3 = (sent) => {
  let wordsArr = sent.split(" ");
  let result = "";
  for (let word of wordsArr) {
      result = result + reverseWord(word) + " ";
    }
  return result;
};

console.log(revWords3("Delta Echo"));

//Extra Credit
let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
