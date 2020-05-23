var isPalindrome = function(x) {
    if(x < 0){
        return false
    }else {
        let newX = parseInt(x.toString().split("").reverse().join(""))
        if(x === newX){
            return true
        }else {
            return false
        }
    }
};
