

const k = [3,1,2,3,4,5,0,6,7,8,9,10];

const longestNumberIncrease = (arr) => {
    var max = 0;

    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(checkIncrease(arr,i,j)){
                max = Math.max(max,j-i+1);
            }
        }
    }
    return max;
}

const checkIncrease = (arr,start,end) => {
    var x = end - start + 1;
    var t = 0;

    for(let i = start; i < end; i++){
        if(arr[i] < arr[i+1]){
            t++;
        }
        if(t == x - 1){
            return true;
        }
    }
    return false;
}

//console.log(checkIncrease(k,1,5));
console.log(longestNumberIncrease(k));