function recursiveFactorial(n) {
  if(n<2) {
    return n
  } 
  console.log(n, n * recursiveFactorial(n-1))
return n * recursiveFactorial(n-1)
}

// console.log(recursiveFactorial(6))
recursiveFactorial(4)