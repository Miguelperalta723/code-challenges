function getBudgets(arr) {
	let budget= 0;
	for(person of arr){
		budget += person.budget
	}
	return budget
}
