// PROBLEM - Given an array of integers, sort the array
const arr = [-6, 20, 8, -2, 4];

// Idea behind quick sort:
// - Identify the pivot element in the array: Pick the first, last (our approach), median, or random element as pivot
// - Put everything that's smaller than the pivot to the left and greater to the right
// Repeat the process for the individual left and right 
// Repeatedly concatenate the left array, pivot and right array till one sorted array remains

function quickSort(arr) {
  if(arr.length < 2) {
    return arr
  }
  let pivot = arr[arr.length -1];
  let left = []
  let right = []

  for(let i = 0; i < arr.length -1; i++) {
    if(arr[i]<pivot) {
      left.push(arr[i])
    } else {
      right.push (arr[i])
    }
  }
  return [...quickSort(left), pivot,...quickSort(right)]
  
}

console.log(quickSort(arr))

// Big O
// Work case = O(n^2) 
// Avg Case - O(nlogn)