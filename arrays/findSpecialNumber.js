var findSpecialInteger = function(arr) {
   let map = {} 
   let quarter = arr.length / 4
   for(num of arr){
       if(map[num]){
           map[num] += 1
       }else {
           map[num] = 1
       }
   }
    
    for(nums in map){
        if(map[nums] > quarter){
            return nums
        }
    }
    console.log(map)
};
