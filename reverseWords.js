function reverseWords(string){

    //split the string into an array of words 

    let wordsArr = string.split(' ');

    //init the reversed words array 
    let reversedWordsArr = [] ; 

    //loop through each word in teh original string and reverse each word
    wordsArr.forEach(word => {
            //init reversedWord 
            let reversedWord = ''; 

            //loop through the original backwrod and appends its characters to reversedWords 
            for(let i = word.length - 1; i >= 0 ; i--){

                reversedWord += word[i];
            }


            //append the reversed words to the reversed Array 
            reversedWordsArr.push(reversedWord);
    });
    //return the reversed words string from the reversed array 

    return reversedWordsArr.join(' ');

}

console.log(reverseWords('Algorithms And DataStructures in JavaScript'));