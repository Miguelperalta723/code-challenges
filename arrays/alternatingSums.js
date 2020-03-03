function alternatingSums(a) {
    let teamOne = 0
    let teamTwo = 0
    for(let i = 0; i < a.length; i++){
        // if(i === 0){
        //     teamOne += a[0]
        // }

        // if(i === 1){
        //     teamTwo+=a[1]
        // }

        if(i % 2 == 0){
            teamOne+=a[i]
        }else{
            teamTwo+=a[i]
        }
    }
    console.log(teamOne)
    console.log(teamTwo)
    return [teamOne,teamTwo]
}
