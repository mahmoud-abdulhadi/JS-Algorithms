function  binarySearch(list , key){

    let middleIndex  =  Math.floor(list.length / 2) ;
    
    let middleElement = list[middleIndex]; 


    //Base Case 
    if( middleElement === key) return true ; 

    else if(middleElement < key && list.length > 1){

        return binarySearch(list.splice(middleIndex , list.length), key); 
    }else if (middleElement > key && list.length > 1){

        return binarySearch(list.splice(0 , middleIndex) , key);
    }else {
        return false ; 
    }

}

let result = binarySearch([5,7,12,16,36,39,42,56,71] , 9 );

console.log(result);