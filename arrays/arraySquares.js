var sortedSquares = function(A) {
    let squares = []
    for(num of A){
        squares.push(num * num )
    }
    return squares.sort((a,b) => a - b)
   
};
