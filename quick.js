/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    // Helper function to swap two elements in an array
    function swap(arr, i, j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  
    const pivotValue = arr[start];
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotValue) {
        pivotIndex++;
        swap(arr, pivotIndex, i);
      }
    }
  
    // Swap the pivot element with the element at pivotIndex
    swap(arr, start, pivotIndex);
    
    // Return the index of the pivot element
    return pivotIndex;
  }
  
  /*
  quickSort accepts an array, left index, and right index
  */
  
  function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      // Call pivot to get the index of the pivot element
      const pivotIndex = pivot(arr, left, right);
  
      // Recursively sort the left and right subarrays
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  
    // Return the sorted array
    return arr;
  }
  
  module.exports = quickSort;

  
console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(quickSort([1, 2, 3])); // [1, 2, 3]
console.log(quickSort([])); // []

let nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23,
  2, 453, 546, 75, 67, 4342, 32
];

console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
