const repeater = (func, n) => {
  let arr = [];


  for(let i = 0; i < n;i++){
    if(typeof func === 'function'){
      arr.push(func())
      // use a recursive case to test if the inside value if function or not 
    }
  }
  return arr;
};

module.exports = { repeater };
