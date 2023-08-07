class Stack {
  constructor() {
    this.values = [];
  }

  push(item) {
    this.values.push(item);
  }

  pop() {
    return this.values.pop();
  }

  peek() {
    return this.values[this.values.length - 1];
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

function balanced_parenthesis(str) {
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.isEmpty()) {
        return false;
      }

      const top = stack.peek();
      if (char === ")" && top === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

const str1 = "()())(";
const str2 = "()";

console.log(balanced_parenthesis(str1));
console.log(balanced_parenthesis(str2));
