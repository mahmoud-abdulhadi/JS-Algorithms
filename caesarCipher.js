function caesar(str , key){

    //fix the key range 

    key = key % 26 ; 


    let lowerCaseString  = str.toLowerCase();


    //build the alphabet letters array 

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    //init cipher 

    let cipher = ''; 

    for(let i = 0 ; i < lowerCaseString.length;i++){
        //get the current letter 
        let currentCharacter = lowerCaseString[i];


        //skip spaces
        if(currentCharacter === ' '){
            cipher += currentCharacter ; 
            continue ; 
        }


        //get the index of the current letter in the alphabet  
        let currentIndex = alphabet.indexOf(currentCharacter);

        //get the new index by adding the key 
        let newIndex = currentIndex + key ; 

        //fix the new index range 
        if(newIndex > 25){

            newIndex -= 26 ; 
        }

         if(newIndex < 0 ){

            newIndex += 26 ; 
        }

        //append the character at the new index and fix the uppercase case 
        if(str[i] === str[i].toUpperCase()){

            cipher += alphabet[newIndex].toUpperCase();
        }else{

            cipher += alphabet[newIndex]; 
        }

    }

    //return the cipher 
    return cipher ; 
}

//Zoo Keeper , 2
//caesarCipher('Big Car',-16); //Lsq Mkb

//caesarCipher('Javascript',-900); //Tkfk cmbszd 

cipher = caesar('Java script',-900);

console.log(cipher);