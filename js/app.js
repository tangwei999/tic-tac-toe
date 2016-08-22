//
// set grid to listen to click event, based on turn append innerHTML X or O into the grid.


var currentPlayer = 'X'
playingArray = [null, null, null, null, null, null, null, null, null]

// run a function that converts id to index of array

// Constantly check if the grids have a winning combination before going back to alternate the player.
//
// Comparing the string inside the grids.

function checkWinner() {
  if (playingArray[0] === playingArray[1] && playingArray[0] === playingArray[2]) {
      document.getElementsByTagName("h2")[0].innerHTML = "You Won!"
    }
}


function play(id) {
  return function() {
    if (currentPlayer === 'X') {
      document.getElementById(id).innerHTML = currentPlayer;
      currentPlayer = 'O';
      // replace element in playingArray
      checkWinner()
    }
    else {
      document.getElementById(id).innerHTML = currentPlayer;
      currentPlayer = 'X';
      checkWinner()
    }
  }
}

document.getElementById("g0").addEventListener("click", play('g0'))
document.getElementById("g1").addEventListener("click", play('g1'))
document.getElementById("g2").addEventListener("click", play('g2'))
document.getElementById("g3").addEventListener("click", play('g3'))
document.getElementById("g4").addEventListener("click", play('g4'))
document.getElementById("g5").addEventListener("click", play('g5'))
document.getElementById("g6").addEventListener("click", play('g6'))
document.getElementById("g7").addEventListener("click", play('g7'))
document.getElementById("g8").addEventListener("click", play('g8'))
