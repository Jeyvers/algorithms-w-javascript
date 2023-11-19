// PROBLEM - Given an array of integers, sort the array
const array = [-6, 20, 8, -2, 4];

// Idea behind quick sort:
// - Identify the pivot element in the array: Pick the first, last (our approach), median, or random element as pivot
// - Put everything that's smaller than the pivot to the left and greater to the right
// Repeat the process for the individual left and right 
// Repeatedly concatenate the left array, pivot and right array till one sorted array remains
