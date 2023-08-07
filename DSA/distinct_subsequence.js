function printDistinctSubsequences(
  str,
  current = "",
  index = 0,
  distinctSubsequences = new Set()
) {
  if (index === str.length) {
    distinctSubsequences.add(current);

    return;
  }

  printDistinctSubsequences(
    str,
    current + str[index],
    index + 1,
    distinctSubsequences
  );

  printDistinctSubsequences(str, current, index + 1, distinctSubsequences);

  if (index === 0) {
    console.log(distinctSubsequences.size);
    for (const subsequence of distinctSubsequences) {
      console.log(subsequence);
    }
  }
}

const inputString = "ggg";
printDistinctSubsequences(inputString);
