// PROBLEM - Given a natural number 'n', determine if the number is prime or not. A primary number is a natural number greater than 1 that is not a product of two small natural numbers.
// Prime numbers: whole numbers greater than 1 that are only divisible
// by 1 and itself.

function isPrime(n) {
  let prime = true;
  for (let i = 2; i < n; i++) {
    // console.log(`Value: ${i}`, i * i, i * (i - 1));
    if (i * i === n || i * (i - 1) === n) {
      //   console.log(`${n} is not a prime number.`);
      prime = false;
    }
  }
  return prime;
}

console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(16));
