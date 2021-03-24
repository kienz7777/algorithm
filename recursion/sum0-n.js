

const sum = (n) => {
    if(n >= 1){
        return n + sum(n-1);
    }
    return n;
}

console.log(sum(7));    //28 = 7+6+5+4+3+2+1+0