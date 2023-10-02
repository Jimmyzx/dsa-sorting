function pivot(arr) {
    // Step 1: Choose the pivot (in this case, the first element)
    const pivotValue = arr[0];
    let pivotIndex = 0;
  
    // Step 2: Partition the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivotValue) {
        pivotIndex++;
        // Swap arr[i] with arr[pivotIndex]
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      }
    }
  
    // Move the pivot element to its correct position
    [arr[0], arr[pivotIndex]] = [arr[pivotIndex], arr[0]];
  
    // Step 3: Return the index where the pivot element ends up
    return pivotIndex;
  }
  
  // Example usage:
  let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
  let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
  
  console.log(pivot(arr1)); // Output: 3 (index where the pivot element ends up)
  console.log(pivot(arr2)); // Output: 4 (index where the pivot element ends up)
  
  // Check the partitioned arrays (left and right of the pivot)
  const left1 = arr1.slice(0, pivotIndex).sort((a, b) => a - b);
  const right1 = arr1.slice(pivotIndex + 1).sort((a, b) => a - b);
  
  const left2 = arr2.slice(0, pivotIndex).sort((a, b) => a - b);
  const right2 = arr2.slice(pivotIndex + 1).sort((a, b) => a - b);
  
  console.log(left1);  // Output: [2, 3, 4] (elements less than pivot)
  console.log(right1); // Output: [5, 7, 8, 9, 10, 20] (elements greater than pivot)
  
  console.log(left2);  // Output: [0, 2, 4, 5] (elements less than pivot)
  console.log(right2); // Output: [8, 10, 11, 12, 13, 16] (elements greater than pivot)
  