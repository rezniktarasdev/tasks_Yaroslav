// The function should get any string as a parameter. In
// case the string is longer than 30 characters, the string should be cut, and
// “...” should be added to the end of the string. In case the string is shorter
// than 30 characters, the string should be returned as it is. In case the
// parameter is not a string, the empty string should be returned.

let str = 'sldkfjsdjsdfhkjsdbnksdjfgsdjfbsdkjfgsdkvbskjfgsdiufg'

function makeMeShorter(str) {
   if (typeof str === 'string') {
      if (str.length < 30) {
         return str
      } else {
         return str.split('').slice(0, 30).join('') + '...';
      }
   } else {
      return '';
   }
}


console.log(makeMeShorter(str));
