const CustomError = require("../extensions/custom-error");


const chainMaker = {
  mass:[],
  getLength() {
    return this.mass.length;
    
  },
  addLink(value) {
    if(value===undefined){
      this.mass=[];
    }
   // if(value==''){
      //this.mass.push('( 0 )');
   // }
    this.mass.push('( '+value+' )');
    return this;
    
  },
  removeLink(position) {
    if(position<1 || position>this.mass.length){
      this.mass=[];
      throw new Error('THROWN');
    }
    this.mass.splice(position-1,1);
    return this;
  },
  reverseChain() {
     this.mass.reverse();
     return this;
  },
  finishChain() {
    let str=this.mass.join('~~');
    this.mass=[];
   return str;
  }
};

module.exports = chainMaker;


//throw new CustomError('Not implemented');
// remove line with error and write your code here