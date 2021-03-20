
"{(( ))]}"

const k = "{(([])[])[]]}"

console.log(k.length);

const stack = (str) =>{
    var S = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] == "(" || str[i] == "{" || str[i] == "["){
            S.push(str[i]);
        }
    
        else if (str[i] == "}"){
            if(S[S.length-1] == "{"){
                S.pop();
            }
            else return "NO";
        }
        else if (str[i] == "]"){
            if(S[S.length-1] == "["){
                S.pop();
            }
            else return "NO";
        }
        else if (str[i] == ")"){
            if(S[S.length-1] == "("){
                S.pop();
            }
            else return "NO";
        }
    }

    if(S.length == 0) return "YES";

    return "NO";
}

console.log(stack(k));