function testJackpot(result) {
	let count = 0;
	let map = {}
		
	for(item of result){
		if(map[item]){
			map[item] += 1
		}else {
			map[item] = 1
			count += 1
		}
	}
	console.log(count)
	console.log(map)
	if(count > 1){
		return false
	}else {
		return true
	}
}
