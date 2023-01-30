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

console.log(factorial(4));
console.log(factorial(5));
