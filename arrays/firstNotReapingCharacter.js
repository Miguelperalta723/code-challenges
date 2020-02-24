function firstNotRepeatingCharacter(s) {
    //get string array
    //set up duplicates object
    let string = s.split("")
    let duplicates = {}
    //for each character if not in duplicates store in duplicates with a value of one
    //if it is add one to value
    for(let item of string){
        if(!duplicates[item]){
            duplicates[item] = 1
        }else {
            duplicates[item]+= 1
        }
    }
    //loop through the values and if its one meaning not repeating return it
    for(let item in duplicates){
        if(duplicates[item] == 1){
            return item
        }
    }
    //if all repeats return "_"
    return "_"
    console.log(duplicates)
}
