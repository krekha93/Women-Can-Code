function closest(arr, word1, word2) {
  let n = arr.length;
  let d1 = -1;
  let d2 = -1;
  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] == word1) {
      d1 = i;
    }
    if (arr[i] == word2) {
      d2 = i;
    }

    if (d1 !== -1 && d2 !== -1) {
      ans = Math.min(ans, Math.abs(d1 - d2));
    }
  }

  if (ans === Infinity) {
    return -1; 
  }

  return ans;
}

let arr = ["the", "quick", "brown", "fox", "quick"];

let word1 = "the",
  word2 = "fox";
console.log(closest(arr, word1, word2));
