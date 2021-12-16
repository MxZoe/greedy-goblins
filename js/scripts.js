//Business logic for Card
function Card(number){
  this.number = number;
  this.bust = 0;
  this.theyBust = 0;
  this.win = 0;
  this.lose = 0;
}

//Business logic for Deck
function Deck(cards){
  this.all = cards;
  
}


//Business logic for Player
function Player(name, deck){
  this.name = name;
  this.deck = deck;
  this.score = 0;
  this.cardToPlay = {};
  this.played = [];
}


//Business logic
function checkBust(player1, player2){
  if((player1.cardToPlay.number + player2.cardToPlay.number) > 10){
    return true;
  } else{
    return false;
  }
}

function checkHighest(player1, player2){
  if(player1.cardToPlay.number > player2.cardToPlay.number){
    return player1;
  } else if(player1.cardToPlay.number < player2.cardToPlay.number){
    return player2;
  } else{
    return false;
  }
}

function getRoundResult(player1, player2){
  const highestPlayer = checkHighest(player1, player2);
  const bust = checkBust(player1, player2);
  if(highestPlayer === false){
    return "It's a tie! No one wins this round."
  }
  if(bust){
    highestPlayer.name === player1.name ? player1.score-- : player2.score--;
    return highestPlayer.name === player1.name ? player2 : player1;
  } else{
    highestPlayer.name === player1.name ? player1.score++ : player2.score++;
    return highestPlayer.name === player1.name ? player1 : player2;
  };
}

function makeCards(){
  const cardArray = [];
  for(let i=1; i < 10; i++){
    let currentCard = new Card(i);
    cardArray.push(currentCard);
  }
  return cardArray;
}

function getWinner(player1, player2){
  if(player1.score > player2.score){
    return player1;
  } else{
    return player2;
  }
}

function computerChoice(computer){
  let alreadyChosen = false;
  let playedCards = computer.played;
  //let arrayIndexes = [0, 1, 2, 3, 4, 5 ,6, 7, 8]
  let cardNumber = Math.round((Math.random()*8))
  if(playedCards.includes(computer.deck.all[cardNumber])){
    alreadyChosen = true;
  } 
  while(alreadyChosen){
    cardNumber = Math.round((Math.random()*8))
    if(computer.played.includes(computer.deck.all[cardNumber])){
      alreadyChosen = true;
      continue;
    } else{
      alreadyChosen = false;
      computer.cardToPlay = computer.deck.all[cardNumber];
      computer.played.push(computer.cardToPlay);
      return computer;
    }
  }
  computer.cardToPlay = computer.deck.all[cardNumber];
  computer.played.push(computer.cardToPlay);
  return computer;
}

//UI logic
function displayScore(player1, player2){
    $("#displayScore1").html(player1.name + "'s score is: " + player1.score);
    $("#displayScore2").html(player2.name + "'s score is: " + player2.score);
}

function displayCards(player1, player2){
  $("#player1Card").html(player1.cardToPlay.number);
  $("#player2Card").html(player2.cardToPlay.number);
}

function displayRoundResult(player1, player2){
  let winner = getRoundResult(player1, player2);
  let bust = checkBust(player1, player2);
  if(typeof winner === "string"){
    $("#result").html(winner);
  } else{
    if(bust){
      $("#result").html("CAVE IN!" + winner.name + " is to blame!");
    } else{
      $("#result").html("The winner is " + winner.name + "!"); 
    }
  }
}

function displayWinner(player1, player2, counter){
  if(counter > 8){
    let winner = getWinner(player1, player2, counter)
    alert(winner.name + " is the winner with a score of " + winner.score);
  }
}

function displayBundle(player1, player2){
  displayCards(player1, player2);
  displayRoundResult(player1, player2);
  displayScore(player1, player2);
}
$(document).ready(function(){
  let cardArray = makeCards();
  const deck1 = new Deck (cardArray);
  const player1 = new Player("player one", deck1);
  const computer = new Player("the computer", deck1);
  let counter = 0;

  

  $("#card1").on("click", function(){
    $('#card1').attr('disabled','disabled');
    let cardValue = $("#card1").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });
  
  $("#card2").on("click", function(){
    $('#card2').attr('disabled','disabled');
    let cardValue = $("#card2").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });

  $("#card3").on("click", function(){
    $('#card3').attr('disabled','disabled');
    let cardValue = $("#card3").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });

  $("#card4").on("click", function(){
    $('#card4').attr('disabled','disabled');
    let cardValue = $("#card4").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });

  $("#card5").on("click", function(){
    $('#card5').attr('disabled','disabled');
    let cardValue = $("#card5").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });

  $("#card6").on("click", function(){
    $('#card6').attr('disabled','disabled');
    let cardValue = $("#card6").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, compputer, counter);
  });

  $("#card7").on("click", function(){
    $('#card7').attr('disabled','disabled');
    let cardValue = $("#card7").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });

  $("#card8").on("click", function(){
    $('#card8').attr('disabled','disabled');
    let cardValue = $("#card8").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });

  $("#card9").on("click", function(){
    $('#card9').attr('disabled','disabled');
    let cardValue = $("#card9").val();
    player1.cardToPlay = player1.deck.all[cardValue];
    player1.played.push(player1.cardToPlay);
    computerChoice(computer);
    displayBundle(player1, computer);
    counter++;
    displayWinner(player1, computer, counter);
  });
});