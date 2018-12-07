let puzzles = [];
let players = [];  
let newRoundWheel;
let currentGame;
let submitButton = $('.submit-button');

$(submitButton).on('click', function(event){
  event.preventDefault();
  let playerOne = new Player($('#player1').val());
  let playerTwo = new Player($('#player2').val());
  let playerThree = new Player($('#player3').val());
  players = [playerOne, playerTwo, playerThree];
  selectPuzzles();
  currentGame = new Game(players, puzzles);
  currentGame.startNewRound();
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






