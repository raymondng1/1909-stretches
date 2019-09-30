const sales = [
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 3,
  },
  {
    amount: 8,
    productId: 4,
  },
  {
    amount: 17,
    productId: 5,
  },
  {
    amount: 10,
    productId: 4,
  },
];
/*
productWhichMadeMostMoney returns an object with an id for that product and a total which totals all the amounts for that product.
*/

//write the productWhichMadeMostMoney function

function bestSales(sales) {
  let newObj = {};
  let totalAmount = 0; 
  
  sales.forEach(element => {
    if(element[productId] !== undefined){
      //search for the of the array ID and add the total
      totalAmount += element[amount];
      newObj = element[amount];
    }
  });
  return newObj;
}

module.exports = { bestSales, sales };
