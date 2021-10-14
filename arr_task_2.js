/*
Задача №2
Создать массив размерностью N элементов, заполнить его произвольными целыми значениями. 
Вывести наибольшее значение массива, наименьшее значение массива, общую сумму элементов, 
среднее арифметическое всех элементов, вывести все нечетные значения.
*/

let arr = [55, 19, -12, 4, 35];

function getArrayMax(arr) {
   let len = arr.length, max = -Infinity;
   while (len--) {
      if (arr[len] > max) {
         max = arr[len];
      }
   }
   return max;
};

function getArrayMin(arr) {
   let len = arr.length, min = Infinity;
   while (len--) {
      if (arr[len] < min) {
         min = arr[len];
      }
   }
   return min;
}


function getArraySumm(arr) {
   let len = arr.length, sum = 0;
   while (len--) {
      sum += arr[len];
   }
   return sum;
};

function getArrayAverage(arr) {
   let len = arr.length, sum = 0, counter = 0, average;
   while (len--) {
      sum += arr[len];
      counter++;
   }
   average = sum / counter;
   return average;
};

function getArrayOddValues(arr) {
   let len = arr.length, oddArr = [];
   while (len--) {
      if (arr[len] % 2 != 0) {
         oddArr.push(arr[len]);
      }
   }
   return oddArr;
};



console.log(getArrayMin(arr));
console.log(getArrayMax(arr));
console.log(getArraySumm(arr));
console.log(getArrayAverage(arr));
console.log(getArrayOddValues(arr));
