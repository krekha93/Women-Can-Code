const fs = require("fs");
const data = "name_age.json";

function average_age(ages) {
  let sum = ages.reduce((total, age) => {
    total += age;
    return total;
  }, 0);
  return sum / ages.length;
}

fs.readFile(data, (err, data) => {
  if (err) throw err;
  const users_data = JSON.parse(data);
  const ages = users_data.map((item) => item.age);
  console.log(average_age(ages));
});
