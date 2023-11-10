// Sorting Algorithms
// Bubble sort, insertion sort, quick sort, merge sort. 
// Given an array of integers, sort the array

// MY SOLUTION
function bubbleSort(arr) {
 let swapped = false;
 for (let i = 0; i <= arr.length - 1; i++) {
  let currentIndex = arr[i];
  let nextIndex = arr[i + 1];
  if (arr[i + 1] < arr[i]) {
   arr[i] = nextIndex;
   arr[i + 1] = currentIndex;
   swapped = true;
  }
 }
 if (swapped) {
  return bubbleSort(arr);
 } else {
  return arr;
 }
}


console.log(bubbleSort([-6, 20, 8, -2, 4]))
console.log(bubbleSort([30, 20,15, -10, 4]))