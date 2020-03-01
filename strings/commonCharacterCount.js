function commonCharacterCount(s1, s2) {
    let count = 0;
    const s2Array = s2.split("");
    //We can convert the second input string to an array, then the next step        is to iterate over the first input string and find a match in the second        input string's character array.

    //If a match is found, increment the counter and remove that character          from the second input string's character array so that it is not                considered in the next match:
    for(str of s1){

        let idx = s2Array.findIndex(s => s === str);
        if(idx >= 0){
        count++;
        s2Array.splice(idx, 1);

        }

    }

  return count;

}
