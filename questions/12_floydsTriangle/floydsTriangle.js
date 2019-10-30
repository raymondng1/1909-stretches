// Given a number of rows n, print out Floyd's Triangle
// Example:
//  input: n = 3
//  output:
//  1
//  23
//  456

const floydsTriangle = (num)=> {
//use regex to check the num;
// slet strings 
    let result = [];
    let str = 'Rows';

    if(num ===1) {
        str = 'oneRow'
    }
    if(num === 0){
        str = 'zeRow'
    }
    
    return str;
};

module.exports = { floydsTriangle };
