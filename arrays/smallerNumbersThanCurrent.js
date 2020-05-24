var smallerNumbersThanCurrent = function(nums) {
    let results = [];
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j] < nums[i]){
                count+=1
            }
        }
        results.push(count)
        count = 0
    }
    return results;
};
