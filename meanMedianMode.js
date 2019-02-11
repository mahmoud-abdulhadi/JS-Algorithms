function mean(array){

    let sum = 0  ; 

    array.forEach(num => {
        
        sum += num ; 
    });

    let mean = sum / array.length ; 

    return mean ; 

}

//Function to find the median 
function median(array){

    //sort the array
    array.sort((a,b) => {return a - b}) ;
    
    

    let median = 0 ; 
    //if the array has odd length 
    if(array.length % 2 !== 0){
        // the median is the element at the middle index 
        let midIndex = array[math.floor(array.length / 2)];
        median = array[midIndex];
    }else { //else if the array has even length the emdian is the mean of the two middle elements 
        let mid1 = array[array.length / 2];

        let mid2 = array[(array.length / 2) - 1 ];

        median = (mid1 + mid2) / 2 ; 

    }

    
    return median ; 

}


//Find the Mod 
//The mod returns an array of the most frequent elements
//If all the numbers has the same frequency mod array is empty 

function mode(array){

    //initialize mode array 
    let modes = [] ; 

    //initialize Mode Object 

    let modeObject = {} ; 



    //loop through the array and construct object 
    //with each number and its frequency 
    array.forEach(num => {
        if(! modeObject[num])
            modeObject[num] = 0 ;

        modeObject[num]++ ; 

    });


    let maxFrequent = 0 ; 
    //loop through the object properties
    for(let num in modeObject){ 
        //if we find a number with high frequency we push it to mode 
        //and update the frequency 
        if(modeObject[num] > maxFrequent){
            modes = [num]; 
            maxFrequent = modeObject[num];

        }else if (maxFrequent === modeObject[num]){
                //if the frequency of the number is the same as max 
                // we push it to mode only 

                modes.push(num);
        }
    }
    if (modes.length === Object.keys(modeObject).length)
        modes = [] ; 

    return modes ; 
}


//function to find max in array 
function max(array){

    let maximum = array[0]; 

    for(let i = 0 ; i < array.length ; i++)
        {

            if(array[i] > maximum)
                maximum = array[i];
        }

    return maximum ; 
}

//function to find min in array 

function  min(array){

    let minimum = array[0]; 

    for(let i = 0 ; i < array.length ; i++){

        if(array[i] < minimum)
            minimum = array[i]; 
    }

    return minimum ; 
}

//TO DO define the range function 
function range(array){

    let maximum = max(array);

    let minimum = min(array) ; 

    return maximum - minimum ; 
}
//define a function the calls the above functions 
function statistics(array){

    return {

        'mean' : mean(array), 
        'median' :  median(array) , 
        'mode' : mode(array), 
        'range' : range(array)
    }
}

//[1,2,3,4,5,4,6,1]
//[9 , 10 , 23 , 10 , 23 , 9]

console.log(statistics([9 , 10 , 23 , 10 , 23 , 9])); 