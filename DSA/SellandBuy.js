// function maxprofit(arr) {
//   let n = arr.length;
//   let maximum = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] > arr[i]) {
//         let profit = arr[j] - arr[i];
//         maximum = Math.max(profit, maximum);
//       }
//     }
//   }

//   return maximum;
// }

function maxprofit(arr) {
  let min = Infinity;
  let maxsum = 0;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    maxsum = Math.max(arr[i] - min, maxsum);
  }

  return maxsum;
}

let arr = [7, 1, 5, 3, 6, 4];
console.log(maxprofit(arr));
