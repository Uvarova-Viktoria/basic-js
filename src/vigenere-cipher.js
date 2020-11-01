const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
 /* constructor(mode = 'true') {
    this.mode = mode;
  }*/
  encrypt(message,key) {
    if ((message === undefined) || (key === undefined)) throw new Error('THROWN');
    else {
      let mode=true;
      let resault=[];
      message=message.toUpperCase();
      key=key.toUpperCase();
      while (key.length < message.length) { key += key; }
      for(let i=0;i<message.length;i++){
        let code=message.charCodeAt(i);
        if(code>=65 && code<=90){
          code-=65;
          resault+=String.fromCharCode(((code+key.charCodeAt(i)-65)%26)+65);
        }
        else resault+=message[i];
      }
      if(!this.mode) return resault.split('').reverse().join('');
      return resault;
    }
  }    
  decrypt(message,key) {
    if ((message === undefined) || (key === undefined)) throw new Error('THROWN');
    else {
      let resault=[];
      message=message.toUpperCase();
      key=key.toUpperCase();

      for(let i=0;i<message.length;i++){
        let code=message.charCodeAt(i);
        if(code>=65 && code<=91){
          code-=65;
          resault+=String.fromCharCode(((code+26+key.charCodeAt(i)-65)%26)+65);
        }
        else resault+=message[i];
      }
      return resault;
    }
  }
}

module.exports = VigenereCipheringMachine;
