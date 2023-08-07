// // function pascaltriangle(n, r) {
// //   let res = 1;
// //   for (let i = 0; i < r; i++) {
// //     res = res * (n - i);
// //     res = res / (i + 1);
// //   }

// //   return res;
// // }

// // let r = 4;
// // let c = 3;
// // let value = pascaltriangle(r - 1, c - 1);
// // console.log(value);

// =======================================================

// function pascaltriangle(n, r) {
//   let res = 1;
//   for (let i = 0; i < r; i++) {
//     res = res * (n - i);
//     res = res / (i + 1);
//   }

//   return res;
// }

// function PascalRow(n) {
//   let rowvalues = [];
//   for (let c = 1; c <= n; c++) {
//     rowvalues.push(pascaltriangle(n - 1, c - 1));
//   }

//   console.log(rowvalues.join(" "));
// }

// PascalRow(5);

// function pascaltriangle(n) {
//   let ans = 1;
//   let arr = [];
//   arr.push(1);
//   for (let i = 1; i < n; i++) {
//     ans = ans * (n - i);
//     ans = ans / i;
//     arr.push(ans);
//   }

//   console.log(arr.join(" "));
// }

// pascaltriangle(5);

// function pascaltriangle(n, r) {
//   let res = 1;
//   for (let i = 0; i < r; i++) {
//     res = res * (n - i);
//     res = res / (i + 1);
//   }

//   return res;
// }

// function PascalRow(n) {
//   let ans = [];

//   for (let i = 1; i <= n; i++) {
//     let rowvalues = [];
//     for (let c = 1; c <= i; c++) {
//       rowvalues.push(pascaltriangle(i - 1, c - 1));
//     }

//     ans.push(rowvalues);
//   }

//   return ans;
// }

// let value = PascalRow(5);
// for (let i = 0; i < 5; i++) {
//   console.log(value[i].join(" "));
// }

function PascalRow(n) {
  let ans = 1;
  let arr = [];
  arr.push(ans);
  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i;
    arr.push(ans);
  }

  return arr;
}

function pascaltriangle(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(PascalRow(i));
  }

  return result;
}

let row_values = pascaltriangle(5);
for (let i = 0; i < 5; i++) {
  console.log(row_values[i].join(" "));
}
