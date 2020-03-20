function insertionSort(arr) {
  let ele = arr[1];
  if (arr[1] < arr[0]){
    [arr[1], arr[0]] = [arr[0], arr[1]];
  }
  for (let i = 1; i < arr.length; i++){
    if (arr[i] > arr[i+1]){
      [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
      for (let j = i; j >= 0; j--){
        if (arr[j] < arr[i]){
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        else {
          break;
        }
      }
    }
  }
  return arr;
}

// [1,3,2,4] -> [1,2,3,4]
// ele = 3, 

module.exports = insertionSort;

// Start by picking the second element in the array (we will assume the first element is the start of the “sorted” portion)
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// Repeat until the array is sorted.