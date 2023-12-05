// PROBLEM: Given a number 'n', find the first 'n' elements of the Fibonacci sequence.
// EXPLANATION: In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of two preceding ones. The first two numbers in the sequence are 0 and 1.
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1, 1]
// fibonacci(7) = [0,1, 1, 2, 3, 5, 8, ]
// remember: the next value is a sum of two preceding values

// Big O time-complexity for my first solution was O(n) +3 (which was wrong because two more letters were added)
// Big O time-complexity for my second solution was O(n^2) + 3 (correct but large time-complexity because of the splice function which also has a linear complexity, same as the loop,  dependent on the input size)
// Big-O time-complexity for my final solution was O(n) + 3 (the output was correct)
// Big O time-complexity for the tutor's solution was O(n) + 2

// MY SOLUTION
const fibonacci = (n) => {
  let fib = [0, 1];
  let sum = 0;
  for (let i = 2; i < n; i++) {
    sum = fib[fib.length - 2] + fib[fib.length - 1];
    fib.push(sum);
  }
  return fib;
};

// console.log(fibonacci(2));
// console.log(fibonacci(3));
// console.log(fibonacci(7));
// console.log(fibonacci(12));

// TUTOR'S SOLUTION

function fibonacci2(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci2(0));
console.log(fibonacci2(1));
console.log(fibonacci2(6));