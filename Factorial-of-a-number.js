// Problem: Given an integer 'n', find the factorial of that integer
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or equal to 'n'. Eg: factorial(4) = 4*3*2*1
// Factorial of zero is one.

// MY SOLUTION
const factorial = (n) => {
  let sum = 1;
  for (i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
};
//n+2 The Big O for my function is O(n) - linear
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));

// TUTOR'S SOLUTION
function factorialT(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
// The Big O = O(n)

console.log(factorialT(4));
console.log(factorialT(5));
console.log(factorialT(0));
console.log(factorialT(1));
