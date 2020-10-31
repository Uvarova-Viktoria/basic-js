const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    function calc(arr){
      if (Array.isArray(arr)) return 1 + Math.max(...arr.map(t => calc(t)));
      
      else return 0;
    }
    return calc(arr);
  }
};