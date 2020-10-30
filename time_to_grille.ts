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
	public encode(message: String, code: number): string {

        let returnString:string = "Invalid code";

        let encoding:string = "";
        if (code > 0)
        {
           let encodingarr :Array<string> = [...code.toString(2).padStart(message.length, '0')];
 
           return returnString = [...message].map(function (singlechar,index)
            { 
                if (encodingarr[index]==="1")
                {
                    return singlechar;
                }
            }).join("");
        }
    
		return returnString;
	}
}

let message:string = "The Verve Group" ;
let code:number = 4334533451 ;

let grille = new TimeToGrille();

console.log(grille.encode(message,code));


