
// Запросите 2 числа у пользователя (prompt) и нарисуйте прямоугольник из X-ов в документ
//  где первое число - это ширина, а второе - высота.
// Пример
//  мы принимаем 2 числа: 3 и 4;
// Результат
//  XXX
//  XXX
//  XXX
//  XXX


let intFirst,
   intSecond;

do {
   intFirst = (prompt('Введите первое число от 1 до 10', 1))

} while (isNaN(intFirst) && !(intFirst >= 0 && intFirst < 10));


do {
   intSecond = (prompt('Введите второе числа от 1 до 10', 1))
   for (let i = 0; i < Number(intSecond); i++) {
      for (let j = 0; j < Number(intFirst); j++) {
         document.write(' x ');
      }
      document.write('<br>');
   }
}
while (Number.isNaN(intSecond) && !(intSecond >= 0 && intSecond < 10));
