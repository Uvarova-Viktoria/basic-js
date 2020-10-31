const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  str=String(str);
    
  let repeatTimes=options.repeatTimes;
  let separator=options.separator || '+';
  let add=options.addition;
  let addRepeatTimes=options.additionRepeatTimes;
  let additionSeparator=options.additionSeparator;


  
  let arr=[];
  let arrEl=[];

  
  arrEl.push(str);
  for(let i=0;i<addRepeatTimes;i++){
      arrEl.push(add);
      arrEl.push(additionSeparator);
  }
  arrEl.pop();
 
  arrEl=arrEl.join('');
    
  //if(options.additions!==undefined){
    for(let i=0;i<repeatTimes;i++){
     arr.push(arrEl);
   }
 /*}
  else {
    for(let i=0;i<repeatTimes;i++){
     arr.push(str);
   }
  }*/
      
  
  return arr.join(separator);
};
  