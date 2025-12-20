function telephoneCheck(str) {
  if(str.indexOf("(") == -1 && str.indexOf(")") > -1) {
    return false;
  }else if(str.indexOf("(") > -1 && str.indexOf(")") == -1) {
    return false;
  }else if(str.indexOf(")") == str.length-1) {
    return false;
  };
  
  if(str[0] =='-') {
    return false;
  }

  let countOfSymbol = (str.match(/-/g) || []).length;
  
  if(countOfSymbol > 2) {
    return false;
  };

  let strOfNum = str.replace(/-|\(|\)| /g, "")
  
  if(strOfNum.length == 10) {
    return true;
  }else if(strOfNum.length == 11 && strOfNum[0] == 1) {
    return true;
  }else{
    return false;
  };
}

telephoneCheck("(6054756961)");
