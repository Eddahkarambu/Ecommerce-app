

export const getAmount =(prices, value) =>{
    for(let i= 0; i<prices.length; i++){
        const {currency, amount} = prices[i]
      if(value === currency.label){
        return `${currency.symbol}${amount}`
      }
        
    }
   
  }
  