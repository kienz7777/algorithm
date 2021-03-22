// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0

const k = "dvdf";

const lengthOfLongestSubstring = (s) => {
    var count = 0, A = [],t = 0 , max = 0;

    if(s.length > 0){
        // A.push(s[0]);
        // count++;
        // if(count >= max){
        //     max = count;
        // }
        // for(let i = 1 ; i < s.length; i++){
        //     for(let j = 0 ; j < A.length; j++){
        //         t++;
        //         if(s[i] != A[j]){
        //             if(t == A.length ){
        //                 A.push(s[i]);
        //                 count++;
        //                 if(count >= max){
        //                     max = count;
        //                 }
        //                 t = 0;
        //                 break;
        //             }
                    
        //         }
        //         if(s[i] == A[j]){

        //             A.splice(0,j+1);
        //             A.push(s[i]);

        //             count = A.length;
        //             if(count >= max){
        //                 max = count;
        //             }

        //             break;
        //         }

        //     }
        //     t = 0;
        // }
        max = 1;
        for(let i = 0; i < s.length - 1; i++){
            for(let j = i + 1; j < s.length; j++){
                if(checkRepeat(s,i,j)){
                    max = Math.max(max,j-i+1);
                }
            }
        }
    }
    else return 0;

    return max;
}

const checkRepeat = (s,start,end) => {

    var hashTable = {};

    for(let i = start; i <= end; i++){
        if(hashTable[s[i]] == 1){
            return false;
        }
        hashTable[s[i]] = 1;
    }

    return true;
}

console.log(lengthOfLongestSubstring(k));

//console.log(checkRepeat(k,0,5));

