function reverseArrayInPlace(arr){

    for(let i = 0 ; i < arr.length / 2 ; i++){

        let temp = arr[i] ; 
        arr[i] = arr[arr.length - 1 - i] ; 
        arr[arr.length - 1 - i] = temp ; 
    }

    return arr ; 
}

console.log(reverseArrayInPlace([2,4,6,8,10,12]));