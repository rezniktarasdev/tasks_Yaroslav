// Задача #2
// Написать функцию копирования массива. Принимает массив, вернёт массив.

let arr = ['🐑', '🐑', '🐑']

function getCloneArr(arr) {
   let cloneArr = arr.slice()
   return cloneArr;
}

console.log(getCloneArr(arr));
console.log(arr === getCloneArr);
