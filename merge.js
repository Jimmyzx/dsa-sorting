function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add remaining elements from both arrays (if any)
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr; // Base case: array with 0 or 1 element is already sorted
    }
  
    // Split the array into two halves
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    // Recursively merge and sort both halves
    return merge(mergeSort(left), mergeSort(right));
  }
  
  module.exports = { merge, mergeSort };
  