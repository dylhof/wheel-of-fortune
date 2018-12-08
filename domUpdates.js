const domUpdates = {
  updatePuzzleBoardOnDom(currentAnswer) {
    $('.puzzle-board').text(currentAnswer)
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
  }
}