function next_permutation(arr) {
  let n = arr.length;
  let index = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i + 1] > arr[i]) {
      index = i;
      break;
    }
  }

  if (index == -1) {
    arr.reverse;
    return arr;
  }

  for (let i = n - 1; i > index; i--) {
    if (arr[i] > arr[index]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      break;
    }
  }

  let new_arr = arr.slice(index + 1);

  new_arr.reverse();

  arr.splice(index + 1, n - index - 1, ...new_arr);
  return arr;
}

let arr = [2, 1, 5, 4, 3, 0, 0];
let ans = next_permutation(arr);
console.log(ans);
