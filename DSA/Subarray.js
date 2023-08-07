function subarray(arr, sum) {
  let currsum = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    currsum = arr[i];
    if (currsum == sum) {
      console.log("Sum found at indexes " + i);
      return;
    } else {
      for (let j = i + 1; j < n; j++) {
        currsum += arr[j];
        if (currsum == sum) {
          console.log("Sum found between indexes " + i + " and " + j);
          return;
        }
      }
    }
  }

  console.log("No subarray found");
  return;
}

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
sum = 23;
subarray(arr, sum);
