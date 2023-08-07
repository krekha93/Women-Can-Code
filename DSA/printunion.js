function printunion(arr1, arr2) {
  let i = 0;
  let j = 0;
  let m = arr1.length;
  let n = arr2.length;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      console.log(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      console.log(arr2[j]);
      j++;
    } else {
      console.log(arr2[j]);
      i++;
      j++;
    }
  }

  while (i < m) {
    console.log(arr1[i]);
    i++;
  }
  while (j < n) {
    console.log(arr2[j]);
    j++;
  }
}

let arr1 = [1, 2, 4, 5, 6];
let arr2 = [2, 3, 5, 7];
printunion(arr1, arr2);
