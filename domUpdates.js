const domUpdates = {
  updatePuzzleBoardOnDom(currentPuzzle) {
    $('.puzzle-board').text(currentPuzzle.correct_answer)
  },

  updatePuzzleCategoryOnDom(currentPuzzle){
    currentPuzzle.category
  },

  updateSpinValueOnDom(spinValue) {
    $('.spin-value').text(spinValue);
  }

}