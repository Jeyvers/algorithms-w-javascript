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

// console.log(isPrime(1)); // false
// console.log(isPrime(5)); // true
// console.log(isPrime(4)); // false

// const le = [34, 23, 1, 24, 75, 33, 54, 8];
const le = [10, 20, 30];
const k = 15;
let store = 0;

function runFunction() {
  for (let i = 0; i < le.length; i++) {
    const elementi = le[i];
    for (let ii = 1; ii < le.length; ii++) {
      const elementii = le[ii];
      const solve = elementi + elementii;
      if (solve < k && solve > store) {
        store = solve;
        console.log(i, ii, solve);
      }
    }
  }
  if (store > 0) {
    return store;
  } else return -1;
  console.log(store);
}

console.log(runFunction());
