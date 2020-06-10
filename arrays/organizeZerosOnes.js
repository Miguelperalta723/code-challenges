

const organize = (arr) => {
  let results = []
  for(num of arr){
    if(num === 1){
      results.push(num)
    }else {
      results.unshift(num)
    }
  }
  console.log(results)
}


let first = [1,0,1,0,1,0,1,0,1,0,1,0]
organize(first)
