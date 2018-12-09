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
    players.forEach((player, i) => {
      $('.player-info').append(`<p> Player ${i + 1} Name: ${player.playerName} <br /> Round Score: ${player.roundScore} <br /> Total Score: ${player.totalScore} </p>`)
    })
    
  },

  updateRoundScoreOnDom() {

  }


}