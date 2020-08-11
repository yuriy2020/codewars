function scramble(str1, str2) {
	for (let i = 0; i < str2.length; i++){
		let idx = str1.indexOf(str2[i])
		if (idx !== -1) {
			str1 = str1.slice(0, idx) + str1.slice(idx + 1)
		} else {
			return false
		}
	}
	return true
}

console.log(scramble('cedewaraaossoqqyt', 'codewars'))
 
console.log(scramble('jscripts','javascript'))