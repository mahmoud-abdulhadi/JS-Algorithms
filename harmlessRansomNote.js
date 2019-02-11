//maybe could be used to check if a piece of text is quoted from another source 
//Stealing ideas 
//stealing texts 

function harmlessRansomNote(noteText , magazineText){

    //Assumptions :
    //They are all lowercase letters

    //split the noteText to array of words 

    let noteArr = noteText.split(' ');

    //split the magazine text to array of words 
    let magazineArr = magazineText.split(' ');

    //build a hashmap containing the words and theri count in the magazine text 
    //This is the heavy operation in the function 

    let magazineObj = {};

    magazineArr.forEach(word => {
        //very famouse technique 
        if(! magazineObj[word])
            magazineObj[word] = 0 ; 


        magazineObj[word]++ ;

    });


    


    //loop through the words in the noteText 
    //if a word in note text is not present the magazine Text 
    //it fails to be extracted from that magazine 
    //if a word in the note text appears more that number of times
    // it apears in magazine text then it fails 

    let isPossibleNote = true  ; 

    noteArr.forEach(word => {

        if(magazineObj[word]){

            magazineObj[word]-- ; 

            if(magazineObj[word] < 0)
                isPossibleNote = false ; 


        }else {

            isPossibleNote = false; 

        }

    });


    return isPossibleNote ; 
}

console.log(harmlessRansomNote('this is a secret note from a secret admirer',
'purto rico is a place of great wonder and excitement it has many secret waterfal locations that i am an admirer of. you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort. a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots. this one of the best places i have ever visited'));