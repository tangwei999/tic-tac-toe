//
// set grid to listen to click event, based on turn append innerHTML X or O into the grid.

// var playerOne = 'X'
// var playerTwo = 'O'
var currentPlayer = 'X'

function play(id) {
  return function() {
    if (currentPlayer === 'X') {
      document.getElementById(id).innerHTML = currentPlayer;
      currentPlayer = 'O'
    }
    else {
      document.getElementById(id).innerHTML = currentPlayer;
      currentPlayer = 'X'
    }
  }
}

document.getElementById("one").addEventListener("click", play('one'))
document.getElementById("two").addEventListener("click", play('two'))
document.getElementById("three").addEventListener("click", play('three'))
document.getElementById("four").addEventListener("click", play('four'))
document.getElementById("five").addEventListener("click", play('five'))
document.getElementById("six").addEventListener("click", play('six'))
document.getElementById("seven").addEventListener("click", play('seven'))
document.getElementById("eight").addEventListener("click", play('eight'))
document.getElementById("nine").addEventListener("click", play('nine'))
