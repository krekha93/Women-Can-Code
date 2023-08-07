function reverse(str) {
  let word = str.split(" ");
  let reverseword = reversearray(word);
  function reversearray(word) {
    let temp;
    let start = 0;
    let end = word.length - 1;
    while (start <= end) {
      temp = word[start];
      word[start] = word[end];
      word[end] = temp;
      start++;
      end--;
    }

    return word;
  }

  var reversestring = reverseword.join(" ");

  return reversestring;
}

let str = "i like this program very much ";
console.log(reverse(str));
