function bubbleSort(arr) {
    const length = arr.length;
  
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return arr;
  }
  
  // Example usages:
  console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
  console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
  console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
  console.log(bubbleSort([])); // []
  
  let nums = [
      4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
      23, 2, 453, 546, 75, 67, 4342, 32
  ];
  
  console.log(bubbleSort(nums));
  
  module.exports = bubbleSort;