function mergesort(arr){
    var count = 0
    for(i=0; i<arr.length; i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
            count++
        }
    }

    if(count == 0){
        return arr
    }
    return mergesort(arr)
}

module.exports ={mergesort}