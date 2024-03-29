// Big-O Time Complexity

// Problem: find the sum of first n natural numbers
{
  // First Algorithm: O(n) - linear
  function summation(n) {
    let sum = 0; // code 1 executes once
    for (let i = 0; i <= n; i++) {
      sum += i; //code 2 executes n times, in this case, four times
    }
    return sum; // code 3 executes once
  }
  // therefore, the time complexity will be n(4) + 2 if n = 4
}

// Second  Algorithm O(1) - constant
function summation(n) {
  return (n * (n + 1)) / 2; //runs only once
}

// Big O Time Complexity. 
// O(1) - Constant : When the function runs only once irrespective of the input size
// O(n) - Linear : When the function runs depending on the number of input size
// O(n2) - Quadratic : 2 Nested loops
// O(n3) - Cubic : 3 Nested loops
// O(n3) - Logarithmic : Input size reduces by half every iteration