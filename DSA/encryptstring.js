// function convertToHex(num) {
//   let temp = "";
//   while (num != 0) {
//     let rem = num % 16;
//     let c = 0;
//     if (rem < 10) {
//       c = rem + 48;
//     } else {
//       c = rem + 87;
//     }
//     temp += String.fromCharCode(c);
//     num = Math.floor(num / 16);
//   }

//   return temp;
// }

// function encryptstring(str) {
//   let n = str.length;
//   let ans = "";
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     let ch = str[i];
//     let hexa;
//     while (i < n && str[i] == ch) {
//       count++;
//       i++;
//     }

//     i--;

//     hexa = convertToHex(count);
//     ans += ch;
//     ans += hexa;
//   }

//   ans = ans.split("").reverse().join("");
//   return ans;
// }

// let str = "abc";
// console.log(encryptstring(str));

function convertToHex(num) {
  let temp = "";
  while (num != 0) {
    let rem = num % 16;
    let c = 0;
    if (rem < 10) {
      c = rem + 48;
    } else {
      c = rem + 87;
    }
    temp += String.fromCharCode(c);
    num = Math.floor(num / 16);
  }

  return temp;
}

// Function to encrypt the string
function encryptString(S, N) {
  let ans = "";

  // Iterate the characters
  // of the string
  for (let i = 0; i < N; i++) {
    let ch = S[i];
    let count = 0;
    let hex;

    // Iterate until S[i] is equal to ch
    while (i < N && S[i] == ch) {
      // Update count and i
      count++;
      i++;
    }

    // Decrement i by 1
    i--;

    // Convert count to hexadecimal
    // representation
    hex = convertToHex(count);

    // Append the character
    ans += ch;

    // Append the characters frequency
    // in hexadecimal representation
    ans += hex;
  }

  // Reverse the obtained answer
  ans = ans.split("").reverse().join("");

  // Return required answer
  return ans;
}

let str = "abc";
let n = str.length;
console.log(encryptString(str, n));
