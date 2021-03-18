// flatten([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]

const k = [[[1, [1.1]], 2, 3], [4, 5]];

const getNestedArr = (arr) => {
    let A = [];

    arr.forEach(item => {
        if(Array.isArray(item)){
            //A.push(getNestedArr(item))
            A = A.concat(getNestedArr(item))
        }
        else{
            //A.push(item);
            A = A.concat(item)
        }
    });

    return A;
}

console.log(getNestedArr(k));