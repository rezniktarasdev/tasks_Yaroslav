// fitMyWord.The function should get the first parameter as a main word
// and the second one is an array of words.The function should return an
// array of boolean values, where is “true” in case the main word can be
// completed from the characters of the word from the array, and “false”
// otherwise.
// Example:
// fitMeWord('script', ['mpsocterwi', 'omiwep', 'orfips']) => [true, false, false]


function fitMeWord(word, arr) {

   let result = [];
   let arrWord = word.split('');

   for (let elem of arr) {
      isLetter(arrWord, elem) ? result.push(true) : result.push(false);
   }
   return result;
}



function isLetter(arr, str) {
  
   let flag = true;
  
   for (let i = 0; i < arr.length; i++) { 
      if (str.indexOf(arr[i]) == -1) {
         flag = false;
         break;
      };
   }
    return flag;
}

console.log(isLetter(['s', 'c', 'r', 'i', 'p', 't'], 'mpsocterwi'));
console.log(fitMeWord('script', ['mpsocterwi', 'omiwep', 'orfips']));
