let humanScore =0;
let computerScore =0;
let compChoice;
function getComputerChoice(compChoice){
    compChoice = Math.floor(Math.random() * 3);
    console.log(compChoice);
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

}
//console.log(getComputerChoice());
let humChoice;
function getHumanChoice (){
    humChoice= prompt("Choose   | Rock | Paper | Sissors | ");
    if(((humChoice.toUpperCase() != "ROCK") && (humChoice.toUpperCase() != "PAPER")) && (humChoice.toUpperCase() != "SISSORS"))
    {
        alert("Invalid Value Entered!")
    } else {
        humChoice = humChoice.toUpperCase();
        console.log("Human Choose " + humChoice);
    }
}
humChoice = getHumanChoice() 
compChoice= getComputerChoice();
function playRound (humChoice,compChoice){

    if (humChoice === compChoice){
        console.log("Play Again!")
    } else {
        console.log("There is a winner");
    }
}
//playRound(getHumanChoice(),getComputerChoice());
playRound();
