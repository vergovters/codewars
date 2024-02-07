//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

function order(words) {
    let wordsAr = words.split(" ");
    let newAr = [];
    wordsAr.forEach((word) => {
      const match = word.match(/\d+/);
      if (match) {
        const index = parseInt(match[0]) - 1; 
        newAr[index] = word; 
      }
    });
    return newAr.join(" "); 
  }