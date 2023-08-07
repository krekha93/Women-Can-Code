function targetsum(arr, target) {
  let ans = [];
  let combination = [];

  function findtarget(index, target) {
    if (index === arr.length) {
      if (target === 0) {
        ans.push([...combination]);
      }

      return;
    }

    if (arr[index] <= target) {
      combination.push(arr[index]);
      findtarget(index, target - arr[index]);
      combination.pop();
    }
    findtarget(index + 1, target);
  }
  findtarget(0, target);
  return ans;
}

let arr = [2, 3, 6, 7];
let target = 7;

console.log(targetsum(arr, target));
