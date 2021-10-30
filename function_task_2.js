// Задача #2
// Написать функцию копирования массива. Принимает массив, вернёт массив.

let arr = ['🐑', '🐑', '🐑']

function getCloneArr(arr) {
   let cloneArr = [];
   if (arr.length > 0) {
      for (let elem of arr) {
         cloneArr.push(elem)
      }
      return cloneArr;
   }
   return cloneArr;
}

console.log(getCloneArr(arr));
console.log(arr === getCloneArr);
