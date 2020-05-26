var subtractProductAndSum = function(n) {
    //split number into string arr
    let arr = n.toString().split("")
    let nums = []

    //turn string numbers into intergers
    for(let i = 0; i < arr.length; i++){
        nums.push(parseInt(arr[i]))
    }
    
    let count = nums[0]
    let product = nums[0]
    
     for(let j = 1; j < nums.length; j++){
        count += nums[j]
        product *= nums[j]
    }
    console.log(arr)
    console.log(count)
    console.log(product)
    console.log(nums)
    return product - count
};
