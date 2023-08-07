function subsetsum(arr, n) {
  let ans = [];
  function findsubsetsum(index, sum) {
    if (index === n) {
      ans.push(sum);
      return;
    }

    findsubsetsum(index + 1, sum + arr[index]);
    findsubsetsum(index + 1, sum);
  }

  findsubsetsum(0, 0);
  return ans.sort();
}

let arr = [5, 2, 1];
let n = arr.length;
console.log(subsetsum(arr, n));
