var arr = [0,1]
function resetArray() {
    arr = [0, 1]; // Resets the state between tests
}
function addDigit(){
    arr.push(arr[arr.length-1]+ arr[arr.length-2])
    
}
 
function FibArray(length){
    
    if (length <= 0) return [];
    if (length === 1) return [0];
    if (arr.length === length) {
        return arr;
    }
    addDigit();
    return FibArray(length);

   

}

module.exports = { FibArray, resetArray };