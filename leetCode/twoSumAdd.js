// You are given two non-empty linked lists representing two 
// non-negative integers. The digits are stored in reverse order,
//  and each of their nodes contains a single digit. Add the two 
//  numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, 
// except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Input: l1 = [0], l2 = [0]
// Output: [0]

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
// Explanation: 9999999 + 9999 = 10009998

const l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9];

const addTwoArr = (arr1,arr2) => {
    var t,t1 = 0,t2 = 0;
    for(let i = arr1.length - 1; i >= 0; i--){
        t1 = t1*10 + arr1[i];
    }
    for(let i = arr2.length - 1; i >= 0; i--){
        t2 = t2*10 + arr2[i];
    }

    t = t1+t2;

    var A = [],x;

    if(t == 0 ) return [0];
    while(t > 0){
        x = t % 10;
        A.push(x);
        t = parseInt(t/10);
    }
    return A;
}

console.log(addTwoArr(l1,l2));