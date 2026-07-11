let arr = ["apple", "banana", "apple", "mango", "apple"];
//searching a value in arr using indexOf :from left
let res1 = arr.indexOf("apple");
console.log("res1");

///searching a value in arr using lastindexOf:from right
let res2 = arr.lastIndexOf("apple");
console.log("res2");

arr[2] = "guava";
console.log(arr);
