<<<<<<< HEAD
function groupBy(arr, attr) {}
=======
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
>>>>>>> 13dae6166a2cf460701a149495d193395173510c

module.exports = { groupBy };
