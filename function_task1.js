//Задача #1
//Написать функцию сортировки массива. Сортировать массив от меньшего к большему. Функция должна принимать массив и вернуть новый


let arr = [2, 3, 8, 1, 4, 5, 9, 7, 6];
let sortArr = [];
let flag;


function sortArrCicle(arr) {
   for (let i = 0; i < arr.length; i++) {
      flag = false;
      for (let j = 0; j < sortArr.length; j++) {
         if (arr[i] < sortArr[j]) {
            flag = true;
            sortArr.splice(j, 0, arr[i]);
            break;
         }
      }

      if (!flag) {
         sortArr.push(arr[i]);
      }
   }
   return sortArr
}

console.log(sortArrCicle(arr));
