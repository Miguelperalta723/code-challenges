//current solution in progress

function areSimilar(a, b) {
    // check if two arrays are similar
    // compare values in each array
    //if all values match continue and later return true
    //if values dont match, check if values match next value or prev
    //if they do swap and check if array match again
    //else return false
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            if(a[i] === b[i+1] || a[i] === b[b-1]){
                continue
            }else{
                return false 
            }
        }else{
            return true
        }
    }
}