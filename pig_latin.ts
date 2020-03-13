// Output a string in pig latin.
// Take the first letter of each word of the string and put it on the end then add "ay"
// So "Hello" would become "elloHay"

let convertToPigLatin = (str: string): string =>
	str
		.split(" ")
		.map(word => {
			let wordwithoutfirstletter: string = word.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "");
			let endchar: string = word.length > wordwithoutfirstletter.length ? word.substring(word.length - 1) : "";
			return wordwithoutfirstletter.substring(1) + word.charAt(0) + "ay" + endchar;
		})
		.join(" ");

let convertFromPigLatin = (str: string): string =>
	str
		.split(" ")
		.map(word => {
			let wordwithoutfirstletter: string = word.replace(/[.,\/#!$?%\^&\*;:{}=\-_`~()]/g, "");
			let endchar: string = word.length > wordwithoutfirstletter.length ? word.substring(word.length - 1) : "";
			wordwithoutfirstletter = wordwithoutfirstletter.substring(0, wordwithoutfirstletter.length - 2);
			let firstLetterFromEndOfString: string = wordwithoutfirstletter.substring(wordwithoutfirstletter.length - 1);
			return firstLetterFromEndOfString + wordwithoutfirstletter.substring(0, wordwithoutfirstletter.length - 1) + endchar;
		})
		.join(" ");

let conversionStr = "Hello there. Don't press any key. How are you? This was written in Typescript and compiles to Javascript.";
let englishToPigLatin = convertToPigLatin(conversionStr);
let pigLatinToEnglish = convertFromPigLatin(englishToPigLatin);

console.log("");
console.log(conversionStr);
console.log("");
console.log(englishToPigLatin);
console.log("");
console.log(pigLatinToEnglish);
console.log("");
