function countWords(str) {
	let arr = str.split(" ")
	let count = 0;
	for(word in arr){
		count++
	}
	return count
}
