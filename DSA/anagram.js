// function areKAnagrams(str1, str2, k) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const map1 = {};
//   const map2 = {};

//   for (let i = 0; i < str1.length; i++) {
//     const char1 = str1[i];
//     const char2 = str2[i];
//     if (!map1[char1]) {
//       map1[char1] = 1;
//     } else {
//       map1[char1] += 1;
//     }
//     if (!map2[char2]) {
//       map2[char2] = 1;
//     } else {
//       map2[char2] += 1;
//     }
//   }

//   let diffCount = 0;
//   for (let key in map1) {
//     if (!map1[key]) {
//       diffCount++;
//     } else {
//       diffCount += Math.abs(map1[key] - map2[key]);
//     }
//   }

//   return diffCount <= k;
// }

function areKAnagrams(str1, str2, k) {
  // Check if the lengths of the strings are the same
  if (str1.length !== str2.length) {
    return false;
  }

  // Create frequency counters for both strings
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Count the frequency of characters in the first string
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  // Count the frequency of characters in the second string
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }

  // Compare the frequency counters
  let diffCount = 0;
  for (let key in frequencyCounter1) {
    if (!frequencyCounter2[key]) {
      diffCount++;
    } else {
      diffCount += Math.max(0, frequencyCounter1[key] - frequencyCounter2[key]);
    }
  }

  // Check if the number of differences is less than or equal to k
  return diffCount <= k;
}

const string3 = "geeks";
const string4 = "eggkf";
console.log(areKAnagrams(string3, string4, 1));
