/*
SortOrder takes an array of objects, a key to be sorted on 
and a key for the return value. 
*/
// // function sortOrder(data, sortKey, value) {
// //     const { sortKey, value } = data;
// //     console.log(sortKey)

// }
const sortOrder = (data, sortKey, name ) => {
    let arr = data.map(values => {
        const {sortOrder , name } = values.sort()
    })
    return arr.sort();
}

//deconstruct to seperate the 'sortOrder' and use sort method 

module.exports = { sortOrder };
