let findMaxSlidingWindow = function (arr, window_size) {
  var result = [];
  var currMax;
  if (arr.length === 0 || window_size > arr.length) {
    // console.log('array length', arr.length);
    return result;
  }
  // console.log(arr);
  for (var i = 0; i <= arr.length - window_size; i++) {
    currMax = arr[i];
    for (var j = i; j < i + window_size; j++) {
      // console.log('j::',j);
      if (arr[j] > currMax) {
        currMax = arr[j];
        // console.log('more arr[j]::', arr[j], 'currMax ',currMax, 'i::',i,'j::',j);
      } else {
        // console.log('less arr[j]::', arr[j], 'currMax ',currMax, 'i::',i,'j::',j);
      }
    }
    // console.log('in i loop less arr[j]::', arr[j], 'currMax ',currMax, 'i::',i,'j::',j);
    result[i] = currMax;
  }
  // console.log(result);
  return result;
};

export default findMaxSlidingWindow;
