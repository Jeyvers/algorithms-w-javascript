// PROBLEM STATEMENT
// Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found. 
// e.g arr = [-5, 2, 10, 4, 6], t = 10 --- should return 2
// e.g arr = [-5, 2, 10, 4, 6], t = 6 --- should return 4
// e.g arr = [-5, 2, 10, 4, 6], t = 20 --- should return -1

// MY SOLUTION WITH JS
function findIndexValueWJs(arr, t) {
  const valueIndex = arr.findIndex((value) => value === t);
  return valueIndex
}

// MY SOlUTION
function findValueIndex(arr, t) {
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] === t) {
      return i;
    }
  }
  return -1
}

console.log(findValueIndex([-5, 2, 10, 4, 6], 2))
console.log(findValueIndex([5, 23, 4, 7, 8, 9, 10, 11], 7))

// TUTOR'S SOLUTION
function linearSearch(arr, target) {
  for(let i = 0; i<arr.length; i++) {
    if(arr[i] === target) {
      return i;
    }
  }
  return -1
}
console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 4)) // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1

// Big O - O(n)