// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }

//   return arr;
// }

// function sort(arr) {
//   let count0 = 0;
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       count0 += 1;
//     }
//     if (arr[i] === 1) {
//       count1 += 1;
//     }
//     if (arr[i] === 2) {
//       count2 += 1;
//     }
//   }

//   console.log(count0);
//   console.log(count1);
//   console.log(count2);

//   for (let i = 0; i < count0; i++) {
//     arr[i] = 0;
//   }

//   for (let i = count0; i < count0 + count1; i++) {
//     arr[i] = 1;
//   }

//   for (let i = count0 + count1; i < arr.length; i++) {
//     arr[i] = 2;
//   }

//   return arr;
// }

function sort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

let arr = [0, 2, 1, 2, 0, 1];
console.log(sort(arr));
