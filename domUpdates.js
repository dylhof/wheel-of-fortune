const domUpdates = {
  updatePuzzleBoard(currentAnswer) {
    // $('.puzzle-board').text(currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1))
    console.log('Current answer: ',currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1));
  },

  updatePuzzleCategory(currentPuzzleCategory){
    $('.puzzle-category').replaceWith(`<h3 class="puzzle-category">${currentPuzzleCategory}</h3>`);
  },

  updateSpinValue(spinValue) {
    $('.spin-value').text(spinValue);
  },

  updateRound(round) {
    $('.current-round').text(round);
  },

  updateCurrentPlayer(player) {
    // $('.current-player').text(player);
    console.log('Current Player: ',player);
  },

  updatePlayerInfo(players) {
    $('.player-info-toggle').remove();
    players.forEach((player, i) => {
      $('.player-info').append(`<div class="player-info-toggle"> <p class="player-name player-name-${i}"> ${player.playerName} </p><p class="round-score player${i}-score"> $${player.roundScore} </p> <p class="total-score"> Grand Total: $${player.totalScore} </p></div>`)
    })
  },

  updateRoundScore(i, currentScore) {
    $(`.player${i}-score`).text(`$${currentScore}`);
  },

  addPlayerTurnClass(currentplayer) {
    $(`.player-name-${currentplayer}`).addClass('player-turn-indication');
  },

  removePlayerTurnClass(currentPlayer) {
    $(`.player-name-${currentPlayer}`).removeClass('player-turn-indication');
  },

  showDelimiters(positionOnBoard) {
    $(`.letter-card-div-${positionOnBoard}`).children().removeClass('hidden');
    $(`.letter-card-div-${positionOnBoard}`).css({"background-color": "#27A067"});
  },

  showCorrectGuessLetter(letter) {
    $(`[data-value = ${letter}]`).removeClass('hidden');
  },

  resetPuzzleBoard() {
    $('.letter-card-div').removeClass('puzzle-card');
    $('.letter-card-div').empty();
  },

  addHiddenLetters(letter, row) {
    $(`.letter-card-div-${row}`).append(`<p class="hidden" data-value=${letter}>${letter}</p>`).addClass('puzzle-card');

  }

}