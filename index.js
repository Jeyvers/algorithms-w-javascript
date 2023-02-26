// Problem - Given a positive integer `n`, determine if the number is a power of 2 or not.
// An integer is a power of two if there exists an integer `x` such that `n` === 2x.

// MY SOLUTION
function isPowerOfTwo(n){
  if(n < 1) {
    return false
  }
  for(let i = 0; i <= Math.sqrt(n); i++) {
    if(Math.pow(2, i) === n) {
      return ({is: true, syntax: `2^${i}`})
    }
  }
return false 
}

// isPowerOfTwo(1) true (2^0) 
// isPowerOfTwo(2) true (2^1) 
// isPowerOfTwo(5) false
console.log(Math.sqrt(5))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(16))