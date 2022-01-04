
//will randomly return either rock, paper or scissors
function computerPlay(){
    let randomizer = Math.floor(Math.random() * 3) + 1;
    if(randomizer === 1){
        return "rock"
    }else if(randomizer === 2){
        return "paper"
    }else return "scissors"
}

//asks user to input rock, paper, or scissors converts it to lowercase if it is not, and returns it
function playerPlay(){
    let userChoice = prompt("Pick rock, paper, or scissors.");
    let choice = userChoice.toLowerCase();
    return choice
}

let playerWins = 0;
let computerWins = 0;

function playRound(playerSelection, computerSelection){
  console.log({player: playerSelection, cpu: computerSelection})
    if(playerSelection===computerSelection){
        console.log("its a tie!")
    }else if(playerSelection==="rock"){
        if(computerSelection==="paper"){
            console.log("you lose! paper beats rock")
            computerWins++
        }
        else{
            console.log("you win! rock beats scissors")
            playerWins++
        }
    }else if(playerSelection==="scissors"){
        if(computerSelection==="rock"){
            console.log("you lose! rock beats scissors")
            computerWins++
        }
        else{
            console.log("you win! scissors beats paper")
            playerWins++
        }
    }else if(playerSelection==="paper"){
            if(computerSelection==="scissors"){
                console.log("you lose! scissors beats paper")
                computerWins++
            }
            else{
                console.log("you win! paper beats rock")
                playerWins++
            }
     }
        console.log({player: playerWins, computer: computerWins})
}

// placing computer and player choice into a variable
let playerSelection;
let computerSelection;

// game()
function game(){
    for(let i=0;i<5; i++){
        playerSelection = playerPlay()
        computerSelection = computerPlay()
        playRound(playerSelection, computerSelection);

    }
}
game();
