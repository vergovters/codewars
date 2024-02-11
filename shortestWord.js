//Simple, given a string of words, return the length of the shortest word(s).


function findShort(s){
    let strAr = s.split(" ");
    let wordsLengths = [];
    strAr.forEach((word) => wordsLengths.push(word.length))
    return Math.min(...wordsLengths)
  }