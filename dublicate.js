// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
	const arr = word.toLowerCase().split("");
 let str = "";
 const obj = {};
 for (key of arr) {
	 if (key in obj) {
		 obj[key] = ")";
	 } else {
		 obj[key] = "(";
	 }
 }
 for (key of arr) {
	 str += obj[key];
 }
 return str;
}
