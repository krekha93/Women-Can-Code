function min_deletion(str, i, j) {
  if (i >= j) {
    return 0;
  }

  if (str[i] === str[j]) {
    return min_deletion(str, i + 1, j - 1);
  }

  let choice1 = min_deletion(str, i + 1, j);
  let choice2 = min_deletion(str, i, j - 1);
  return 1 + Math.min(choice1, choice2);
}

let str = "abefbac";
console.log(min_deletion(str, 0, str.length - 1));
