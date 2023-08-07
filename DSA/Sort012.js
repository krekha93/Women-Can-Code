function sort012(a) {
  let n = a.length;
  let low = 0;
  let mid = 0;
  let high = n - 1;
  let temp;
  while (mid <= high) {
    if (a[mid] == 0) {
      temp = a[low];
      a[low] = a[mid];
      a[mid] = temp;
      low++;
      mid++;
    } else if (a[mid] == 1) {
      mid++;
    } else {
      temp = a[mid];
      a[mid] = a[high];
      a[high] = temp;
      high--;
    }
  }

  return a;
}

let a = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log(sort012(a));
