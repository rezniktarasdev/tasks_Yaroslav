/*
Задача №2
Запросите у пользователя n-е количество чисел (пользователь сам решает когда закончить ввод чисел), 
найдите и выведите самое большое число, самое маленькое, сумму всех чисел, среднее арифметическое.
*/

let min = Infinity, max = -Infinity, sum = 0, average, counter = 0, result;

function getMinInteger(result) {
   let integer = +result
   if (min > integer) {
      min = integer;
   } else {
      min = min;
   }
   return min;
}

function getMaxInteger(result) {
   let integer = +result;
   if (max < integer) {
      max = integer;
   } else {
      max = max;
   }
   return max;
}

do {
   result = prompt('Введите число: ');

   if (isNaN(result)) {
      alert(result + " - это не число");
     
   } if (!isNaN(result)) {
      getMinInteger(result);
      getMaxInteger(result);
      counter++;
      sum += +result;
      average = sum / +counter;
      console.log(`Самое большое число: ${max}, Самое маленькое число : ${min}, Сумма всех чисел: ${sum}, Среднее арифметическое: ${average}`);
   }

} while (result !== null);

