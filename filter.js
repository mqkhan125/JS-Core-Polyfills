let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultArr = arr.filter((curVal, index, array) => {
  return curVal % 2 == 0;
});
console.log(resultArr);

// I create my own filter() method
Array.prototype.myOwnFilter = function(callback){
    if(typeof callback !== 'function'){
        throw Error("callback function is not define")
    }

    let filtedArr = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            filtedArr.push(arr[i]);
        }
    }
    return filtedArr
}
// check it
let resultArr2 = arr.myOwnFilter((curVal, index, array) => {
    return curVal % 2 == 0
})
console.log(resultArr2)