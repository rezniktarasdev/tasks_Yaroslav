/*
Задача №3
Нарисовать шахматную доску при помощи многомерного массива
*/


function createChessBoard(width, height) {
   let str = '';
   for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
         if ((i+j) % 2 != 0) {
            str += '#';
         } else {
            str+= '--';
         }
      }
      str += '</br>';
   }
   return document.write(str);
}

createChessBoard(10,6);
