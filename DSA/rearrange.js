function rearrange(arr) {
  let n = arr.length;
  let temp;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
console.log(rearrange(arr));
