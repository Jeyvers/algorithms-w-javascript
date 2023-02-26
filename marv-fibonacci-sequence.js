// PROBLEM: Given a number 'n', find the first 'n' elements of the fibonacci sequence.
// EXPLANATION: In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of two preceding ones. The first two numbers in the sequence are 0 and 1.
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1, 1]
// fibonacci(7) = [0,1, 1, 2, 3, 5, 8, ]
// remember: the next value is a sum of two preceding values

function fibonacci(n) {
  let array = [];
  let i = 0;
  let x = 0;
  while (array.length < n) {
    array.push(i );

if(i === 0){
    i ++
}else{
   i + x
   x = i + x;

}
  }

  return array;
}
console.log(fibonacci(11));
