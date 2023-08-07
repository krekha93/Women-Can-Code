function panagram(str) {
  let set = new Set();
  for (let i of str) {
    if (i >= "a" && i <= "z") {
      set.add(i);
    }
    if (i >= "A" && i >= "Z") {
      i = i.toLowerCase();
      set.add(i);
    }
  }

  return set.size === 26;
}

const str = "The quick brown fox jumps over the lazy dog";
if (panagram(str)) {
  console.log("It is a Pangram");
} else {
  console.log("It is not a Pangram");
}
