let binarySearchRotated = function(arr, key) {

    start = 0;
    end = arr.length - 1;
  
    if (start > end){
      return -1;
    }
    console.log('Starts here**');
    while (start <= end){
      mid = Math.floor((start + end)/ 2) ;
          console.log('start::',arr[start],'end:: ',arr[end],'mid:: ',arr[mid]);
          if (arr[mid] == key) {
              return mid;
          }
          if (arr[start] <= arr[mid] && arr[start] <= key && key <= arr[mid]) {
            console.log('1st half of sorted array');
              end = mid - 1;
          }else if(arr[end] >= arr[mid] && arr[mid] <= key && key <= arr[end]){
            console.log('2nd half of sorted array');
              start = mid+1;
          }else if(arr[end]<=arr[mid]){
            console.log('unsorted end < mid');
              start =mid+1;
          }else if(arr[start]>=arr[mid]){
            console.log('unsorted start >mid');
              end = mid-1;
          } else {return -1;}
    }
  
    return -1;
  };


let v1 = [6, 7, 1, 2, 3, 4, 5];
  
console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
console.log("Key(6) found at: " + binarySearchRotated(v1, 6));
    
let v2 = [4, 5, 6, 1, 2, 3];
  
console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
console.log("Key(6) found at: " + binarySearchRotated(v2, 6));  
