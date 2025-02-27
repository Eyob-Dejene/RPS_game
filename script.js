let humanScore =0;
let computerScore =0;
let compChoice;

function getComputerChoice(compChoice){
    compChoice = Math.floor(Math.random() * 3);
    //console.log(compChoice);
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
        console.log("Tie! Play Again!")
    } else if ((humChoice === "ROCK") && (compChoice === "PAPER")){
        console.log("You Lost! "+ compChoice + " beats " + humChoice)
    } else if ((humChoice == "ROCK") && (compChoice == "SISSORS")) {
        console.log("You Won! "+ humChoice + " beats " + compChoice)
    } else if ((humChoice == "PAPER") && (compChoice == "ROCK" )){
        console.log("You Won! "+ humChoice + " beats " + compChoice)
    } else if ((humChoice == "PAPER") && (compChoice == "SISSORS")){
        console.log("You Lost! "+ compChoice + " beats " + humChoice)
    } else if ((humChoice == "SISSORS") && (compChoice == "ROCK")){
        console.log("You Lost! "+ compChoice + " beats " + humChoice)
    } else if ((humChoice == "SISSORS") && (compChoice == "PAPER")){
        console.log("You Won! "+ humChoice + " beats " + compChoice)

    } else {
        console.log("Unknown Result")

    }
}
playRound(getHumanChoice(),getComputerChoice());


