function equalbracket(str) {
  let cnt_close = 0;
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === ")") {
      cnt_close++;
    }
  }

  let cnt_open = 0;
  for (let i = 0; i < len; i++) {
    if (str[i] === "(") {
      cnt_open++;
    }

    let current_closed = i + 1 - cnt_open;

    if (cnt_close - current_closed === cnt_open) {
      return i;
    }
  }

  return -1;
}

let str = "(()))(()()())))";
console.log(equalbracket(str));
