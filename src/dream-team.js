const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(arr)){
      let mass=[];
      
      for(let i=0;i<arr.length;i++){
        if(typeof(arr[i]=='string' && typeof(arr[i]!==null))){
          arr[i] = arr[i].replace(/\s+/g, '');
          arr[i]=arr[i].toUpperCase();
        }
          
      }
      arr=arr.sort();
      let er=1;
      for(let i=0;i<arr.length;i++){
        if(typeof(arr[i][0]=='string')){
          mass+=(arr[i][0]);
        }
        else er=0;
      
      }
      if(er==1){
        return mass;
      }
      else return false;
  }
  else {
    return false;
  }
  
};
