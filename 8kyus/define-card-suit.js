/* You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades' */



//  My Solution


function defineSuit(card) {
    const suitSign = card.slice(-1);
    return suitSign === '♣' ? 'clubs'
        :  suitSign === '♦' ? 'diamonds'
        :  suitSign === '♥' ? 'hearts'
        :  'spades'
  } 