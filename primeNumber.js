// PROBLEM - Given a natural number 'n', determine if the number is prime or not. A primary number is a natural number greater than 1 that is not a product of two small natural numbers.
// Prime numbers: whole numbers greater than 1 that are only divisible
// by 1 and itself.

// My Solution
function isPrime(n) {
  let prime = true;
  for (let i = 0; i < n; i++) {
    for (let ii = 0; ii <= i; ii++) {
      if (n === 1 || i * ii === n) {
        prime = false;
      }
    }
  }
  return prime;
}

// 2, 3, 5, 7, 11
// 1,4,6,8,9,10
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(9));
console.log(isPrime(10));

// TUTOR'S SOLUTION
function isPrimeT(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
