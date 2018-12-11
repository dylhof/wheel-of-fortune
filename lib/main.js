let puzzles = [];
let players = [];  
let newRoundWheel;
let currentGame;

$('.main-game').hide()


$('.submit-button').on('click', function(event){
  event.preventDefault();
  let playerOne = new Player($('#player1').val());
  let playerTwo = new Player($('#player2').val());
  let playerThree = new Player($('#player3').val());
  players = [playerOne, playerTwo, playerThree];
  selectPuzzles();
  currentGame = new Game(players, puzzles);
  currentGame.startNewRound();
  $('.splash-screen').hide()
  $('.main-game').show()
});

$('.vowel-button').on('click', function() {
  $('.turn-option-div').addClass('hidden');
  $('.vowel-board').removeClass('hidden');
});

$('.vowel-div').on('click', event => {
  currentGame.checkLetterAnswer($(event.currentTarget).children($('.vowel-p')).text().toLowerCase());
  $('.vowel-board').addClass('hidden');
  $('.turn-option-div').removeClass('hidden')
})

$('.spin-button').on('click', event => {
  newRoundWheel.spin()
  $('.turn-option-div').addClass('hidden');
  $('.consonant-board').removeClass('hidden');
})

$('.consonant-div').on('click', event => {
  currentGame.checkLetterAnswer($(event.currentTarget).children($('.consonant-p')).text().toLowerCase());
  $('.consonant-board').addClass('hidden');
  $('.turn-option-div').removeClass('hidden')
})

$('.submit-guess-button').on('click', event => { 
  event.preventDefault();
  $('.solve-puzzle').addClass('hidden');
  $('.turn-option-div').removeClass('hidden')
  let guess = $('#puzzle-guess').val();
  currentGame.checkPlayerAnswer(guess);
})

$('.solve-button').on('click', event => {
  $('.turn-option-div').addClass('hidden');
  $('.solve-puzzle').removeClass('hidden');
})

function selectPuzzles() {
  let num;
  for(let i = 0; i < 5; i++) {
    if (puzzles.length === 0){
      num = Math.floor(Math.random() * 24)
      puzzles.push(data.puzzles.one_word_answers.puzzle_bank[num])
    } else if (puzzles.length === 1){
      num = Math.floor(Math.random() * 24)
      puzzles.push(data.puzzles.two_word_answers.puzzle_bank[num])
    } else if (puzzles.length === 2){
      num = Math.floor(Math.random() * 24)
      puzzles.push(data.puzzles.three_word_answers.puzzle_bank[num])
    } else if (puzzles.length === 3){
      num = Math.floor(Math.random() * 24)
      puzzles.push(data.puzzles.four_word_answers.puzzle_bank[num])
    } else if (puzzles.length === 4){
      num = Math.floor(Math.random() * 24)
      puzzles.push(data.puzzles.two_word_answers.puzzle_bank[num])
    }
  }  
}
