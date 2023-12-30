// MY SOLUTION - NONE (COULDN'T FIGURE IT OUT)
// TUTOR'S SOLUTION
function recursiveFibonacci(n) {
  if (n < 2) {
    return n
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0)) //0
console.log(recursiveFibonacci(1)) //1
console.log(recursiveFibonacci(6)) //8

// 6 - return 5 + 4
// 5 - return 4 + 3 // 4 return 3 + 2
// 4 - return 3 + 2 // 3 return 2 + 1 // 2 + 1
// 3 + 2 + 3 + 2
// Link to Jamboard that explains how this works 