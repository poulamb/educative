let findBuySellStockPrices = function(arr) {
    if(arr.length<2)
    return [-1, -1];
    let buyPoint = arr[0];
    let sellPoint = arr[1];
    let maxProfit = sellPoint - buyPoint;
    let tempProfit = Number.MIN_SAFE_INTEGER;
    
    for(let i =1;i<arr.length;i++){
      tempProfit = arr[i]-buyPoint;
      if( tempProfit>maxProfit){
        maxProfit = tempProfit;
        sellPoint=arr[i];
      }
      if(arr[i]<buyPoint)
        buyPoint = arr[i];
    }
    
    return[sellPoint-maxProfit,sellPoint];
       //Return a tuple with (high, low) price values
    };
/////////////////*********** */
    let findBuySellStockPrices = function(array) {
        if (!array || array.length < 2) {
          return;
        }
      
        let currentBuy = array[0];
        let globalSell = array[1];
        let globalProfit = globalSell - currentBuy;
      
        let currentProfit = 0;
      
        for (let i = 1; i < array.length; i++) {
          currentProfit = array[i] - currentBuy;
      
          if (currentProfit > globalProfit) {
            globalProfit = currentProfit;
            globalSell = array[i];
          }
      
          if (currentBuy > array[i]) {
            currentBuy = array[i];
          } 
        }
        return [globalSell - globalProfit, globalSell];
      };
      
      let arrayForStockPrices = [1, 2, 3, 4, 3, 2, 1, 2, 5];
      let result = findBuySellStockPrices(arrayForStockPrices);
      console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);
      
      arrayForStockPrices = [8, 6, 5, 4, 3, 2, 1];
      result = findBuySellStockPrices(arrayForStockPrices);
      console.log("Buy Price: " + result[0] + ", Sell Price: " + result[1]);
