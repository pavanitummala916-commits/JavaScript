//arrow function
let ans = (x, y) => {
  let res = square(x) + square(y);
  return res;
};

//single line arrow function
let square = (z) => z ** 2;
console.log(ans(5, 2));