function bubble_sort(arr){
    var i = arr.length - 1;//initial, the end pooint  
    run_times = 0;//recourd the run times
    while (i > 0) {
        run_times+=1;
        var pos = 0;//record does if swap happed 
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
                pos = j;//record the last swap postion
            }
        }
        i = pos;//prepare for next round
    }
    console.log("run_times is:",run_times);
    return arr;
}

arr=[0,1,2,3,4,5,6];
console.log(bubble_sort(arr));