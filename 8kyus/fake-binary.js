function fakeBin(x){
    let newStr = ''
    for (let i = 0; i < x.length; i++){
      if(x[i] >= 5){
        newStr += '1'
      }
      else{
        newStr += '0'
      }
    }
    return newStr
  }