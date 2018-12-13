let puzzles = [];
let players = [];  
let currentGame;

$('.main-game').hide();
$('.winner-screen').hide();

$('.consonant-div').on('click', event => {
  currentGame.checkLetterAnswer($(event.currentTarget).children($('.consonant-p')).text().toLowerCase());
  $(event.currentTarget).addClass('guessed-letter');
  $('.consonant-board').addClass('hidden');
  $('.turn-option-div').removeClass('hidden')
});

$('.solve-button').on('click', () => {
  $('.turn-option-div').addClass('hidden');
  $('.solve-puzzle').removeClass('hidden');
});

$('.spin-button').on('click', event => {
  currentGame.newRoundWheel.spin();
  if (currentGame.newRoundWheel.currentSpin !== 'BANKRUPT' && currentGame.newRoundWheel.currentSpin !== 'LOSE A TURN') {
    $('.turn-option-div').addClass('hidden');
    $('.consonant-board').removeClass('hidden');
  } else if (currentGame.newRoundWheel.currentSpin === 'BANKRUPT') {
    currentGame.players[currentGame.currentPlayer].resetRoundScore();
    domUpdates.updateRoundScore(currentGame.currentPlayer, 0);
    currentGame.updateCurrentPlayer();
  } else {
    currentGame.updateCurrentPlayer();
  }
});

$('.submit-guess-button').on('click', event => { 
  event.preventDefault();
  $('.solve-puzzle').addClass('hidden');
  $('.turn-option-div').removeClass('hidden')
  let guess = $('#puzzle-guess').val();
  currentGame.checkPlayerAnswer(guess);
  $('.solve-puzzle').trigger('reset');
});

$('.submit-button').on('click', function(event) {
  event.preventDefault();
  players = [new Player($('#player1').val()), new Player($('#player2').val()), new Player($('#player3').val())];
  currentGame = new Game(players);
  currentGame.selectPuzzles();
  currentGame.startNewRound();
  $('.splash-screen').hide();
  $('.main-game').show();
});

$('.vowel-button').on('click', function() {
  $('.turn-option-div').addClass('hidden');
  $('.vowel-board').removeClass('hidden');
});

$('.vowel-div').on('click', event => {
  currentGame.checkVowelAnswer($(event.currentTarget).children($('.vowel-p')).text().toLowerCase());
  $('.vowel-board').addClass('hidden');
  $('.turn-option-div').removeClass('hidden')
  $(event.currentTarget).addClass('guessed-letter');
});

$('.quit-game').on('click', () => {
  $('.winner-screen').hide();
  currentGame = new Game();
  currentGame.selectPuzzles();
  currentGame.startNewRound();
  $('.splash-screen').show()
  $('.main-game').hide()
});