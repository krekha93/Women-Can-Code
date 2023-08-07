//Prototype using construction function
// function Address(city, state) {
//     this.city = city;
//     this.state = state;
//   }

//   Address.prototype.address = function () {
//     console.log(`My city is ${this.city} and state is ${this.state}`);
//   };

//   const add = new Address("Bangalore", "Karnataka");
//   add.address();

//Prototype using class

class Array {
  shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      let random_index = Math.floor(Math.random() * (i + 1));

      let temp = arr[i];
      arr[i] = arr[random_index];
      arr[random_index] = temp;
    }

    return arr;
  }
}

const obj = new Array();
let arr = [1, 2, 3, 4, 5];
console.log(obj.shuffle(arr));
