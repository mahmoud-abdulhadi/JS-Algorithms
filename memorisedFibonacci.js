function memFibonacci(index , cache){
    cache = cache || [] ; 

    if(cache[index])
        return cache[index]; 
    else {

        if(index < 3)   
            return 1 ; 
        else{

            cache[index] = memFibonacci(index - 1 , cache) + memFibonacci(index - 2 , cache);
        } 
            

    }

    return cache[index];


}

console.log(memFibonacci(1000));