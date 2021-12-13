make card constructor(number)
  -number of goblins
  -probability of busting
    -will be the highest card && total is greater than 10
  -probability of them busting
    -will be the lowest card && the total is greater than 10
  -probability of winning
    -will be the highest card && the total is less than or equal to 10
  -probability of losing
    -will be the lowest card && the total is less than or equal to ten

make deck constructor(cardArray)
  -unplayed cards []
  -played cards []

player constructor(deck)
  -deck
  -isActivePlayer
