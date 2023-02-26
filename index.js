// Problem - Given a positive integer `n`, determine if the number is a power of 2 or not.
// An integer is a power of two if there exists an integer `x` such that `n` === 2x.

// MY SOLUTION
function isPowerOfTwo(n){
  if(n < 1) {
    return false
  }
  for(let i = 0; i <= Math.sqrt(n); i++) {
    if(Math.pow(2, i) === n) {
      return true
    }
  }
return false 
}
// Big O = O(sqrt(n))


// TUTOR'S SOLUTION
function isPowerOfTwoT(n) {
  if(n<1) {
    return false
  }
  while(n>1) {
    if(n%2 !== 0) {
      return false
    } 
    n=n/2
  }
  return true
}
// Big O = O(logn)


// TUTOR'S BITWISE FUNCTION
function isPowerOfTwoBitWise(n) {
  if(n<1) {
    return false
  }
  return (n & (n-1)) === 0
}
// Big O = O(1)

// isPowerOfTwo(1) true (2^0) 
// isPowerOfTwo(2) true (2^1) 
// isPowerOfTwo(5) false
console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(5))
