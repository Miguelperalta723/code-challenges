function mostFrequent (a){
    let duplicates = {}
    let mostFrequent;
    let maxx = 0
    for(let item of a){
        if(!duplicates[item]){
            duplicates[item] = 1
        }else{
            duplicates[item] += 1
        }
    }

    for(let item in duplicates ){
        if (duplicates[item] > maxx){
            maxx = duplicates[item]
            mostFrequent = item
        }

    }

    console.log(duplicates)
    console.log(maxx)
    console.log(mostFrequent)
    // return mostFrequent;
}

// console.log(mostFrequent([1,2,3,3]))
// console.log(mostFrequent([1,2,3]))
console.log(mostFrequent([3,1,4,57,4]))

