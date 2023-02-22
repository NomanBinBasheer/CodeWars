/* Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins! */



//  My Solution

function alphabetWar(fight){
    let splitted = fight.split('')
    let teamOneTotal = 0
    let teamTwoTotal = 0
    for (let i  = 0; i < fight.length; i++){
      if(fight[i] == 'w' ){
        teamOneTotal += 4
      }
      if(fight[i] == 'p' ){
        teamOneTotal += 3
      }
      if(fight[i] == 'b' ){
        teamOneTotal += 2
      }
      if(fight[i] == 's' ){
        teamOneTotal += 1
      }
       if(fight[i] == 'm' ){
        teamTwoTotal += 4
      }
       if(fight[i] == 'q' ){
        teamTwoTotal += 3
      }
      if(fight[i] == 'd' ){
        teamTwoTotal += 2
      }
      if(fight[i] == 'z' ){
        teamTwoTotal += 1
      } 
    } 
   return teamOneTotal > teamTwoTotal ? "Left side wins!" 
         : teamOneTotal < teamTwoTotal ? "Right side wins!"
         : "Let's fight again!"
 }