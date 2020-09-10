

def twoNumberSum(array, targetSum):
    # Write your code here.
    
	map = {}
	//for each num in array
  //if the targetsum minus current num 
  //you get what opp that adds to targetsum
  // if that is in hash map
  // then you found it return the pair
  //else add it to the map
	for num in array:
		if targetSum - num in map:
			return [targetSum - num, num]
		else:
			map[num] = True;
	return []
