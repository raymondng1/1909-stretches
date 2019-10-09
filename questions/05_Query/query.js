const items = [
  {
    id: 1,
    name: 'foo',
    price: 2,
  },
  {
    id: 3,
    name: 'bar',
    price: 4,
  },
  {
    id: 66,
    name: 'bazz',
    price: 4,
  },
];

// query(items, { name: 'foo' })
// returns [{
// id: 1,
//   name: 'foo',
//     price: 2,
//   }]

// query(items, { price: 4 });
// returns [
//   ({
//     id: 3,
//     name: 'bar',
//     price: 4,
//   },
//   {
//     id: 66,
//     name: 'bazz',
//     price: 4,
//   })
// ];

// query(items, { price: 4, name: 'bazz' })
// returns [{
//   id: 66,
//     name: 'bazz',
//       price: 4,
//   }]

// function query(arr, obj) {
//   let newArray = [];

//   return arr.filter(element=>{
//     obj.hasOwnProperty(elements[i])
//   })
// }

// module.exports = { query, items };
// const query = (arrOfObjects, filterObj) =>{
//   for(let i=0; i<arrOfObjects.length;i++){
//     const currentObject = arrOfObjects[i];


//     //user the filter object, and compare the keys and valeus in it, with current object.
//     // for(let key in filterObj){
//       const filterValue = filterObj[key];

//       if(currentObject[key]!== filterValue) cleanObj = false;
//     // }
//     if(clearnObj) filterObj.push(currentObject)
//   }
// }