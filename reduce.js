let arr = [1,2,3,4,5]
let resultArr = arr.reduce((acc, curVal, index, arr) => {
    return acc + curVal
})
console.log(resultArr)

// my own reduce()
Array.prototype.myOwnReduce = function(callback, init){
    if(typeof callback !== 'function'){
        throw Error("callback function is not defined")
    }
   
    let initailVal = init ? init : arr[0];
    let startIndex = init ? 0 : 1
    for(let i = startIndex; i < arr.length; i++){
       let results = callback(initailVal, arr[i], i, arr)
       initailVal = results
    }
    return initailVal
}
// check it
let resultArr2 = arr.myOwnReduce((preVal, nextVal) => {
    return preVal * nextVal
})
console.log(resultArr2)