let moveZerosToLeft = function(A) {
    if(A.length==0)
    return A;
    let rIndx = A.length-1;
    let wIndx = A.length-1;
    while(wIndx>-1){
      if(rIndx>=0){
      if(A[rIndx]!=0){
      A[wIndx]=A[rIndx];
      wIndx--;
      }
      rIndx--;
      }
      else{
        A[wIndx]=0;
        wIndx--;
      }
    }
    return A;
  };

  let moveZerosToLeft = function(A) {
    if (A.length < 1) {
      return;
    }
  
    let lengthA = A.length;
    let writeIndex = lengthA - 1;
    let readIndex = lengthA - 1;
  
    while (readIndex >= 0) {
      if (A[readIndex] != 0) {
        A[writeIndex] = A[readIndex];
        writeIndex--;
      }
      
      readIndex--;
    }
    
    while (writeIndex >= 0) {
      A[writeIndex] = 0;
      writeIndex--;
    }
  };
  
  let v = [1, 10, 20, 0, 59, 63, 0, 88, 0];
  console.log("Original Array: [" + v + "]");
  
  moveZerosToLeft(v);
  
  console.log("After Moving Zeros: [" + v+ "]");
