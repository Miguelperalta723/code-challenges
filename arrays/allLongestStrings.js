function allLongestStrings(inputArray) {
    let stringLengths = []
    let currentMax = 0
    //find current max length
    for(let i = 0; i < inputArray.length; i++){
        // stringLengths.push([inputArray[i].length, inputArray[i]])
        if(inputArray[i].length > currentMax){
            currentMax = inputArray[i].length
        }
    }
    //push all with similar lengths to another array and return it
    for(let j = 0; j < inputArray.length; j++){
        if(inputArray[j].length == currentMax){
            stringLengths.push(inputArray[j])
        }
    }
    console.log(stringLengths)
    console.log(currentMax)
    return stringLengths
}