function merge(arr1, arr2) {
  let mergeArr = [];
  let idx1 = 0;
  let idx2 = 0;


  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      mergeArr.push(arr1[idx1]);
      idx1++;
    } else {
      mergeArr.push(arr2[idx2]);
      idx2++;
    }
  }
  let remainArr1 = arr1.slice(idx1, arr1.length);
  let remainArr2 = arr2.slice(idx2, arr2.length);

  mergeArr = mergeArr.concat(remainArr1, remainArr2);
  return mergeArr;

}


function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let midpoint = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, midpoint);

  let arr2 = arr.slice(midpoint, arr.length);

  let sortedArr1 = mergeSort(arr1);
  let sortedArr2 = mergeSort(arr2);

  return merge(sortedArr1, sortedArr2);

}

module.exports = { merge, mergeSort };


