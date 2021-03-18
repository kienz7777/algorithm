
const x = [1,2,3,4,5];
const y = [1,2,3,4,5,6];
const z = [1,2,3,4,5,6,7];

for(let i = 0; i < x.length; i++){
    var A = [];
    for(let j = 0 ; j < y.length; j++){
        for(let k = 0 ; k < z.length; k++){
            A.push(x[i]);
            A.push(y[j]);
            A.push(z[k]);
            console.log(A);
            A = [];
        }
        
    }
}