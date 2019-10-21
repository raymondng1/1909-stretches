// Given two strings check if they are anagrams of each other
// Return a boolean

const checkAnagrams = (str1, str2) => {
  let str2Arr = str2.split('');
  let result = false;

  for(let i = 0; str1.length; i++){
    if(str2Arr.indexOf(str1[i])>0){
      result = true;
    }
  }
  return result;
};

module.exports = { checkAnagrams };
