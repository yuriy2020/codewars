//https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

//Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.


//use recursion
function validParentheses(parens) {
  if (parens.length === 0) {
    return true;
  } else {
		let ind = parens.indexOf("()");
		if(ind!==-1){
			let arr = parens.split('')
		arr.splice(ind,2)
		parens =arr.join('')
		console.log('parens', parens)
		return validParentheses(parens)
		}else{
			return false
		}
	}
}

console.log(validParentheses("(())((())())())")); // true
console.log(validParentheses(")(()))")); //f

