/*Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.*/


//  My Solution

function correct(string){
    for (let i = 0; i < string.length; i++){
      if (string.includes('5')){
     string = string.replace('5', 'S')
    }
    else if(string.includes('0')){
      string = string.replace('0', 'O')
    }
      else if(string.includes('1')){
      string = string.replace('1', 'I')
    }
      }
    return string
  }