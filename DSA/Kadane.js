function maxsum(arr) {
  let sum = 0;
  let maxsum = 0;
  for (let i = 0; i < arr.length; i++) {
    let current_num = arr[i];
    sum = sum + current_num;
    if (sum < 0) {
      sum = 0;
    }
    if (sum > maxsum) {
      maxsum = sum;
    }
  }

  return maxsum;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxsum(arr));
