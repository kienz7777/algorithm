

const arr1 = [3,2,1,1,1] , arr2 = [4,3,2] , arr3 = [1,1,4,1];

const equalStacks = (h1, h2, h3) => {
    var stk1 = [], stk2 = [], stk3 = [];
    var lh1 = 0, lh2 = 0, lh3 = 0;

    for(let i = h1.length - 1; i >= 0; i--){
        lh1 = lh1 + h1[i];
        stk1.push(lh1);
    }
    for(let i = h2.length - 1; i >= 0; i--){
        lh2 = lh2 + h2[i];
        stk2.push(lh2);
    }
    for(let i = h3.length - 1; i >= 0; i--){
        lh3 = lh3 + h3[i];
        stk3.push(lh3);
    }

    while(true){
        if(stk1.length == 0 || stk2.length == 0 || stk3.length == 0){
            return 0;
        }

        var stk1_peek = stk1[stk1.length-1];
        var stk2_peek = stk2[stk2.length-1];
        var stk3_peek = stk3[stk3.length-1];

        if(stk1_peek == stk2_peek && stk2_peek == stk3_peek){
            return stk1_peek;
        }

        if(stk1_peek >= stk2_peek && stk1_peek >= stk3_peek){
            stk1.pop();
        }
        else if(stk2_peek >= stk1_peek && stk2_peek >= stk3_peek){
            stk2.pop();
        }
        else if(stk3_peek >= stk1_peek && stk3_peek >= stk2_peek){
            stk3.pop();
        }
    }

}

console.log(equalStacks(arr1,arr2,arr3));



