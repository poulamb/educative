let findMaxSlidingWindow = function (arr, window_size) {
  var result = [];
  if (arr.length === 0 || window_size > arr.length) {
    return result;
  }
  // console.log(arr);
  var wndw = [];
  for (var i = 0; i < window_size; i++) {
    while (wndw.length > 0 && arr[i] > arr[wndw[wndw.length - 1]]) {
      wndw.pop();
    }
    wndw.push(i);
  }

  result.push(arr[wndw[0]]);
  for (i = window_size; i < arr.length; i++) {
    while (wndw.length > 0 && arr[i] > arr[wndw[wndw.length - 1]]) {
      wndw.pop();
    }
    if (wndw.length > 0 && wndw[0] <= i - window_size) wndw.shift();
    wndw.push(i);
    result.push(arr[wndw[0]]);
  }
  console.log(result);
  return result;
};

export default findMaxSlidingWindow;
