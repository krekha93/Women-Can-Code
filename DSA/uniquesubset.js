function uniquesubset(arr) {
  let ans = [];
  let subset = [];
  let n = arr.length;

  function finduniquesubset(index) {
    ans.push([...subset]);

    for (let i = index; i < n; i++) {
      if (i > index && arr[i] === arr[i - 1]) {
        continue;
      }
      subset.push(arr[i]);
      finduniquesubset(i + 1);
      subset.pop();
    }
  }

  arr.sort((a, b) => a - b); // Sort the input array
  finduniquesubset(0);

  return ans;
}

let arr = [1, 2, 2];
console.log(uniquesubset(arr));
