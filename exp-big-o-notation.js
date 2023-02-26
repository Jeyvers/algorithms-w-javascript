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


// BIG O OBJECTS AND ARRAY EXPLANATION
// An Object is a collection of key value pairs
// Insert - O(1)
// Remove - O(1)
// Access - O(1)
// Search - O(n)
// Methods with linear time complexity
// Object.keys, Object.values, Object.entries

// An array is an ordered collection of values
// Methods with constant
// Insert / remove at the end O(1) Constant
// Insert/remove at the beginning = O(n) Linear (Because the index has to be reset for all values)
// Access - O(1) : Push/Pop
// Search - O(n) : Shift/ unshift/ concat/slice/splice, forEach/map/filter/reduce
