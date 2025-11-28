let arr = [1,2,3,4,5,6]
let resultArr = arr.some((curVal, index, array) => {
    return curVal > 9
})
console.log(resultArr)

// I create my own some() method
Array.prototype.myOwnSome = function(callback){
    if(typeof callback !== "function"){
        throw Error("callback function is not defined")
    }

     let arr = this;
    for(let i = 0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true;
        }
    }
    return false;
}
// check it
let resultArr2 = arr.myOwnSome((curVal, index, arr) => {
    return curVal > 13
})
console.log(resultArr2)