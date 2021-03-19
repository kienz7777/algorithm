// Given an array of integers nums and an integer target, return 
// indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 

/**** And you may not use the same element twice. ****/



// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].


const k = [2,7,11,15], x = 9;

const twoSum = (arr,target) => {
    for(let i  = 0 ; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [i,j];
            }
        }
    }
    return 0;
}

console.log(twoSum(k,x));
