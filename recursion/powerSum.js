// Complete the powerSum function in the editor below. 
//It should return an integer that represents the number of 
//possible combinations.

// powerSum has the following parameter(s):

// X: the integer to sum to
// N: the integer power to raise numbers to


// Sample Input 0
// 10
// 2
// Sample Output 0
// 1
// explain: we need to find the number of ways that  can be represented as 
//the sum of squares of unique numbers.
// This is the only way  : 1/ 10 = 1^2 + 3^2


// Sample Input 1
// 100
// 2
// Sample Output 1
// 3
// explain: 1/ 10^2 
//          2/ (6^2 + 8^2) 
//          3/ (1^2 + 3^2 + 4^2 + 5^2 + 7^2)


// Sample Input 2
// 100
// 3
// Sample Output 2
// 1
// explain: 1/ 1^3 + 2^3 + 3^3 + 4^3


const x = 100, n = 2;

const powerSum = (X,N,num) => {

}


// int totnum(int X,int N,int num){
//     if(pow(num,N)<X)
//         return totnum(X,N,num+1)+totnum(X-pow(num,N),N,num+1);
//     else if(pow(num,N)==X)
//         return 1;
//     else
//         return 0;
// }

// int main() {
//     int X,N;
//     cin>>X>>N;
//     cout<<totnum(X,N,1);
//     return 0;
// }