console.log("This is Arraysplice.js");

let arr = ["Apple", "Banana", "Mango"];
arr.splice(1, 1, "Guava", "carrot");
console.log(arr);

let arr = [1, 2, 4, 3, 56];
for (let i = 0; i < arr.length; i++) {
  console.log(`${arr[i]} power 2 is: ${arr[i] ** 2}`);
}

//for-of loop for array
let arr = [1, 2, 4, 3, 56];
for (let item of arr) {
  console.log(`${item} power 3 is: ${item ** 3}`);
}

//for-in loop for array
let arr = [1, 2, 4, 3, 56];
for (let idx in arr) {
  console.log(`${arr[idx]} power 4 is ${arr[idx] ** 4}`);
}
