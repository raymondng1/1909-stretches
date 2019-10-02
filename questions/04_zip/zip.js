/*
write the zip function
zip([{x: 1}, {x: 2}]) => {x: 3}
zip([
  {x: 1, y: 2}, 
  {x: 2, z: 1},
  {z: 2, y: 1}]) => {x: 3, y: 3, z: 3}
*/

function zip(objs) {
  let newObj = {};
  let sumArray = []; //push and map the array

  for(let i = 0; i<objs.length;i++){
    let element = objs[i] //loop through the array
    for(let keys in element); //loop through the obj and look for the key values
    if(obj.hasOwnProperty(element)){
      sumArray.push(element);// find the key values 
    }
  }
  return newObj;
}

module.exports = { zip };
