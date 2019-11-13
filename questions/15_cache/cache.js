// function cache() {}
const cache = (callBack) => {
    if(typeof callBack !== 'function'){
        throw `Input must be a function.`
    }
    return function func() {
        return callBack(...arguments)
    }
}

module.exports = { cache };
