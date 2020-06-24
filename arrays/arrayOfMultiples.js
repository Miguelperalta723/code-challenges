function arrayOfMultiples (num, length) {
	let result = []
	for(let i = 1; i <= length; i++){
		result.push(num * i)
	}
	return result
}
