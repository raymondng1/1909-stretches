function times(num) {
    return function func (num2){
        return num * num2;
    }
    if(typeof num !== 'number'){
        throw ('Numbers only!')
    }
}

module.exports = { times };
