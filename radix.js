function radixSort(arr) {
    // Find the maximum number to determine the number of digits
    const max = Math.max(...arr);
    const maxDigits = Math.floor(Math.log10(max)) + 1;
  
    // Helper function to get the digit at a specific position
    function getDigit(num, place) {
      return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }
  
    for (let i = 0; i < maxDigits; i++) {
      // Create 10 buckets (0 to 9)
      const buckets = Array.from({ length: 10 }, () => []);
  
      // Distribute elements into buckets based on the current digit
      for (let j = 0; j < arr.length; j++) {
        const digit = getDigit(arr[j], i);
        buckets[digit].push(arr[j]);
      }
  
      // Concatenate all buckets to get the new order for this digit position
      arr = [].concat(...buckets);
    }
  
    return arr;
  }
  
  module.exports = radixSort;

  
  console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
  console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
  console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593])); // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
  