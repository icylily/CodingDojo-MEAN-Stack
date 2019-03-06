function braces_valid(str){
    if (str.length ===0){
        return false;
    }
    arr_braces=[];
    obj_braces={
        ")":"(",
        "}":"{",
        "]":"[",
        }
    for (var i = 0;i<str.length;i++){
        if (str[i] =="(" || str[[i]]=="{"||str[i]=="["){
            arr_braces.push(str[i]);
            console.log("arr_braces is:",arr_braces);
        }
        else if(str[i] in obj_braces){
            console.log("str[i] in obj_braces")
            if(arr_braces.length === 0){
                return false;
            }
            else {
                current_backe = arr_braces.pop();
                console.log("pop",current_backe);
                console.log("now arr_brackes is ",arr_braces)
                if (current_backe!=obj_braces[str[i]]){
                    return false
                }
                else{
                    continue;
                }
            }
        }
        else{
            continue;
        }
    }
    if (arr_braces.length === 0){
        return true;
    }
    else {
        return false;
    }
}

// str1="3+{4}+[[[]]";
// console.log("str is :",str1);
// console.log(braces_valid(str1));

str1 = "aaa{ererer[ererere]rerere(rerer((rerere)))}aaaa";
console.log("str is :", str1);
console.log(braces_valid(str1));