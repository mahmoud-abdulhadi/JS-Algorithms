function bubbleSort(array){

    //loop array.length - 1 passes from end to 0 
    for(let i = array.length -1 ; i > 0 ; i--){

        for(let j = 0 ; j < i ; j++){

            if(array[j] > array[j + 1]){
                let temp = array[j] ; 
                array[j] = array[j + 1];
                array[j + 1] = temp ; 
            }


        }
    }

    return array ; 

}

console.log(bubbleSort([3 , -9 , -12 , -1 , 8]));