// PROBLEM STATEMENT
// Given a SORTED array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.
// e.g arr = [-5, 2, 10, 4, 6], t = 10 --- should return 4
// Find middle element in the sorted array

function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length-1)

}

function search(arr, target, leftIndex, rightIndex) {
  if(leftIndex > rightIndex) {
    return -1
  }
   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if(target === arr[middleIndex]) {
    return middleIndex
  }
  if(target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex-1)
  } else {
    return search(arr, target, middleIndex+1 , rightIndex)
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

// Time complexity BigO = O(logn) reduces each time


