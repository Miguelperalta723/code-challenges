var replaceElements = function(arr) {
    console.log(arr)
    for(let i = 0; i < arr.length; i++){
        let current = arr[i+1]
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] > current){
                current = arr[j]
            }
        }
        arr[i] = current
    }
    arr.pop()
    arr.push(-1)
    return arr
};

//https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/
