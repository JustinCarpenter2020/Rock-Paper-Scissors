let playerSelection = ""

function player(play) {
  if (play == 'rock') {
    playerSelection = "Rock"
  } else if (play == 'scissors') {
    playerSelection = "Scissors"
  } else if (play == 'paper') {
    playerSelection = "Paper"
  }
}



const choices = ["Rock", "Paper", "Scissors"]
function computer() {
    let computerSelection = choices[Math.floor(Math.random() * Math.floor(choices.length))]
    console.log(computerSelection)
    return computerSelection
}


function play(playerSelection, computerSelection) {
  player()

  if (playerSelection == 'Rock' && computerSelection === 'Scissors' || playerSelection == 'Paper' && computerSelection === 'Rock' || playerSelection == 'Scissors' && computerSelection === 'Paper') {
    return "Victory!!";
  } else if (playerSelection == 'Rock' && computerSelection === 'Paper' || playerSelection == 'Paper' && computerSelection === 'Scissors' || playerSelection == 'Scissors' && computerSelection === 'Rock') {
    return "Defeat";
  } else if (playerSelection == computerSelection) {
    return "Draw";
  }
  console.log("Player chooses: " + playerSelection);
  console.log("Computer chooses: " + computerSelection);
  console.log(play())
}
