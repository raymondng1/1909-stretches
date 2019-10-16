function groupBy(arr, attr) {
    let obj = {};

    let stringCount = arr.map(element => element.length).filter((element,index)=> arr.indexOf(element)===index).sort();
    
    for(let i =0; i<stringCount.length ;i++){
        obj[i]= stringCount;
        if( ){
            
        }
    }
    return obj;
}

module.exports = { groupBy };
