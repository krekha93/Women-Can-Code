function isomorphic(str1, str2) {
  let m = str1.length;
  let n = str2.length;
  let map1 = {};
  let map2 = {};
  if (m !== n) {
    return false;
  }

  for (let i = 0; i < m; i++) {
    if (map1[str1[i]] !== map2[str2[i]]) {
      return false;
    }

    if (!map1[str1[i]]) {
      map1[str1[i]] = i + 1;
    }

    if (!map2[str2[i]]) {
      map2[str2[i]] = i + 1;
    }
  }

  return true;
}

let str1 = "aab";
let str2 = "xyy";
console.log(isomorphic(str1, str2));
