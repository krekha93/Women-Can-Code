function longestCommonPrefix(arr) {
  let n = arr.length;
  let temp;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  let first = arr[0];
  let last = arr[n - 1];
  let prefix = "";
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }

  return prefix;
}

let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(arr));
longestCommonPrefix