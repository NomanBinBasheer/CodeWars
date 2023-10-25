function digPow(n, p){
  let splitted = n.toString().split('')
  let newArr = []
  
  for(let i = 0; i < splitted.length; i++){
    i === 0 ? newArr.push(Math.pow(splitted[i], p)) : newArr.push(Math.pow(splitted[i], p+i))
  }

  let outcome =  newArr.reduce((a, b) => a + b)
  return Number.isInteger(outcome / n) ? outcome / n : -1 
}

console.log(digPow(92 , 1));