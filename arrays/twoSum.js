var twoSum = function(nums, target) {
    console.log(nums)
    console.log(target)
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                if(i == j){
                    continue
                }else {
                    return [i,j]
                }
            }
        }
    }
};
