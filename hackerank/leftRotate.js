// input:    d = 4 ; arr = [1,2,3,4,5];
// output: [5,1,2,3,4]

//explain: [1,2,3,4,5] -> [2,3,4,5,1] -> [3,4,5,2,1] -> [4,5,1,2,3] -> [5,1,2,3,4]

const k = [1,2,3,4,5] , d = 4;

const leftRotate = (arr,d) => {
    var x;
    for(let i = 0; i < d; i++){
        x = arr.splice(0,1);
        arr = arr.concat(x);
    }
    return arr;
}

console.log(leftRotate(k,d));
