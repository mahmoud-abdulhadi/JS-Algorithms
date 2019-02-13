function maxStockProfit(pricesArr){
    //takes in array of prices as parameter 
    //returns the max possible profit of the day 
    let maxProfit = -1 ; 
    let buyPrice = 0 ; 
    let sellPrice = 0 ; 

    let changeBuyPrice = true ; 


    for(let i = 0 ; i < pricesArr.length ; i++){

        if(changeBuyPrice)
            buyPrice = pricesArr[i]; 
        
        sellPrice = pricesArr[i + 1];

        if(sellPrice < buyPrice){

                changeBuyPrice = true; 


        }else {
            //there is profit 
            let tempProfit = sellPrice - buyPrice ; 
            if(tempProfit > maxProfit)
                maxProfit = tempProfit ; 
            changeBuyPrice = false ; 
            
        }
    }

    return maxProfit ; 
}

//[32,46,26,38,40,48,42] // maxProfit : 22 

//[10,18,4,5,9,6,16,12]

console.log(maxStockProfit([10,18,4,5,9,6,16,12])) ; 


