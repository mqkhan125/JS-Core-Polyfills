let obj = {
    name : 'qasim'
}

function myFun(city){
    console.log(this.name, city)
}
// bind method data store karta hain varible per variable ko call karna hota hain;
let store = myFun.bind(obj, 'KPK')
store()

Function.prototype.yourBind = function(context,...args){
if(typeof this !== 'function') {
    throw Error('your bind must apply on function')
}
 context.myRef = this;
 return function(...otherArgs){
     context.myRef(...args,...otherArgs)
 }
}

