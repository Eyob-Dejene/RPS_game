let shootNum; 
let humanScore =0;
let computerScore =0;
function getComputerChoice(shootNum){
    shootNum = Math.floor(Math.random() * 3);
    console.log(shootNum);
    if (shootNum == 0){
        console.log("Rock");
    } else if (shootNum == 1){
        console.log("Paper")
    } else {
        console.log("Scissors");
    }

}
console.log(getComputerChoice());
let humanplay;
function getHumanChoice (){
     humanplay= prompt("Choose 0->Rock | 1->Paper | 2->Sissors");
    if(humanplay >=3){
        alert("Please Choose 0, 1 or 2 ONLY!")
    } else {
        console.log(humanplay);
    }
    
if (humanplay == 0){
        console.log("You Choose " + humanplay);
    } else if (humanplay == 1){
        console.log("You Choose " + humanplay);
    } else if(humanplay == 2) {
        console.log("You Choose " + humanplay);
    } else {
        console.log("You Choose Wrong Number! " + humanplay);
    }
}
getHumanChoice();
