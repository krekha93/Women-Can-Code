function LongestIncreasingSubsequence(arr) {
  let maxLength = 1;
  let endIndex = 0;
  let currentLength = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLength++;

      if (currentLength > maxLength) {
        maxLength = currentLength;
        endIndex = i;
      }
    } else {
      currentLength = 1;
    }
  }

  const longestIncreasingSubsequence = arr.slice(
    endIndex - maxLength + 1,
    endIndex + 1
  );
  return longestIncreasingSubsequence;
}

const array = [3, 4, 2, 8, 10, 5, 1];
const result = LongestIncreasingSubsequence(array);
console.log(result);
