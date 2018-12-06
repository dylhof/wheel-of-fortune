// $(document).ready(function(){
// if (typeof module !== 'undefined') {
//   // const Player = require('lib/Player.js');
//   module.exports = Player;
// };

let playerOne;
let playerTwo;
let playerThree;  

let playerOneObj;

let submitButton = $('.submit-button');

$(submitButton).on('click', function(event){
  event.preventDefault();
  playerOne = $('#player1').val();
  playerTwo = $('#player2').val();
  playerThree = $('#player3').val();
  createPlayers();
  console.log(playerOne, playerTwo, playerThree);
})

function createPlayers() {
  playerOneObj = new Player(playerOne);
  let playerTwoObj = new Player(playerTwo);
  let playerThreeObj = new Player(playerThree);
}

function sayPlayer(event) {
  event.preventDefault();
  console.log(playerOne)
}

// })