// The function should get any string as a parameter. In
// case the string is longer than 30 characters, the string should be cut, and
// “...” should be added to the end of the string. In case the string is shorter
// than 30 characters, the string should be returned as it is. In case the
// parameter is not a string, the empty string should be returned.

let str = '123456789012345678901234567890123'

function makeMeShorter(str) {
   if (typeof str === 'string') {
      if (str.length < 30) {
         return str

         //добавил доп. проверку на пробел и точку 30 символом, в условии задачи не сказано, 
         //поэтому закомментировал

         /*} if (str[29] === ' ' || str[29] === '.') {
            return str.split('').slice(0, 29).join('') + '...';*/

      } else {
         return str.split('').slice(0, 30).join('') + '...';
      }
   } else {
      return '';
   }
}


console.log(makeMeShorter(str));

