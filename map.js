let arr = [1,2,3,4,5,6,7,8,9,10];
let resultArr = arr.map((curVal, index, array) => {
    return curVal * 2
})
console.log(resultArr)

// I create my own map() method
Array.prototype.myOwnMap = function(callback){
    if(typeof callback !== 'function'){
        throw Error('callback function is not define')
    }

    let updatedArr = [];
    for(let i = 0; i < arr.length; i++){
        updatedArr.push(callback(arr[i], i, arr))
    }
    return updatedArr;
}
// check it
let resultArr2 = arr.myOwnMap((curVal, index, array)=> {
    return curVal * 2
})
console.log(resultArr2)

