// PROBLEM STATEMENT
// Given a SORTED array of 'n' elements and a target element 'target', find the index of 't' in the array. Return -1 if the target element is not found.
// e.g arr = [-5, 2, 4, 6, 10], t = 10 --- should return 4
// Find middle element in the sorted array
function binarySearch(arr, target) {
 let leftIndex = 0;
 let rightIndex = arr.length - 1;

 while (leftIndex <= rightIndex) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
   return middleIndex;
  }
  if (target < arr[middleIndex]) {
   rightIndex = middleIndex - 1;
  } else {
   leftIndex = middleIndex + 1;
  }
 }
 return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// TIme complexity O(logn) reduces each time


