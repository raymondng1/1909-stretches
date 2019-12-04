class Calculator {
    constructor(value, ...args){
        this.value = value;
    }
    add (num){
        return this.value + num;
    }
    subtract (num){
        return this.value - num;
    }
    divide(num){
        return this.value/num
    }
    multiply(num){
        return this.value/num
    }
    clear(num){
        return  this.value = 0;
    }
}

module.exports = { Calculator };
