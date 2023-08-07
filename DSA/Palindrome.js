function palindrome(str) {
  let arr = str.split("");
  let revarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    revarr.push(arr[i]);
  }
  let revstr = revarr.join("");

  if (str === revstr) {
    return true;
  } else {
    return false;
  }
}

console.log(palindrome("MADAM"));
