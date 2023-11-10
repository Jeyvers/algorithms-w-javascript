// Sorting Algorithms
// Bubble sort, insertion sort, quick sort, merge sort. 
// Given an array of integers, sort the array;
// Check first two, if second is greater than one, swap, and so on. 

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

// TUTOR'S SOLUTION
function bubbleSort2(arr) {
  let swapped;
  do {
    swapped = false;
  for(let i = 0; i<arr.length-1;i++) {
    if(arr[i]>arr[i+1]) {
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      swapped = true;
    }
  }
  } while (swapped)
}

const arr= [8, 20, -2, 4, -6]
bubbleSort2(arr)
console.log(arr)
// Big O = O(n^2)
