function twoSum(numArray , sum){
    //Returns every pair of numbers from 'numArray' 
    // that adds up to 'sum'
    let pairs = [] ; 
    let hashTable = []; 

    for(let i = 0 ; i < numArray.length ; i++){
        
        let current = numArray[i];

        let counterPart = sum - current ; 

        if(hashTable.indexOf(counterPart) !== -1){
            pairs.push([current , counterPart]) ; 
        }

        hashTable.push(current);
    }
    
    return pairs ; 
}


console.log(twoSum([40,11,19,17,-12],28));