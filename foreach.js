let arr = [1,2,3,4,5]
arr.forEach((curVal) => console.log(curVal))

Array.prototype.myForeach = function(callback){
    if(typeof callback !== 'function'){
        throw new Error("callback function is not defined")
    }
    let arr = this;
    for(let i = 0; i<arr.length; i++){
        callback(arr[i], i, arr)
    }
}

arr.myForeach((curVal) => console.log('My foreach ' + curVal))