function firstDuplicate(a) {
    //find duplicates
    //isolate duplicates
    //compare index values
    //return lesser one
    console.log(a)
    //set up object to store values
    let duplicates = {}
    for(let item of a){
        //for each item in array if its not it duplicates then store with a value of one
        //if it is in the object then return item its the first duplicate
        if(!duplicates[item]){
            duplicates[item] = 1
        }else if(duplicates[item]){
            return item
        }
    }
    //if there are no duplicates return -1
    for(let item in duplicates){
        if(duplicates[item] < 2){
            return -1
        }
    }
}
