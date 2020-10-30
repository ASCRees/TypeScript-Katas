//A grille cipher was a technique for encrypting plaintext by writing it onto a sheet of paper 
//through a pierced sheet. The earliest known use is from the mathematician Girolamo Cardano in 1550. 
//His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, 
//then later read. The written fragments of the plaintext could be further disguised by filling the gaps 
//between the fragments with benign words or letters.
//Grille("abcdef", 5)  => "df"
//* convert 5 to binary:
// 000101
//* overlay message and code:
//message : abcdef
//code    : 000101
//----------------
//result  : df
class TimeToGrille {
    encode(message, code) {
        let returnString = "Invalid code";
        let encoding = "";
        if (code > 0) {
            let encodingarr = [...code.toString(2).padStart(message.length, '0')];
            return returnString = [...message].map(function (singlechar, index) {
                if (encodingarr[index] === "1") {
                    return singlechar;
                }
            }).join("");
        }
        return returnString;
    }
}
let message = "The Verve Group";
let code = 4334533451;
let grille = new TimeToGrille();
console.log(grille.encode(message, code));
//# sourceMappingURL=time_to_grille.js.map