const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let turns=2**disksNumber-1;
  let seconds=Math.floor(turns*3600/turnsSpeed);
  return {turns: turns, seconds: seconds};
};
