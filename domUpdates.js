const domUpdates = {
  updatePuzzleBoardOnDom(currentAnswer) {

    $('.puzzle-board').text(currentAnswer.charAt(0).toUpperCase() + currentAnswer.slice(1))
  },

  updatePuzzleCategoryOnDom(currentPuzzle){
    currentPuzzle.category
  },

  updateSpinValueOnDom(spinValue) {
    $('.spin-value').text(spinValue);
  },

  updateRoundOnDom(round) {
    $('.current-round').text(round);
  },

  updateCurrentPlayerOnDom(player) {
    $('.current-player').text(player);
  },

  updatePlayerInfoOnDom(players) {
    $('.player-info-toggle').remove();
    players.forEach((player, i) => {
      $('.player-info').append(`<div class="player-info-toggle"> <p class="player-name"> ${player.playerName} </p><p class="round-score"> $${player.roundScore} </p> <p class="total-score"> Grand Total: $${player.totalScore} </p></div>`)
    })
  },

  updateRoundScoreOnDom() {

  }


}