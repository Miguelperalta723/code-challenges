function getBudgets(arr) {
let total = 0;
	for(person of arr){
		total += person.budget
	}
	return total;
}
