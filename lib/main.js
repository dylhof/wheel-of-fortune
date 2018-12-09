let puzzles = [];
let players = [];  
let newRoundWheel;
let currentGame;

$('.submit-button').on('click', function(event){
  event.preventDefault();
  let playerOne = new Player($('#player1').val());
  let playerTwo = new Player($('#player2').val());
  let playerThree = new Player($('#player3').val());
  players = [playerOne, playerTwo, playerThree];
  selectPuzzles();
  currentGame = new Game(players, puzzles);
  currentGame.startNewRound();
});

$('.vowel-button').on('click', function() {
  $('.vowel-board').toggle();
});

$('.vowel-div').on('click', event => {
  // Here we will pass in the text from the vowel button to a vowel-checker method on the game
  // currentGame.vowelCheck($(event.currentTarget).children($('.vowel-p')).text())
  console.log($(event.currentTarget).children($('.vowel-p')).text())
})

$('.spin-button').on('click', event => {
  newRoundWheel.spin()
  $('.consonant-board').toggle();
})

$('.consonant-div').on('click', event => {
  currentGame.checkLetterAnswer($(event.currentTarget).children($('.consonant-p')).text().toLowerCase());
  $('.consonant-board').toggle();
})

$('.submit-guess-button').on('click', event => {
  event.preventDefault();
  let guess = $('#puzzle-guess').val();
  currentGame.checkPlayerAnswer(guess);
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






