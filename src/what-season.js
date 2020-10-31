const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if( date==null) return 'Unable to determine the time of year!';
  if ( Object.prototype.toString.call(date) != '[object Date]') throw new Error('THROWN');

  //if(date==fakeDate) return THROWN;
  let month=date.getMonth();
  switch(month){
    case(0): return 'winter';
    case(1): return 'winter';
    case(2): return 'spring';
    case(3): return 'spring';
    case(4): return 'spring';
    case(5): return 'summer';
    case(6): return 'summer';
    case(7): return 'summer';
    case(11): return 'winter';
    default: return 'autumn';

  }
};
