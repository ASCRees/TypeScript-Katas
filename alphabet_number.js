// This function takes a string and return the position in the alphabet for each letter. It ignores anything
// that is not a letter from a to z
// So calling
//
//      numberise("abcd efg %hi^ jk* lmn (opq) rstuv wxyz.") 
//
// will return
//
//      1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
//
function numberise(sentence) {
    let returnstring = "";
    const regex = /[a-z]/g;
    // Split the sentence based upon a regex filter to only include letters a through z
    let sentenceArray = sentence.toLowerCase().match(regex);
    // Build and array of numbers that hold the number position in the alphabet for each letter within the sentence
    let numval = 
    // Pass each letter in the sentence into the function to get the letters position in the alphabet
    sentenceArray.map(function (singlechar) {
        // Get the ascii character code for the letter
        let alphanum = singlechar.charCodeAt(0);
        // Subtract 96 from the ascii code to get position in the alphabet
        // as we are working with the ascii values 97 thru to 122
        alphanum = alphanum - 96;
        return alphanum;
    });
    // Join the array to return a string of numbers                   
    returnstring = numval.join(" ");
    return returnstring;
}
// Now lets refactor the code above and make it a simplified arrow function
let numberisearrow = (sentence) => { return sentence.toLowerCase().match(/[a-z]/g).map((schar) => (schar.charCodeAt(0)) - 96).join(" "); };
console.log(numberise("abc1d efg %hi^ jk* lmn (opq) rstuv wxyZ."));
console.log(numberisearrow("ab3cd efg %hi^ jk* lmn (opq) rstuv Wxyz."));
//# sourceMappingURL=alphabet_number.js.map