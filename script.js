function getComputerChoice() {
    let rock = "Rock"
    let paper = "Paper"
    let scissors ="Scissors"
    let randomValue = Math.random();
   if (randomValue <= 0.33) {
        return rock
   } else if (randomValue <= 0.66) {
    return paper 

   } else return scissors;
 }
function game() {
   let roundsPlayed = 0;
   let playerWins = 0;
   let computerWins = 0 ;
   gameWinner="";
   while (roundsPlayed <5 ){
    roundsPlayed++;
    const computerSelection = getComputerChoice();
    let playerSelection = prompt("Chose one of them(Rock, Paper, Scissors)");
   console.log(roundPlay(letterCap(playerSelection), computerSelection))
    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
    
  
 
 function roundPlay(playerSelection, computerSelection) {
    let tie= "It's a tie! " + playerSelection + " vs " + computerSelection + "."
    let playerWin= "You Win! " + playerSelection + " beats " + computerSelection + "."
    let computerWin= "You Lose! " + playerSelection + " lose against " + computerSelection + "."
           if (playerSelection === computerSelection){
        return tie;
    } else if ((playerSelection === "Rock") && (computerSelection === "Scissors")){
        playerWins++
        return playerWin;
    } else if  ((playerSelection === "Scissors") && (computerSelection === "Rock")){
        computerWins++
        return computerWin;
    } else if ((playerSelection === "Paper") && (computerSelection === "Rock")){
         playerWins++
        return playerWin;
    } else if ((playerSelection === "Paper") && (computerSelection === "Scissors")){
        computerWins++
        return computerWin;
    } else if ((playerSelection === "Scissors") && (computerSelection === "Paper")){
        playerWins++
        return playerWin;
    } else if ((playerSelection === "Rock") && (computerSelection === "Paper")){
        computerWins++
     return computerWin;
    }
  }
}  if (playerWins > computerWins){
        gameWinner = "YOU WIN";
    } else if ( playerWins < computerWins) {
        gameWinner = "Computer win";
    } else gameWinner = " It's a Tie";
    console.log("The five rounds game winner is: " + gameWinner );
  

 function letterCap(playerSelection) {
    let allLowerCase = playerSelection.toLowerCase()
    let firstLatterCap = allLowerCase.charAt(0).toUpperCase() + allLowerCase.slice(1)
    return firstLatterCap;
   }
 }
game();
 

