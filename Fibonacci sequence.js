// PROBLEM: Given a number 'n', find the first 'n' elements of the fibonacci sequence.
// EXPLANATION: In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of two preceding ones. The first two numbers in the sequence are 0 and 1.
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1, 1]
// fibonacci(7) = [0,1, 1, 2, 3, 5, 8, ]
// remember: the next value is a sum of two preceding values

// MY SOLUTION
const fibonacci = (n) => {
  let constants = [0, 1];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    console.log(
      constants[constants.length - 2],
      constants[constants.length - 1]
    );
    sum = constants[constants.length - 2] + constants[constants.length - 1];
    console.log(sum);
    constants.push(sum);
    console.log(constants);
  }
  return sum;
};
fibonacci(7);
