let arr = [1,2,3,4,5]

// apply the find()
let resultArr = arr.find((curVal, index, array) => {
    return curVal > 2;
})

console.log(resultArr)

// I create my own find()
Array.prototype.myOwnFind = function(callback){
    if(typeof callback !== "function"){
        throw Error("callback function is not define")
    }

     let arr = this;
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            return arr[i]
        }
    }
    return undefined;
}

// Now Apply my method
 let resultArr2 = arr.myOwnFind((curVal,index, array) => {
    return curVal < 1
})
console.log(resultArr2)