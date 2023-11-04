// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"




//  My Solutions

function DNAStrand(dna){
      
      let toArr = dna.split('')
      
      let newArr = []
      
      for (let i = 0; i < toArr.length; i++){
        if(toArr[i] ===  'A'){
          newArr.push('T')
        }
        else if(toArr[i] ===  'T'){
          newArr.push('A')
        }
         else if(toArr[i] ===  'G'){
          newArr.push('C')
        }
        else if(toArr[i] ===  'C'){
          newArr.push('G')
        }
      }
     return  newArr.join('')
    }