// giveTheMax. 
// The function should get 5 numeric parameters. The function
// should return the maximum value of them. In case one of the parameters
// is not numeric, it should be skipped.


function giveTheMax(...args) {
   if (args.length == 5) {
      let max = -Infinity;
      for (const num of args) {
         if (max < num && typeof num == 'number') {
            max = num;
         } else {
            max = max;
         }
      }
      return max;
   } else {
      console.log('should be 5 numeric parameters');
   }
}


console.log(giveTheMax(1, 20, '100', [22], 8));
