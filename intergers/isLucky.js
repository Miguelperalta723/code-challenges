function isLucky(n) {
    let num =   n.toString().split("")
  
    let point = num.length/2

    let first = num.slice(0,point)
    let second = num.slice(point)

    let firstSum = 0
    let secondSum = 0
    console.log(first)
    console.log(second)
    for(let i = 0; i < first.length; i++){
        firstSum += parseInt(first[i])
        secondSum += parseInt(second[i]) 
    }
    
    if(firstSum === secondSum){
       return true
    } else {
        return false
    }
    
}

// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.