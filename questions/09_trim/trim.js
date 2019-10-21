const trim = (obj) => {
    let newObj = obj

    for(const key in obj){
        if(obj[key] === null || obj[key] === undefined){
            delete(obj[key])
        }
    }
    return newObj;
};

module.exports = { trim };
