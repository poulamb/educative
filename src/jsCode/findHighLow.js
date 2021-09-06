let findLowIndex = function(arr, key) {
    let start = 0;
    let end=arr.length -1;
    let mid;
    while(start<=end){
      mid = Math.floor((start+end)/2);
      if(arr[mid]==key && arr[mid-1]<key){
        return mid;
      }
      if(arr[start]<=key && key<=arr[mid]){
        end = mid-1;
      }
      else if(arr[mid]<=key && key<=arr[end]){
        start = mid+1;
      } else return -1;
    }
  
    return -2;
  };
  
  let findHighIndex = function(arr, key) {
    console.log('*** starts here with key', key);
    let start = 0;
    let end=arr.length -1;
    let mid;
    while(start<=end){
      mid = Math.floor((start+end)/2);
      console.log('start:',start,"::",arr[start],',end:',end,"::",arr[end],',mid:',mid,"::",arr[mid]);
      if(arr[mid]==key && arr[mid+1]>key){
        console.log('**1');
        return mid;
      }
      if(arr[mid]<=key && key<=arr[end]){
        console.log('**3');
        start = mid+1;
      }
      else if(arr[start]<=key && key<=arr[mid]){
        console.log('**2');
        end = mid-1;
      }
       else return -1;
    }
    return -2;
  };
