var currentPlayer = 'X'
var playingArray = [0, 0, 0,
                    0, 0, 0,
                    0, 0, 0]
var winner
// function insertArray (squareOne) {
//   var extract = squareOne.substr(1, 1)
//   var newID = parseInt(extract)
//   console.log(newID);
// }

// function play (tictac) {
//   return function () {
//     if ((document.getElementById(id).innerHTML === 'X') || (document.getElementById(id).innerHTML === 'O')) {
//
//     } else {
//       if (currentPlayer === 'X') {
//         document.getElementById(id).innerHTML = currentPlayer
//         currentPlayer = 'O'
//         checkWinner()
//         isGameOver()
//       } else {
//         document.getElementById(id).innerHTML = currentPlayer
//         isGameOver()
//         currentPlayer = 'X'
//         checkWinner()
//       }
//     }
//   }
// }

function play (event) {
  if (event.target.textContent === '' && currentPlayer === 'X') {
    event.target.textContent = 'X'
    playingArray[event.target.id] = 'X'
    checkWinner()
    isGameOver()
    currentPlayer = 'O'
  } else if (event.target.textContent === '' && currentPlayer === 'O') {
    event.target.textContent = 'O'
    playingArray[event.target.id] = 'O'
    checkWinner()
    isGameOver()
    currentPlayer = 'X'
  }
}




function checkWinner () {
  if (playingArray[0] === playingArray[1] && playingArray[1] === playingArray[2]) {
    winner = playingArray[0]
  } else if (playingArray[3] === playingArray[4] && playingArray[4] === playingArray[5]) {
    winner = playingArray[3]
  } else if (playingArray[6] === playingArray[7] && playingArray[7] === playingArray[8]) {
    winner = playingArray[6]
  } else if (playingArray[0] === playingArray[3] && playingArray[3] === playingArray[6]) {
    winner = playingArray[0]
  } else if (playingArray[1] === playingArray[4] && playingArray[4] === playingArray[7]) {
    winner = playingArray[1]
  } else if (playingArray[2] === playingArray[5] && playingArray[5] === playingArray[8]) {
    winner = playingArray[2]
  } else if (playingArray[0] === playingArray[4] && playingArray[4] === playingArray[8]) {
    winner = playingArray[0]
  } else if (playingArray[2] === playingArray[4] && playingArray[4] === playingArray[6]) {
    winner = playingArray[2]
  } else {
    winner = 'it\'s a draw'
  }
}


function isGameOver () {
  if (winner === 'X' || winner === 'O') {
    document.getElementById('messageBox').innerHTML = 'Winner is: ' + winner
  } else if (!playingArray.includes(0)) {
    document.getElementById('messageBox').innerHTML = 'It\'s a draw!'
  }
}


var grids = document.querySelectorAll('div .grid')
for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener('click', play)
}

// document.getElementById("g0").addEventListener("click", play('g0'))
// document.getElementById("g1").addEventListener("click", play('g1'))
// document.getElementById("g2").addEventListener("click", play('g2'))
// document.getElementById("g3").addEventListener("click", play('g3'))
// document.getElementById("g4").addEventListener("click", play('g4'))
// document.getElementById("g5").addEventListener("click", play('g5'))
// document.getElementById("g6").addEventListener("click", play('g6'))
// document.getElementById("g7").addEventListener("click", play('g7'))
// document.getElementById("g8").addEventListener("click", play('g8'))
