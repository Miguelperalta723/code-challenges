var findNumbers = function(nums) {
    console.log(nums)
    let strArr = []
    let count = 0
    //turn each num into a string
    for(num of nums){
        strArr.push(num.toString())
    }
    //check if the length of num is even 
    for(n of strArr){
        if(n.length % 2 == 0){
            count += 1
        }
    }
    
    return count
};
