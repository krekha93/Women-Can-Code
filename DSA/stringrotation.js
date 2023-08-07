function stringrotation(str1, str2) {
  console.log(str1.length);
  console.log(str2.length);

  if (str1.length !== str2.length) {
    return false;
  }

  let rotatedstring = str1 + str1;
  console.log(rotatedstring);
  return rotatedstring.includes(str2);
}

let string1 = "google";
let string2 = "legogg";

console.log(stringrotation(string1, string2));
