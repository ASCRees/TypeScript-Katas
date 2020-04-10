interface IMorseCode {
	charval: string;
	morseval: string;
}

class ConvertToMorseCode {
	public MorseCodeTable: Array<IMorseCode> = Array(36).fill("");
	constructor() {
		this.initializeCodeTranslatorTable();
	}

	private initializeCodeTranslatorTable() {
		this.MorseCodeTable[0] = { charval: "A", morseval: ".-" };
		this.MorseCodeTable[1] = { charval: "B", morseval: "-..." };
		this.MorseCodeTable[2] = { charval: "C", morseval: "-.-." };
		this.MorseCodeTable[3] = { charval: "D", morseval: "-.." };
		this.MorseCodeTable[4] = { charval: "E", morseval: "." };
		this.MorseCodeTable[5] = { charval: "F", morseval: "..-." };
		this.MorseCodeTable[6] = { charval: "G", morseval: "--." };
		this.MorseCodeTable[7] = { charval: "H", morseval: "...." };
		this.MorseCodeTable[8] = { charval: "I", morseval: ".." };
		this.MorseCodeTable[9] = { charval: "J", morseval: ".---" };
		this.MorseCodeTable[10] = { charval: "K", morseval: "-.-" };
		this.MorseCodeTable[11] = { charval: "L", morseval: ".-.." };
		this.MorseCodeTable[12] = { charval: "M", morseval: "--" };
		this.MorseCodeTable[13] = { charval: "N", morseval: "-." };
		this.MorseCodeTable[14] = { charval: "O", morseval: "---" };
		this.MorseCodeTable[15] = { charval: "p", morseval: ".--." };
		this.MorseCodeTable[16] = { charval: "Q", morseval: "--.-" };
		this.MorseCodeTable[17] = { charval: "R", morseval: ".-." };
		this.MorseCodeTable[18] = { charval: "S", morseval: "..." };
		this.MorseCodeTable[19] = { charval: "T", morseval: "-" };
		this.MorseCodeTable[20] = { charval: "U", morseval: "..-" };
		this.MorseCodeTable[21] = { charval: "V", morseval: "...-" };
		this.MorseCodeTable[22] = { charval: "W", morseval: ".--" };
		this.MorseCodeTable[23] = { charval: "X", morseval: "-..-" };
		this.MorseCodeTable[24] = { charval: "Y", morseval: "-.--" };
		this.MorseCodeTable[25] = { charval: "Z", morseval: "--.." };
		this.MorseCodeTable[26] = { charval: "0", morseval: "-----" };
		this.MorseCodeTable[27] = { charval: "1", morseval: ".----" };
		this.MorseCodeTable[28] = { charval: "2", morseval: "..---" };
		this.MorseCodeTable[29] = { charval: "3", morseval: "...--" };
		this.MorseCodeTable[30] = { charval: "4", morseval: "....-" };
		this.MorseCodeTable[31] = { charval: "5", morseval: "....." };
		this.MorseCodeTable[32] = { charval: "6", morseval: "-...." };
		this.MorseCodeTable[33] = { charval: "7", morseval: "--..." };
		this.MorseCodeTable[34] = { charval: "8", morseval: "---.." };
		this.MorseCodeTable[35] = { charval: "9", morseval: "----." };

		this.MorseCodeTable[36] = { charval: ".", morseval: ".-.-.-" };
		this.MorseCodeTable[37] = { charval: ",", morseval: "--..--" };
		this.MorseCodeTable[38] = { charval: ":", morseval: "---..." };
		this.MorseCodeTable[39] = { charval: "?", morseval: "..--.." };
		this.MorseCodeTable[40] = { charval: "'", morseval: ".----." };
		this.MorseCodeTable[41] = { charval: "-", morseval: "-....-" };
		this.MorseCodeTable[42] = { charval: "(", morseval: "-.--.-" };
		this.MorseCodeTable[43] = { charval: ")", morseval: "-.--.-" };
		this.MorseCodeTable[44] = { charval: '"', morseval: ".-..-." };
		this.MorseCodeTable[45] = { charval: "@", morseval: ".--.-." };
		this.MorseCodeTable[45] = { charval: "=", morseval: "-...-" };
		this.MorseCodeTable[46] = { charval: " ", morseval: "/" };
	}

	private filterByChar(letter: string, key: string): string {
		if (key === "charval") {
			let filteredVal1: IMorseCode[] = this.MorseCodeTable.filter((term) => term.charval === letter);
			return filteredVal1.length > 0 ? filteredVal1[0].morseval : "";
		} else {
			let filteredVal2: IMorseCode[] = this.MorseCodeTable.filter((term) => term.morseval === letter);
			return filteredVal2.length > 0 ? filteredVal2[0].charval : "";
		}
	}

	public convertToMorseCode(conversionString: string): string {
		let encoded: string[] = conversionString
			.toUpperCase()
			.split("")
			.map((a) => {
				return this.filterByChar(a, "charval");
			});
		return encoded.join(" ");
	}

	public convertFromMorseCode(conversionString: string): string {
		let decoded: string[] = conversionString
			.toUpperCase()
			.split(" ")
			.map((a) => {
				return this.filterByChar(a, "morseval");
			});
		return decoded.join("");
	}
}

let morse = new ConvertToMorseCode();
let stringToConvert: string = "Broadsword Calling Danny Boy. BroadSword Calling Danny Boy. This is London calling.";
let morsecode: string = morse.convertToMorseCode(stringToConvert);
let english: string = morse.convertFromMorseCode(morsecode);

console.log("");
console.log(stringToConvert);
console.log("");
console.log(morsecode);
console.log("");
console.log(english);
console.log("");
