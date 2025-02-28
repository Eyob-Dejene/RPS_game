let humanScore =0;
let computerScore =0;
let compChoice;
let humanWon ="Human Won";
let compWon="Computer Won";

let winnerPlayer;
let humanHighscore =0;
let compHighScore =0;
function getComputerChoice(compChoice){
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0){
        compChoice ="ROCK";  
        console.log("COMPUTER CHOOSE " + compChoice);
    } else if (compChoice == 1){
        compChoice = "PAPER";
        console.log("COMPUTER CHOOSE " + compChoice);

    } else if (compChoice == 2){
        compChoice = "SISSORS";
        console.log("COMPUTER CHOOSE " + compChoice);
    }
    return compChoice;
}

let humChoice;
function getHumanChoice (humChoice){
    humChoice= prompt("Choose   | Rock | Paper | Sissors | ");
    if(((humChoice.toUpperCase() != "ROCK") && (humChoice.toUpperCase() != "PAPER")) && (humChoice.toUpperCase() != "SISSORS"))
    {
        alert("Invalid Value Entered!")
    } else {
        humChoice = humChoice.toUpperCase();
        console.log("Human Choose " + humChoice);

    } 
    return humChoice;
}

function playRound (humChoice,compChoice ){


    if (humChoice === compChoice){
        humanScore=0;
        computerScore=0;
    } else if ((humChoice === "ROCK") && (compChoice === "PAPER")){
        console.log("You Lost! "+ compChoice + " beats " + humChoice)
        computerScore+=1;
    } else if ((humChoice === "ROCK") && (compChoice === "SISSORS")) {
        console.log("You Won! "+ humChoice + " beats " + compChoice)
        humanScore +=1
    } else if ((humChoice === "PAPER") && (compChoice === "ROCK" )){
        console.log("You Won! "+ humChoice + " beats " + compChoice)
        humanScore+=1
    } else if ((humChoice === "PAPER") && (compChoice === "SISSORS")){
        console.log("You Lost! "+ compChoice + " beats " + humChoice)
        computerScore+=1
    } else if ((humChoice === "SISSORS") && (compChoice === "ROCK")){
        console.log("You Lost! "+ compChoice + " beats " + humChoice)
        computerScore+=1
    } else if ((humChoice === "SISSORS") && (compChoice === "PAPER")){
        console.log("You Won! "+ humChoice + " beats " + compChoice)
        humanScore+=1

    } else {
        console.log("Invalid Choice!")

    }
    if (humanScore === computerScore){
     return 0;
    } else if (humanScore > computerScore){
        return humanWon;

    } else if (computerScore > humanHighscore){
        return compWon;
    }
    else 
     return 0;
}
//console.log(playRound(getHumanChoice(),getComputerChoice()));


function playGame(rounds){
  
    winnerPlayer=playRound(getHumanChoice(),getComputerChoice());
if (winnerPlayer === "Human Won"){
 humanHighscore +=1
} else if (winnerPlayer === "Computer Won"){
    compHighScore +=1
} else if (winnerPlayer === 0){
    console.log("Tie! No Points for both")
} else {
    console.log("Something Must be Wrong!")
}

}

playRounds();
function playRounds(){

playGame();
playGame();
playGame();
if (humanHighscore > compHighScore){
    console.log("You WON The Game !!")
    console.log("Full Score: " + humanHighscore,compHighScore);

} else if (compHighScore > humanHighscore){
    console.log("Computer WON The Game !!")
    console.log("Full Score: "+ compHighScore,humanHighscore);

} else if (compHighScore === humanHighscore){
    console.log("Full Score: "+ compHighScore,humanHighscore);
    alert("It's a TIE! Play Again :-) ");
}

else {
    alert("No Winner Play one More round.")
}
}




