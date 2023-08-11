let a = 10;
let b = 20;

let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});

data.then((b) => {
  console.log(a + b);
});
