
//will randomly return either rock, paper or scissors
function computerPlay(){
    let randomizer = Math.floor(Math.random() * 3) + 1;
    if(randomizer === 1){
        return "rock"
    }else if(randomizer === 2){
        return "paper"
    }else return "scissors"
}

document.getElementById("rock").addEventListener("click", () => {
  playRound("rock", computerPlay())
})

document.getElementById("paper").addEventListener("click", () => {
    playRound("paper", computerPlay())
})

scissors.addEventListener('click', () => {
    playRound("scissors", computerPlay())
})

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection){
  console.log({player: playerSelection, cpu: computerSelection})
  if(playerWins == 5){
      console.log("you already beat the computer!")
  }else if(computerWins == 5){
      console.log("LLLLL")
  }else{
        if(playerSelection===computerSelection){
            document.getElementById("round-result").textContent = "It's a tie!"
        }else if(playerSelection==="rock"){
            if(computerSelection==="paper"){
                document.getElementById("round-result").textContent = "You lose! Paper beats Rock"
                computerWins++
            }
            else{
                document.getElementById("round-result").textContent = "You win! Rock beats Scissors"
                playerWins++
            }
        }else if(playerSelection==="scissors"){
            if(computerSelection==="rock"){
                document.getElementById("round-result").textContent = "You lose! Rock beats Scissors"
                computerWins++
            }
            else{
                document.getElementById("round-result").textContent = "You win! Scissors beats Paper"
                playerWins++
            }
        }else if(playerSelection==="paper"){
                if(computerSelection==="scissors"){
                    document.getElementById("round-result").textContent = "You lose! Scissors beats Paper"
                    computerWins++
                }
                else{
                    document.getElementById("round-result").textContent = "You win! Paper beats Rock"
                    playerWins++
                }
            }
  
        if(playerWins == 5){
            document.getElementById("final-result").textContent = "You beat the computer!"
        }else if(computerWins == 5){
            document.getElementById("final-result").textContent = "Computer wins!!!"
        }
  }
    document.getElementById("player-result").textContent = `Player: ${playerWins}`
    document.getElementById("computer-result").textContent = `Computer: ${computerWins}`
        console.log({player: playerWins, computer: computerWins})
}

// placing computer and player choice into a variable


// function game(){
//     for(let i=0;i<5; i++){
//         playerSelection = playerPlay()
//         computerSelection = computerPlay()
//         playRound(playerSelection, computerSelection);
//     }
// }
// game();

