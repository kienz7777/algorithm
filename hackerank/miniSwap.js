// You are given an unordered array consisting of consecutive 
// integers  [1, 2, 3, ..., n] . You are allowed to swap any two 
// elements. Find the minimum number of swaps required to sort 
// the array in ascending order.

// Example
// arr = [7,1,3,2,4,5,6]

// Perform the following steps:

// i   arr                     swap (indices)
// 0   [7, 1, 3, 2, 4, 5, 6]   swap (0,3)
// 1   [2, 1, 3, 7, 4, 5, 6]   swap (0,1)
// 2   [1, 2, 3, 7, 4, 5, 6]   swap (3,4)
// 3   [1, 2, 3, 4, 7, 5, 6]   swap (4,5)
// 4   [1, 2, 3, 4, 5, 7, 6]   swap (5,6)
// 5   [1, 2, 3, 4, 5, 6, 7]

const k = [2, 31, 1, 38, 29, 5, 44 ,6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27 ,14 ,33 ,50, 21 ,46 ,23 ,15 ,26, 8 ,47 ,40 ,3 ,32 ,22 ,34 ,42 ,16 ,41 ,24, 10, 4, 28 ,36 ,30 ,37, 35, 20 ,17 ,45 ,43, 25 ,19];

const miniSwap = (arr) => {
    var dem = 0;

    for(let i = 0; i < arr.length; i++){
        while(arr[i] != i+1){
            let t = arr[i] - 1;
            //swap
            let temp = arr[i];
            arr[i] = arr[t];
            arr[t] = temp; 

            dem++;
        }
    }
    return dem;
}


console.log(miniSwap(k));