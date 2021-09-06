class Pair { 
    constructor(first, second) { 
      this.first = first; 
      this.second = second; 
    } 
  }
  
  let mergeIntervals = function(v){
    let result = [];
    if(!v || v.length<1)
    return;
    result.push(new Pair(v[0].first,v[0].second));
    let temp,lastInterval;
    for(let i = 1;i<v.length;i++){
      temp = v[i];
      lastInterval = result[result.length-1];
      let x2=temp.first;
      let y2 = temp.second;
      let x1= lastInterval.first;
      let y1= lastInterval.second;
      console.log('x1:',x1,'y1:',y1,', x2:',x2,'y2:',y2);
      if(x2<=y1){
        result[result.length-1].second = Math.max(y2,y1);
      }
      else result.push(new Pair(x2,y2));
  
    }
    return result;    
  }
