function permute(nums) {
  let result = [];

  function possiblepermutation(start) {
    if (start === nums.length) {
      console.log(nums);
      result.push([...nums]);
    }

    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];

      possiblepermutation(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  possiblepermutation(0);
  return result;
}

const nums = [1, 2, 3];
const permutations = permute(nums);
console.log(permutations);
