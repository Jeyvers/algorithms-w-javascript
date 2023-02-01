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

// TUTOR'S SOLUTION 1
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
// Big O = O(n)

// TUTOR'S SOLUTION 2
function isPrimeT(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// Big O = O(sqrt(n))

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
