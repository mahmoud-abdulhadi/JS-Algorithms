
function isPalindrome(string){

    //convert the string to lower case 
    let lowerString = string.toLowerCase();


    
    
    //convert the string to array of characters 

    let charactersArr = lowerString.split('');

   
    //create a clean version of the characters array 
    //that contains only letters 

    const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

    
    let lettersArray = []; 

    charactersArr.forEach(character => {

            if(alpha.indexOf(character) > -1)
                lettersArray.push(character);

    });

    //check if the string composed by array is equal to teh string composed 
    // by the reversed array 

    /**
     * The meat of the function 
     */
    if(lettersArray.join('') === lettersArray.reverse().join(''))
        return true; 
    else 
        return false ; 


}

//test cases
//1 - race car 
// Madam I'm Adam 
//noon
//moon
//dad
//mom

console.log(isPalindrome('Race Car'));