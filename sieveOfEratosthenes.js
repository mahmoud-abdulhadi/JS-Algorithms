function sieveEratosthenes(n){
    //return all prime numbers 
    //up to `num` in an array 

    sieve = [] ; 
    //setup an array from 0 to n with values of true 
    for(let i = 0 ; i <= n ;i++)
        sieve[i] = true ; 

    //mark elements 0 and 1 to false 
    sieve[0] = false ; 
    sieve[1] = false ; 
    //Loop up to the square root of n 
    for(let i = 2 ; i <= Math.sqrt(n);i++){
        //mark the multiplicative of the current number as false 
        for(let j = 2 * i ; j <= n ; j += i){
            sieve[j] = false ; 

        }

    }

    //make an array of true elemets in the primes array 
    primes = [] ; 
    for(let i = 0 ; i < sieve.length ; i++)
        if(sieve[i])
            //push the index of the sieve
            primes.push(i);
    //return the primes 
    return primes ; 
}


console.log(sieveEratosthenes(20));