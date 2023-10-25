function duplicateEncode(word){
       let splitted = word.toLowerCase().split('')
       let newArr = []
       
       for (let i = 0; i < splitted.length; i++){

        for (let j= i + 1; j < splitted.length; j++){
           if(splitted[i] === splitted[j] && !newArr.includes(splitted[i])){
             newArr.push(splitted[i])
           }
        }
       }
       return newArr.length
    }



    console.log(duplicateEncode("12333444456777771113398"))





// function duplicateEncode(word){
//     let lowerCaseWord = word.toLowerCase()
//      let splitted = lowerCaseWord.split('')
//       let countObj = {}
//       splitted.forEach(letter => {
//         countObj[letter] = countObj[letter] + 1 || 1
//       })
//     for (const key in countObj){
//       if (countObj[key] > 1){
//        lowerCaseWord = lowerCaseWord.replaceAll(key, (')'))
//       }
//       else if ((countObj[key] === 1)){
//         lowerCaseWord = lowerCaseWord.replaceAll(key, ('('))
//        }
//     }
  
//     return lowerCaseWord
//   }

//   console.log(duplicateEncode("(( @"))