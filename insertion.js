function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      // Start by picking the second element in the array (index 1)
      let currentElement = arr[i];
      let j = i - 1;
  
      // Compare the current element with the one before it
      while (j >= 0 && arr[j] > currentElement) {
        // If it's in the incorrect order, swap them
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Place the current element in the correct place
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Test cases
  console.log(insertionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
  console.log(insertionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
  console.log(insertionSort([1, 2, 3])); // [1, 2, 3]
  console.log(insertionSort([])); // []
  
  let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
  ];
  
  console.log(insertionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
  