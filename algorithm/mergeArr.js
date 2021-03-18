// Cho các mảng (số lượng mảng và số lượng phần tử trong các mảng là tùy ý) 
// [A1, A2, A3, … Ax] 
// [B1, B2, B3, … By] 
// [C1, C2, C3, … Cz] ………………… 
// Viết hàm  tổ hợp các phần tử của các mảng trên để được kết quả:
// [A1, B1, C1],[A1, B1, C2] … [A1, B1, Cz] 
// [A1, B2, C1], [A1, B2, C2] … [A1, B2, Cz] …. 
// [Ax, By, C1], [Ax, By, C2] … [Ax, By, Cz].


const x = [1,2,3,4,5];
const y = [1,2,3,4,5,6];
const z = [1,2,3,4,5,6,7];

const merge = (...arr) =>{
    // let t = arr[0].length;
    // arr.forEach(x=> {
    //     if(x.length > t){
    //         t = x.length;
    //     }
    // })
    // //console.log(arr[1]);
    // return t;

    let t = 0;
    arr.forEach(x => t++);  // lấy số mảng
    var A = [];
    var d = 0;
    for(let i = 0; i < t; i++){
        for(let j = 0 ; j < t; j++){

            if(d == t){
                if(j == t -1){
                    let z = 1;
                    A.push(arr[j][z]);
                    z++;
                }
                else
                    A.push(arr[j][0])
            }
            
            else{
                A.push(arr[j][i]);
                if(d < t){
                    d++;
                }
            }
    
        }
        j = 0;
        //i = 0;
        console.log(A);
        A = [];
    }
}

(merge(x,y,z));



// var permArr = [],usedChars = [];

// function permute(input) {
//     var i, ch;
//     for (i = 0; i < input.length; i++) {
//         ch = input.splice(i, 1)[0];
//         usedChars.push(ch);
//         if (input.length == 0) {
//             permArr.push(usedChars.slice());
//         }
//         permute(input);
//         input.splice(i, 0, ch);
//         usedChars.pop();
//     }
//     return permArr
// };
// console.log((permute([5, 3, 7, 1])));