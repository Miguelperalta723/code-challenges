function sockMerchant(n, ar) {
    console.log(n)
    console.log(ar)
    let count = 0
    let pairs = {}
    //create hash table of all items and quantities
    for(let i = 0; i < ar.length; i++){
        if(!pairs[ar[i]]){
            pairs[ar[i]] = 1
        }else{
            pairs[ar[i]] += 1
        }
    }
    console.log(pairs)
    //for each item in haste table
    for(let item in pairs){
        //whilw value is > 1 //subtract 2 and add one to count
        while(pairs[item] > 1){
            pairs[item] -= 2
            count+= 1
        }
    }
    console.log(pairs)
    console.log(count)
    return count
}