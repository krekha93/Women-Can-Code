// function divisibleby7(num) {
//   while (num >= 7) {
//     num -= 7;
//   }

//   if (num === 0) {
//     console.log("Number is divisible by 7");
//   } else {
//     console.log("Number is not divisible by 7");
//   }
// }

// let num = 36;
function divisibleby7(num) {
  if (num == 0 || num == 7) {
    console.log("Number is divisible by 7");
    return;
  }
  if (num < 7) {
    console.log("Number is not divisible by 7");
    return;
  }

  divisibleby7(num - 7);
}
let num = 616;
divisibleby7(num);
