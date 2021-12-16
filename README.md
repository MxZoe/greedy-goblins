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
  -score
  -isActivePlayer



  function displayActivePlayer(player1, player2){
  if(player1.active){
    $("#displayPlayer").html("It is " + player1.name + "'s turn.")
  } else{
    $("#displayPlayer").html("It is " + player2.name +"'s turn.")
  }

  function changeActivePlayer(player1, player2){
  if(player1.active){
    player1.active = false;
    player2.active = true;
  } else{
    player1.active = true;
    player2.active = false;
  }
}
}
