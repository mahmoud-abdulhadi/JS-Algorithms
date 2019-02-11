function mergeSort(array){
    //take in a single, unsorted array as a parameter 
    //split the array into two halves 

    //handle the base case when the array is composed of one or 0 elements 
    if(array.length < 2)
        return array ; 

    //get the index of the middle element 

    let middleIndex = Math.floor(array.length /2);  

    //extract the first half 

    let firstHalf = array.slice(0 , middleIndex );


    //extract the second half

    let secondHalf = array.slice(middleIndex);
    
    //merge the two halves with recutrsive cals

    return merge(mergeSort(firstHalf) , mergeSort(secondHalf));



}

function merge(array1 , array2){

    // takes in sorted arrays as parameters 
    //merges those sorted arrays into one sorted array 
    //return one sorted array 
    //prepare the result array 
    let merged = []; 

    //loop till one of the arrays is empty 
        while(array1.length && array2.length){
        //pull the minimum element from the two arrays
            let minElement = 0 ; 
            if(array1[0] < array2[0])
                minElement = array1.shift();
            else 
                minElement = array2.shift();
    
            merged.push(minElement); 
    }
    //concat the remaining elements in array1 to resutl if any 
    if(array1.length)   
        merged = merged.concat(array1); 

    //else if there is elements in array2 (i.e there is elements in array2 grater that array1) concat it to the end of results 
    else if(array2.length)
        merged = merged.concat(array2);

    return merged ; 
}


//[6000 , 34 , 203 , 3 , 764 , 200 , 984 , 198 , 764 ,1 , 9 ,1]
console.log(mergeSort([1000,-20,40,-30,16,-100,-101]));