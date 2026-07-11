let str = "I Love Python";
let count = 0;
for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    console.log(str[i]);
  }
  count++;
}
console.log("Count is:", count);

