let findLowIndex = function (arr, key) {
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor(high / 2);
  while (low <= high) {
    if (arr[mid] < key) {
      low = mid + 1;
    }
    else {
      high = mid - 1;
    }
    mid = low + Math.floor((high - low) / 2);
  }
  if (low<arr.length && arr[low]==key) {
    return low;
  }
  return -1;
};

let findHighIndex = function (arr, key) {
  console.log('*** lows here with key', key);
  let low = 0;
  let high = arr.length - 1;
  let mid = Math.floor(high / 2);
  while (low <= high) {
    // console.log('low:', low, "::", arr[low], ',high:', high, "::", arr[high], ',mid:', mid, "::", arr[mid]);
    if (arr[mid] <= key) {
      low = mid+1;
    }
    else {
      high = mid-1;
    }
    mid = low + Math.floor((high - low) / 2);
  }
  if (high>-1 && high<arr.length && arr[high]==key) {
    return high;
  }
  return -1;
};
