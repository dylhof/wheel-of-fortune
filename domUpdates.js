const domUpdates = {

  addHiddenLetters(letter, row) {
    $(`.letter-card-div-${row}`).append(`<p class="hidden" data-value=${letter}>${letter}</p>`).addClass('puzzle-card');
  },

  addPlayerTurnClass(currentplayer) {
    $(`.player-name-${currentplayer}`).addClass('player-turn-indication');
  },

  displayWinnerScreen(winnerName) {
    $('.main-game').hide();
    $('.winner-screen').show();
    $('.winner-name').text(`${winnerName} is the winner!`);
  },

  removePlayerTurnClass(currentPlayer) {
    $(`.player-name-${currentPlayer}`).removeClass('player-turn-indication');
  },

  resetPuzzleBoard() {
    $('.letter-card-div').removeClass('puzzle-card');
    $('.letter-card-div').empty();
  },

  showCorrectGuessLetter(letter) {
    $(`[data-value = ${letter}]`).removeClass('hidden');
  },

  showDelimiters(positionOnBoard) {
    $(`.letter-card-div-${positionOnBoard}`).children().removeClass('hidden');
    $(`.letter-card-div-${positionOnBoard}`).css({"background-color": "#27A067"});
  },

  showNewRoundInfo(currentRound, players, currentPlayer) {
    domUpdates.resetPuzzleBoard();
    domUpdates.updateRound(currentRound);
    domUpdates.updatePlayerInfo(players);
    domUpdates.addPlayerTurnClass(currentPlayer);
  },

  updatePlayerInfo(players) {
    $('.player-info-toggle').remove();
    players.forEach((player, i) => {
      $('.player-info').append(`<div class="player-info-toggle"> <p class="player-name player-name-${i}"> ${player.playerName} </p><p class="round-score player${i}-score"> $${player.roundScore} </p> <p class="total-score"> Grand Total: $${player.totalScore} </p></div>`)
    })
  },

  updatePuzzleCategory(currentPuzzleCategory) {
    $('.puzzle-category').replaceWith(`<h3 class="puzzle-category">${currentPuzzleCategory}</h3>`);
  },
  
  updateRound(round) {
    $('.current-round').text(round);
  },

  updateRoundScore(i, currentScore) {
    $(`.player${i}-score`).text(`$${currentScore}`);
  },

  updateSpinValue(spinValue) {
    $('.spin-value').text(spinValue);
  }
};