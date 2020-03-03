function sortByHeight(a) {
    let person = []
    let treesIndex = []

    for(let i = 0; i < a.length; i++){
        if(a[i] !== -1){
            person.push(a[i])
        }
        if(a[i] === -1){
            treesIndex.push(i)
        }
    }

    person.sort((a,b) => a - b)
   
    for(let j = 0; j < treesIndex.length; j++){
        person.splice(treesIndex[j], 0, a[treesIndex[j]])
    }
    console.log(treesIndex)
    console.log(person)
    return person
}
s