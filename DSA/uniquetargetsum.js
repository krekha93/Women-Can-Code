function uniquetargetsum(arr, target) {
  let ans = [];
  let combination = [];
  function finduniquetargetsum(index, target) {
    if (target === 0) {
      ans.push([...combination]);
      return;
    }
    for (let i = index; i < arr.length; i++) {
      if (i > index && arr[i] === arr[i - 1]) {
        continue;
      }
      if (arr[i] <= target) {
        combination.push(arr[i]);
        finduniquetargetsum(i + 1, target - arr[i]);
        combination.pop();
      }
    }
  }
  arr.sort((a, b) => a - b);
  finduniquetargetsum(0, target);
  return ans;
}

let arr = [10, 1, 2, 7, 6, 1, 5];
let target = 8;
console.log(uniquetargetsum(arr, target));
