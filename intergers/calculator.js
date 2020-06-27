function calculator(num1, operator, num2) {
	if(num2 == 0){
		return "Can't divide by 0!"
	}
	if(operator == "+"){
		return num1 + num2
	} else if(operator == "-"){
		return num1 - num2
	} else if(operator == "/"){
		return num1 / num2
	} else if(operator == "*"){
		return num1 * num2
	}
}
