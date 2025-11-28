let arr = [1,2,3, "qasim", "sohail"]
let resultArr = arr.includes(3)
console.log(resultArr)

Array.prototype.myOwnInclude = function(param){
    if(param === undefined){
        throw Error('param is not defined')
    }
     let arr = this;
    for(let i = 0; i<arr.length; i++){
        if(param === arr[i] || (Number.isNaN(param) && Number.isNaN(arr[i]))){
          return true;
        }
    }
    return false
}

// check it
let resultArr2 = arr.myOwnInclude(3)
console.log(resultArr2)