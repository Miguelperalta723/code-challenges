function matrixElementsSum(matrix) {
    let last = matrix.length - 1
    let count = 0;
    let subtract = 0
    console.log(matrix)

    //loop through each array in the matrix
    for(let i = 0; i < matrix.length; i++){
        //for each value in the arrays
        for(let j = 0; j < matrix[i].length; j++){
            //if its a zero turn every following value into a zero
            if(matrix[i][j] == 0){
                for(let k =i; k<matrix.length; k++){
                    matrix[k][j] = 0;
                }
            }else{
                count+= matrix[i][j]
            }
        }
    }


    console.log(count)
    return count
}


//After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

//Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the values that don't appear below a 0).

// [[1,2,3,0],
//  [7,3,0,1],
//  [8,0,1,4]]