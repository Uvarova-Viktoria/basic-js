const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(numActivity) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
 /* if(numActivity===undefined ||numActivity===null || typeof(numActivity)!=='string'|| numActivity==''){
    return false;
  }*/
  if(typeof(numActivity)=='string') {
    numActivity = Number(numActivity);
    if(isNaN(numActivity) || numActivity=='' || numActivity<=0 || numActivity>15){
      return false;
    }
    else {
      
      let k = 0.693/HALF_LIFE_PERIOD;
      let t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
      return t;
    }

    
  }
  else{
    return false;
  }
  
  
};
