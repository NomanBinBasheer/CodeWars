/* I am kind of new to coding so I'm not sure what is wrong with my code.

Property objMethod should be called by myFunction.

Can you fix the syntax so myFunction will be working again? Please check things like braces, commas, and letter case.

IMPORTANT: Returning just "string" is insufficient. We are required to use Object Literal Notation. */



//  My Solution

function myFunction() {
    var MyObject = {
      objProperty: "string",
      objMethod:  function() {
        return MyObject.objProperty;
          }
    }
    
    return MyObject
  };