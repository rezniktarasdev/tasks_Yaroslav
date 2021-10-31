// Задача #2
// Написать функцию копирования массива. Принимает массив, вернёт массив.

let arr = ['🐑', '🐑', '🐑']

function getCloneArr(arr) {
  let cloneArr = [];
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      cloneArr[i] = arr[i];
    }
    return cloneArr;
  }
  return cloneArr;
}

console.log(getCloneArr(arr));
console.log(arr === getCloneArr);
