/* Задача №3 Запросите у пользователя 2 числа и выведите все числа в промежутке между двумя числами 
(пользователь вводит 2 и 6, выводится 3,4,5). Вывести ошибку, если числа одинаковые. 
Учесть, что первое введенное число может быть больше первого. */



let intFirst,
    intSecond;
 

do {
   intFirst = prompt('Введите Первое число: ', 1);
   if (isNaN(intFirst)) {
      alert(intFirst + " - это не число");
      console.log(intFirst);
   }
} while (isNaN(intFirst) || intFirst == '');
 
do {
   intSecond = prompt('Введите Второе число: ', 3);
   if (isNaN(intSecond)) {
      alert(intSecond + " - это не число");
      console.log(intSecond);
   } else if (intSecond === null) {
      break
   } else if (intFirst === intSecond) {
      alert(intSecond + " - равное первому числу");
   }
} while (isNaN(intSecond) || intSecond == '' || intFirst === intSecond);
 

if (intFirst < intSecond) {
 
   for (i = +intFirst + 1; i < +intSecond; i++) {
      document.write(i)
      document.write('<br>');
   }
 } else if (intFirst > intSecond) {
   for (i = +intSecond + 1; i < +intFirst; i++) {
      document.write(i + '<br>');
 
   }
 }
 
