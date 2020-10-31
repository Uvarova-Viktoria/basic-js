const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(arr)) throw new Error('THROWN');
  for(let i=0;i<arr.length;i++){
    if(arr[i]=='--discard-next'){
      if(i!=arr.length-1){
        arr.splice(i,i-1);
      }
      else arr.splice(i,i); 
    }
    if(arr[i]=='--discard-prev'){
      if(i!=0){
        arr.splice(i-1,i-1);
      }
      else arr.splice(0,1); 
    }
    if(arr[i]=='--double-next'){
      if(i!=arr.length-1){
        arr[i]=arr[i+1];
      }
      else arr.splice(i,i); 
    }
    if(arr[i]=='--double-prev'){
      if(i!=0){
        arr[i]=arr[i-1];
      }
      else arr.splice(0,1); 
    }
    
  }
  return arr;
};
