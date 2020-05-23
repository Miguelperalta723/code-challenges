var destCity = function(paths) {
    // console.log(paths)
    let stops = {}
    for(let i = 0; i < paths.length; i++){
        for(let j = 0; j < paths[i].length; j++){
            if(stops[paths[i][j]]){
                stops[paths[i][j]] += 1
            }else {
                stops[paths[i][j]] = 1
            }
        }
        
    }
    
    for(stop in stops){
        if(stops[stop] == 1){
            for(let k = 0; k < paths.length; k++){
                if(paths[k][1] == stop){
                    return stop
                }
            }
        }
    }
