

export const getAmount =(prices, value, symbol=true) =>{
    for(let i= 0; i<prices.length; i++){
        const {currency, amount} = prices[i]
      if(value === currency.label){
        if(symbol){         
          return `${currency.symbol}${amount}`
        }
        else {
          return amount;
        }
      }
        
    }
   
  }
  