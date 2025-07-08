let playGame = confirm("Do you want to play a game?");
if(playGame){
    let playerChoice = prompt("Please Enter rock, paper, or scissors:");
    if(playerChoice === null)
        alert("Game cancelled.");
    else{
        let player = playerChoice.trim().toLowerCase();
        if(player === "rock" || player === "paper" || player === "scissors"){
            let computerChoice = Math.floor(Math.random() * 3 + 1);
            let computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? 
            "paper" : "scissors";
            alert("Computer chose: " + computer);

            let result = player === computer ? "It's a tie!" 
            : player === "rock" && computer === "scissors" ? `player selects ${player}\ncomputer selects ${computer}\nplayer wins!` 
            : player === "paper" && computer === "rock" ? `player selects ${player}\ncomputer selects ${computer}\nplayer wins!` 
            : player === "scissors" && computer === "paper" ? `player selects ${player}\ncomputer selects ${computer}\nplayer wins!` 
            : `player selects ${player}\ncomputer selects ${computer}\ncomputer wins!`;
            alert(result);
            let playAgain = confirm("Do you want to play again?");
            playAgain ? location.reload() : alert("Thanks for playing!");
        } else {
            alert("Invalid choice. Please enter rock, paper, or scissors.");
        }
    } 
} else {
    alert("okay, maybe next time!");
}