function max_min_avg(arr){
    if (arr.length===0){
        result = "This array is empty"
        return result
    }
    max = min = sum =arr[0];
    result = "";
    for (i=1;i<arr.length;i++){
        if (max<arr[i]){
            max = arr[i];
        }
        if (min>arr[i]){
            min = arr[i];
        }
        sum+= arr[i];

    }
    avg = sum/arr.length;
    // The minimum is - 2, the maximum is 9, and the average is 3."
    result += "The minimum is" + String(min) + ", the maximum is" + String(max) +", and the average is "+String(avg)+".";
    return result
}
arr1=[];
console.log("arr1=",arr1);
console.log(max_min_avg(arr1));
arr2=[-1,3,4,-8,0];
console.log("arr2=", arr2);
console.log(max_min_avg(arr2));
arr3=[0,2,3,4,9,22,];
console.log("arr3=", arr3);
console.log(max_min_avg(arr3));

